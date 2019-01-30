<template>
  <div class="list---blog ct">
    <div class="title--blog r">
      <h2>Danh sách bài viết</h2>
    </div>
    <div v-for="(blog,index) in blogs" :key="index">
      <app-blog :blog="blog" :index="index" />
    </div>
    <app-paginate />
  </div>
</template>
<script>
import BlogService from "@/services/modules/blog.service";

import AppBlog from "./item-blog";
import AppPaginate from "./paginate";
export default {
  components: {
    AppBlog,
    AppPaginate
  },
  computed: {
    blogs() {
      const listBlogs = this.$store.getters.blogsByUser;
      return listBlogs;
    }
  },
  async mounted() {
    const userId = this.$route.params.userId;
    BlogService.getByUser(userId).then(res => {
      this.$store.dispatch("showByUser", res.data.data);
    });
  }
};
</script>
<style scoped lang="scss">
@import "list-blog.scss";
</style>
