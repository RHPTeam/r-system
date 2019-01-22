<template>
  <div class="about--jobs">
    <h4>About this job</h4>
    <div v-if="!job"></div>
    <div v-else class="about-detail d-flex">
      <div class="about--detail-job justify_content_md_start w_50">
        <p class="mb_1"><span>Job type :</span><label>{{job.type}}</label></p>
        <p class="mb_1"><span>Experience level :</span><label>{{job.level}}</label></p>
        <p class="mb_1"><span>Role :</span><label>{{job.role}}</label></p>
      </div>
      <div class="about--job-company w_50">
        <p class="mb_1"><span>Industry :</span> <label>{{job.typeCompany}}</label></p>
        <p class="mb_1"><span>Company size :</span><label>{{job.sizeCompany}} người</label></p>
        <p class="mb_1"><span>Company type :</span><label>{{job.office}}</label></p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ["job"]
  };
</script>
<style>
  .w_50 {
    width: 50%;
  }

  .about-detail {
    width: 100%;
  }

  label {
    font-weight: 500;
    line-height: 1.29;
    letter-spacing: -0.3px;
    color: #707070;
    margin-left: 5px;
  }
</style>
