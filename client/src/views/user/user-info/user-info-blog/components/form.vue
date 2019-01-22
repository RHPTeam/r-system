<template>
  <div class="create---blog ct">
    <div class="title--blog r">
      <h2 v-text="formChange.title == '' ? 'Tạo bài viết': formChange.title"></h2>
    </div>
    <form class="create--blog--form" @submit.prevent="formChange.title == '' ? createBlog() : updateBlog()">
      <div class="form_group">
        <label>Tên bài viết</label>
        <input
          type="text"
          class="form_control"
          v-model="blog.title"
          placeholder=" Tiêu đề bài viết"
        >
      </div>
      <div class="form_group">
        <label>Slug bài viết</label>
        <div class="d_flex align_items_center">
          <span class="slug-url">https://rhpteam.dev/blogs/{{slug}}</span>
        </div>
      </div>
      <div class="form_group">
        <label>Mô tả bài viết</label>
        <textarea class="form_control" v-model="blog.desc" placeholder="Mô tả bài viết"></textarea>
      </div>
      <div class="form_group">
        <label>Thể loại bài viết</label>
        <select class="form_control" v-model="blog._category">
          <option v-if="!blog._category" :selected="!blog._category" :value="blog._category">Chọn thể loại bài viết</option>
          <option
            v-for="category in categories"
            :key="category._id"
            :value="category._id"
            :selected="category._id == blog._category ? 'selected' : ''"
          >{{category.name}}</option>
        </select>
        <small
          class="form_text text_muted"
        >Nếu bài viết của bạn quá nhiều lần chọn sai thể loại bài viết, bạn sẽ bị mất quyền viết bài.</small>
      </div>
      <div class="form_group form_textarea">
        <label>Nội dung bài viết</label>
        <ckeditor class="form_control" :editor="editor" v-model="blog.body">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </ckeditor>
      </div>
      <div class="form_group">
        <label>Ảnh bài viết</label>
        <input type="text" class="form_control" placeholder="http://" v-model="blog.image">
      </div>
      <button class="btn btn_primary btn--create" type="submit" v-text="formChange.button == '' ? 'Thêm bài viết': formChange.button"></button>
      <button class="btn btn_primary btn--create" type="button" @click="resetForm">Hủy</button>
    </form>
  </div>
</template>

<script>
import BlogService from "@/services//modules/blog.service";
import CategoryService from "@/services//modules/category.service";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: "",
      statusSelect: "1"
    };
  },
  computed: {
    slug() {
      if (!this.blog.title) return;
      const slug = this.sanitizeTitle(this.blog.title);
      return slug;
    },
    blog() {
      return this.$store.getters.blog;
    },
    categories() {
      return this.$store.getters.categories;
    },
    formChange() {
      return this.$store.getters.formChange;
    }
  },
  methods: {
    createBlog() {
      const userId = this.$route.params.userId;
      BlogService.createByUser(userId, this.blog._category, this.blog)
        .then(res => {
          this.$store.dispatch("create", res.data.data);
        })
        .then(this.resetForm);
    },
    resetForm() {
      this.$store.dispatch("clearData")
      this.$store.dispatch("clearForm")
    },
    sanitizeTitle(title) {
      let slug = "";
      // Change to lower case
      let titleLower = title.toLowerCase();
      // Letter "e"
      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, "e");
      // Letter "a"
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, "a");
      // Letter "o"
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, "o");
      // Letter "u"
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, "u");
      // Letter "d"
      slug = slug.replace(/đ/gi, "d");
      // Trim the last whitespace
      slug = slug.replace(/\s*$/g, "");
      // Change whitespace to "-"
      slug = slug.replace(/\s+/g, "-");

      return slug;
    },
    updateBlog() {
      BlogService.update(this.blog).then(res => {
        this.$store.dispatch("updateBlog", this.blog)
        // Update BlogByUser
        BlogService.getByUser(this.$route.params.userId).then(res => {
          this.$store.dispatch("showByUser", res.data.data)
        })
      })

    }
  },
  async mounted() {
    CategoryService.index().then(res => {
      this.$store.dispatch("index", res.data.data);
    });
  }
};
</script>

<style scoped lang="scss">
@import "form";
</style>
