<template>
  <div class="page--wrapper">
    <div class="page--content">
      <div class="r">
        <div class="c_12 c_sm_12 c_md_8 c_xl_8">
          <app-content :job="job"/>
        </div>
        <div class="c_12 c_sm_12 c_md_4 c_xl_4">
          <app-aside/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppContent from "../job-details/components/content";
import AppAside from "../job-details/components/aside";

import JobServices from "@/services/modules/job.service"
export default {
  components: {
    AppContent,
    AppAside
  },
  async mounted() {
    const res = await JobServices.show(this.$route.params.jobId)
    this.$store.dispatch("show", res.data.data)
  },
  computed: {
    job(){
      return this.$store.getters.job
    }
  }
};
</script>

<style scoped lang="scss">
@import "./../../../assets/scss/rhelp/main-content";
</style>
