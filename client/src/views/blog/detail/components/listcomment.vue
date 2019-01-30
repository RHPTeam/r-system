<template>
<div class="comment-wrap">
   <div v-for="(comment,index) in comments" :key="index">
      <app-comment :comment="comment" :index="index" />
    </div>
</div>

</template>

<script>
import CommentService from "@/services/modules/comment.service";

import AppComment from "@/views/blog/detail/components/comment";
export default {
  data() {
    return {
      componentLoaded: false
    };
  },
  components: {
    AppComment
  },
  computed: {
    comments() {
      if (!this.componentLoaded) return;
      const comments = this.$store.getters.commentsByBlog;
      return comments;
    }
  },
  async mounted() {
    const blogId = this.$route.params.blogId;
    CommentService.getByBlog(blogId).then(res => {
      this.$store.dispatch("commentsByBlog", res.data.data);
      this.componentLoaded = true;
    });
  }
};
</script>

<style scoped lang="scss">
@import "./detail";
</style>
