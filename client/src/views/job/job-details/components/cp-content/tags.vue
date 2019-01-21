<template>
  <div class="about--jobs-tag pt_3 pb_3">
    <h4>Technologies</h4>
    <ul class="job">
      <li v-for="item in techNo" :key="item"><a href="#" class="about--tag">{{item}}</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["job"],
  computed: {
    techNo() {
      const tech = this.$store.getters.job[0].technologies;
      const arrTech = tech.split(",");
      return arrTech;
    }
  }
};
</script>
<style>
</style>
