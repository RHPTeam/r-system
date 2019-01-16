<template>
    <div>
        <vue-ckeditor
        v-model="content" 
        :config="config" />
    </div>
</template>

<script>
import "ckeditor";
import VueCkeditor from "vue-ckeditor2";
export default {
  components: {
    VueCkeditor
  },

  data() {
    return {
      content: "",
      config: {
        toolbar: [
          [
            "Source",
            "-",
            "Save",
            "NewPage",
            "Preview",
            "Print",
            "-",
            "Templates"
          ],
          [
            "Cut",
            "Copy",
            "Paste",
            "PasteText",
            "PasteFromWord",
            "-",
            "Undo",
            "Redo"
          ],
          ["Find", "Replace", "-", "SelectAll", "-", "Scayt"],
          [
            "Form",
            "Checkbox",
            "Radio",
            "TextField",
            "Textarea",
            "Select",
            "Button",
            "ImageButton",
            "HiddenField"
          ],
          [
            "Bold",
            "Italic",
            "Underline",
            "Strike",
            "Subscript",
            "Superscript",
            "-",
            "CopyFormatting",
            "RemoveFormat"
          ],
          [
            "NumberedList",
            "BulletedList",
            "-",
            "Outdent",
            "Indent",
            "-",
            "Blockquote",
            "CreateDiv",
            "-",
            "JustifyLeft",
            "JustifyCenter",
            "JustifyRight",
            "JustifyBlock",
            "-",
            "BidiLtr",
            "BidiRtl",
            "Language"
          ],
          ["Link", "Unlink", "Anchor", "CodeSnippet"]
        ],
        extraPlugins: "codesnippet",
        height: 300
      }
    };
  }
};
</script>

<style scoped>
</style>
