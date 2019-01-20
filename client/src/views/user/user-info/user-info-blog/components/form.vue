<template>
  <div class="create---blog ct">
    <div class="title--blog r">
      <h2>Tạo bài viết</h2>
    </div>
    <div class="create--blog--form">
      <div class="form_group">
        <label>Tên bài viết</label>
        <input type="text" class="form_control" placeholder=" Tiêu đề bài viết">
      </div>
      <div class="form_group">
        <label>Slug bài viết</label>
        <div class="d_flex align_items_center">
          <span class="slug-url">https://rhpteam.dev/blogs/</span> <input type="text" class="form_control" placeholder=" example-foo-bar">
        </div>
      </div>

      <div class="form_group">
        <label>Thể loại bài viết</label>
        <input type="text" class="form_control" placeholder=" eg: Javascript">
        <small class="form_text text_muted">Nếu bài viết của bạn quá nhiều lần chọn sai thể loại bài viết, bạn sẽ bị mất quyền viết bài.</small>
      </div>
      <div class="form_group form_textarea">
        <label>Nội dung bài viết</label>
        <ckeditor class="form_control" :editor="editor" v-model="editorData">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</ckeditor>
      </div>

      <button class="btn btn_primary btn--create">Thêm bài viết</button>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: ""
    };
  }
};
</script>

<style scoped lang="scss">
@import "form";
</style>
