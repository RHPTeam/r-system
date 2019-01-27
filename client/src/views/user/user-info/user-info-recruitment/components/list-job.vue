<template>
  <div class="list---job ct">
    <div class="title--job r">
      <h2>Danh sách công việc</h2>
    </div>
      <span v-if="jobs.length == 0">Bạn chưa có tin tuyển dụng nào!</span>
      <app-job v-else v-for="(job, index) in jobs" :key="index" :job="job" :index="index"/>
  </div>
</template>

<script>
import AppJob from "./item-job";

export default {
  components: {
    AppJob
  },
  props: ["jobs"]
};
</script>

<style scoped lang="scss">
@import "list-job.scss";
</style>
