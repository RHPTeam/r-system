<template>
  <div class="add--comment mb_4">
    <div class="add--comment-title mb_3">Phản hồi</div>
    <app-alert :message="message" :type="type"/>
    <form @submit.prevent="addComment()">
      <div
        class="add--input bg--item d_flex justify_content_start align_item_start p_3"
        :data-bg="currentTheme"
      >
        <div class="avatar--user position_relative mr_3">
          <img
            class="position_absolute"
            src="http://www.igeacps.it/app/uploads/2018/05/profile_uni_user.png"
          >
        </div>
        <input type="text" v-model="comment.content" placeholder="Nhập nội dung bình luận...">
      </div>
    </form>
  </div>
</template>

<script>
import CommentService from "@/services/modules/comment.service";
import AppAlert from "@/components/shared/alert";
export default {
  data() {
    return {
      message: "",
      type: ""
    };
  },
  components: {
    AppAlert
  },
  computed: {
    currentTheme() {
      return this.$store.getters.themeName;
    },
    comment() {
      return this.$store.getters.comment;
    },
    validateForm() {
      if (this.comment.content == "") {
        this.type = "alert_danger";
        return (this.message = "Nội dung bình luận không được bỏ trống!");
      }
    }
  },
  methods: {
    async addComment() {
      this.validateForm;
      // Init new comment
      const comment = {
        content: this.comment.content,
        _blog: this.$route.params.blogId,
        _user: "5c44b2ab3ffcb12f18c33394"
      };
      // validate (Should be: Create a new methods to validate pratices
      // send to api
      await CommentService.create(comment).then(res => {
        this.$store.dispatch("createCommentBlog", res.data.data);
      });
      this.resetForm();
    },
    resetForm() {
      this.comment.content = "";
    }
  }
};
</script>

<style scoped lang="scss">
@import "./detail";
</style>
