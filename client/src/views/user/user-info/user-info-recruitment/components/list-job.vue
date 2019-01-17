<template>
  <div class="list--job ct">
    <div class="title--job r">
      <h2>Danh sách công việc</h2>
    </div>
    <div v-for="(n,index) in 5" :key="index">
       <app-job/>
    </div>
   
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
