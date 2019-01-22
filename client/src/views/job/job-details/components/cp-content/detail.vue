<template>
  <div class="about--jobs-des job--border pt_3 pb_3">
    <div v-if="!job"></div>
    <div v-else class="job--desc-wrap">
      <h4>Job description</h4>
      <p>{{job.content}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["job"]
};
</script>
<style>
</style>
