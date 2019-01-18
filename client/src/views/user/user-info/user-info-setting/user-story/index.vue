<template>
  <div class="card form">
    <div class="card_body">
      <h3 class="card_title font_weight_bold">Chỉnh sửa câu cá nhân</h3>
      <div class="form--content pt_2">
        <form @submit.prevent="">
          <h5>Câu chuyện cá nhân</h5>
          <ckeditor :editor="editor" v-model="editorData" />
          <div class="btn--action">
            <button class="btn btn--save">Lưu</button>
            <button type="reset" class="btn btn--cancel">Hủy bỏ</button>
          </div>
        </form>
      </div>
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

<style lang="scss">
.ck-editor__editable {
  min-height: 400px;
}

@media (max-width: 768px) {
  .btn--action {
    text-align: center !important;
  }
}

.btn--action {
  margin-top: 10px;
  text-align: right;

  button {
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.29;
    letter-spacing: 0.2px;
    text-align: center;
    color: #ffffff;
  }

  .btn--save {
    background: #776ab0;
    margin-right: 10px;
  }

  .btn--cancel {
    background: #9999;
  }
}
</style>
