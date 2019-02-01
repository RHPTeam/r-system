<template>
  <div class="list---blog ct">
    <div class="title--blog r">
      <h2>Danh sách bài viết</h2>
    </div>
    <div class="m_3 text_center" v-if="!blogs">
      <span>Bạn chưa có bài viết nào!</span>
    </div>
    <div v-for="(blog,index) in blogs" :key="index" v-else>
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
      return this.$store.getters.listBlogByUser;
    }
  },
  async created() {
    this.$store.dispatch('getListBlogByUser');
  }
};
</script>
<style scoped lang="scss">
@import "list-blog.scss";
</style>
