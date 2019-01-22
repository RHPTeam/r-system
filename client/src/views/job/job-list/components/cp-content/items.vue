<template>
  <div class="position_relative job--items p_5">
    <div v-if="!job"></div>
    <div class="item" v-else>
      <div class="job--title mt_2">
        <router-link tag="h4" :to="{ name: 'job-details', params: { jobId: job._id } }">{{ job.position }} - {{ job.office }}</router-link>
        <span class="position_absolute">18 gio truoc</span>
      </div>
      <div class="job--of-company mt_1"><span>{{ job.nameCompany }} - {{ job.locationCompany }}</span></div>
      <div class="job--offer mt_1"><span>{{ job.salary }} VNĐ</span></div>
      <div v-if="!tags"></div>
      <div v-else class="job--tags mt_4">
        <router-link tag="a" v-for="tag in tags" :key="tag" to="/jobs">{{ tag }}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["job"],
  computed: {
    tags() {
      if (!this.job) return;
      if (!this.job.technologies) return;
      const arr = this.job.technologies.split(",");
      return arr;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "items";
</style>
