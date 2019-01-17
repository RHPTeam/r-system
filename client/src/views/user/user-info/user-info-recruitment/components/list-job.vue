<template>
  <div class="list---job ct">
    <div class="title--job r">
      <h2>Danh sách công việc</h2>
    </div>
    <div v-for="(n,index) in 9" :key="index">
       <app-job/>
    </div>
    <app-paginate/>
  </div>
</template>

<script>
  import AppJob from "./item-job";
  import AppPaginate from "./paginate";
  export default {
    components: {
      AppJob,
      AppPaginate
    }
  }

</script>

<style scoped lang="scss">
  @import "list-job.scss";
</style>
