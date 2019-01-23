<template>
  <div class="job--title job--border position_relative pt_3 pb_3">
    <div v-if="!job"></div>
    <div v-else class="job--title-wrap">
      <h3>{{job.position}}</h3>
      <p>{{job.nameCompany}} - {{job.locationCompany}}</p>
      <div class="d_flex">
        <p class="job--title-small border--right">15 minutes</p>
        <p class="job--title-small pl_2">{{job._createPerson.nameDisplay}}</p>
      </div>
      <div class="job--button position_absolute">
        <a href="#" class="btn--save">Save</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["job"]
};
</script>
<style lang="scss" scoped>
.job--title {
  h3 {
    font-size: 26px;
    font-weight: 500;
    line-height: 1.27;
    letter-spacing: -0.5px;
    color: #707070;
    margin-bottom: 5px;
  }
  p {
    font-weight: 500;
    line-height: 1.29;
    letter-spacing: -0.3px;
    color: #707070;
    margin-bottom: 5px;
    &.job--title-small {
      font-size: 12px;
      line-height: 1.17;
      letter-spacing: -0.2px;
      color: #a8a8a8;
      padding: 0 8px 0 0;
    }
    &.border--right {
      border-right: 2px solid #e4e4e4;
    }
  }
  .job--button {
    top: 30%;
    right: 10%;
    .btn--save {
      padding: 8px 15px;
      border: 1px solid #776ab0;
      border-radius: 5px;
      color: #776ab0;
      outline: 0;
      text-decoration: none;
      &:hover,
      &:focus,
      &:active {
        border-color: #0077dd;
        color: #0077dd;
      }
    }
  }
}
@media (max-width: 767px) {
  .job--button {
    top: 50%;
    right: 10%;
  }
}
</style>
