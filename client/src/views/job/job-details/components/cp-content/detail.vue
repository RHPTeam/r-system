<template>
  <div class="about--jobs-des job--border pt_3 pb_3">
    <h4>Job description</h4>
    <p>{{job[0].content}}</p>
  </div>
</template>
<script>
  export default {
    props: ['job']
  }
</script>
<style>
</style>
