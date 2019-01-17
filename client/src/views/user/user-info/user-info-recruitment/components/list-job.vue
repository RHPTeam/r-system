<template>
  <div class="list--job ct">
    <div class="title--job r">
      <h2>Danh sách công việc</h2>
    </div>
    <app-job/>
  </div>
</template>

<script>
  import AppJob from "./item-job";
  export default {
    components: {
      AppJob
    }
  }

</script>

<style scoped lang="scss">
  @import "list-job.scss";
</style>
