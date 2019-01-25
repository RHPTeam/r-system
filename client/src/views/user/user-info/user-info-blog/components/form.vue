<template>
  <div class="create---blog ct">
    <div class="title--blog r">
      <h2 v-text="formChange.title == '' ? 'Tạo bài viết': formChange.title"></h2>
    </div>
    <app-alert :message="message" :type="type"/>
    <div v-if="!blog"></div>
    <form
      v-else
      class="create--blog--form"
      @submit.prevent="formChange.title == '' ? createBlog() : updateBlog()"
    >
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
          <option
            v-if="!blog._category"
            :selected="!blog._category"
            :value="blog._category"
          >Chọn thể loại bài viết</option>
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
        <ckeditor class="form_control" :editor="editor" v-model="blog.body"></ckeditor>
      </div>
      <div class="form_group">
        <label>Ảnh bài viết</label>
        <input type="text" class="form_control" placeholder="http://" v-model="blog.image">
      </div>
      <button
        class="btn btn_primary btn--form btn--create mr_3 mt_4"
        type="submit"
        v-text="formChange.button == '' ? 'Thêm bài viết': formChange.button"
      ></button>
      <button class="btn btn_danger btn--form mt_4" type="button" @click="resetForm">Hủy</button>
    </form>
  </div>
</template>

<script>
import BlogService from "@/services//modules/blog.service";
import CategoryService from "@/services/modules/category.service";
import AppAlert from "@/components/shared/alert";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: "",
      statusSelect: "1",
      message: "",
      type: ""
      // blog: {
      //   title: "",
      //   desc: "",
      //   body: "",
      //   image: "",
      //   _category: ""
      // }
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
    },
    validateForm() {
      if (
        this.blog.title == "" ||
        this.blog.title.length < 10 ||
        this.blog.title.length > 75
      ) {
        this.type = "alert_danger";
        return (this.message =
          "Tiêu đề không được bỏ trống và nằm trong khoảng 10 - 75 ký tự!");
      }
      if (this.blog.desc == "" || this.blog.desc.length < 100) {
        this.type = "alert_danger";
        return (this.message =
          "Mô tả bài viết không được để trống và lớn hơn 100 ký tự!");
      }
      if (this.blog._category == "") {
        this.type = "alert_danger";
        return (this.message = "Bạn vui lòng lựa chọn thể loại bài viết!");
      }
      if (this.blog.body == "") {
        this.type = "alert_danger";
        return (this.message = "Nội dung không được bỏ trống!");
      }
      if (this.blog.image == "") {
        this.type = "alert_danger";
        return (this.message = "Ảnh bài viết không được bỏ trống!");
      }
    }
  },
  methods: {
    async createBlog() {
      this.validateForm;
      // Init new blog
      const blog = {
        title: this.blog.title,
        desc: this.blog.desc,
        body: this.blog.body,
        image: this.blog.image,
        slug: this.slug,
        _author: this.$route.params.userId,
        _category: this.blog._category
      };
      // validate (Should be: Create a new methods to validate pratices
      // send to api
      await BlogService.create(blog).then(res => {
        this.$store.dispatch("createBlog", res.data.data);
        this.type = "alert_success";

        this.message = res.data.message;
        setTimeout(() => {
          this.message = "";
        }, 3000);
      });
      this.resetForm();
    },
    resetForm() {
      this.$store.dispatch("clearData");
      this.$store.dispatch("clearForm");
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
    async updateBlog() {
      //get User Id
      const userId = this.$route.params.userId;
      const dataUpdate = await BlogService.update(this.blog, userId);
      this.type = "alert_success";
      this.message = dataUpdate.data.message;
      setTimeout(() => {
        this.message = "";
      }, 3000);
      this.$store.dispatch("updateBlog", this.blog);
      await BlogService.getByUser(this.$route.params.userId).then(res => {
        this.$store.dispatch("showByUser", res.data.data);
      });
      this.resetForm();
    }
  },
  async mounted() {
    CategoryService.index().then(res => {
      this.$store.dispatch("index", res.data.data);
    });
  },
  components: {
    AppAlert
  }
};
</script>

<style scoped lang="scss">
@import "form";
</style>
