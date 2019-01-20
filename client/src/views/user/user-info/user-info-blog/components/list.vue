<template>
  <div class="list---blog ct">
    <div class="title--blog r">
      <h2>Danh sách công việc</h2>
    </div>
    <div v-for="(n,index) in 9" :key="index">
      <app-blog/>
    </div>
    <app-paginate/>
  </div>
</template>

<script>
import AppBlog from "./item-blog";
import AppPaginate from "./paginate";
export default {
  components: {
    AppBlog,
    AppPaginate
  }
};
</script>

<style scoped lang="scss">
@import "list-blog.scss";
</style>
