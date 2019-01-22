<template>
  <div class="main">
    <app-info/>
    <div class="ct">
      <app-item v-for="(job,index) in jobs" :key="index" :job="job" :index="index" />
    </div>
    <app-paginate/>
  </div>
</template>
<script>
  import JobService from "@/services/modules/job.service";

import AppInfo from "./cp-content/info";
import AppPaginate from "./cp-content/paginate";

import AppItem from "./cp-content/items";
export default {
  components: {
    AppInfo,
    AppItem,
    AppPaginate
  },
  data () {
    return {
      componentStatus: false
    }
  },
  computed: {
    jobs () {
      if (!this.componentStatus) return;
      return this.$store.getters.jobAll;
    }
  },
  async mounted () {
    const res = await JobService.index();
    await this.$store.dispatch("getAllJob", res.data.data)
    this.componentStatus = true;
  }
};
</script>
