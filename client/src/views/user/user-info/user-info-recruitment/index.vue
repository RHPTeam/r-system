<template>
  <div class="content">
    <div class="main r">
      <div class="list--job c_md_12 c_lg_6  c_sm_12 c_xs_12">
        <app-list-job :jobs="jobs"/>
      </div>
      <div class="create--job c_md_12 c_lg_6 c_sm_12 c_xs_12">
        <app-create-job/>
      </div>
    </div>
  </div>
</template>

<script>
import AppListJob from "./components/list-job";
import AppCreateJob from "./components/create-job";

import JobService from "@/services/modules/job.service";

export default {
  components: {
    AppListJob,
    AppCreateJob
  },
  computed: {
    jobs() {
      return this.$store.getters.jobByUser;
    }
  },
  async mounted() {
    const res = await JobService.getJobsByUser(this.$route.params.userId);
    this.$store.dispatch("getJobUser", res.data.data);
  }
};
</script>

<style scoped lang="scss">
.content {
  background: #e9ebee !important;

  .main {
    background: #e9ebee !important;
  }
}

@media (max-width: 1000px) {
  .content {
    .main {
      .list--job {
        margin-bottom: 10px;
      }
    }
  }
}

@media (min-width: 1201px) {
  .main {
    .create--job {
      padding-left: 0px !important;
    }
  }
}
</style>
