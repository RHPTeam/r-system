<template>
  <div class="main">
    <app-info/>
    <div class="ct_f">
      <div class="main--content p_3">
        <app-title/>
        <app-job/>
        <app-tags/>
        <app-detail/>
        <app-company/>
        <app-skill/>
        <app-parner/>
      </div>
    </div>
  </div>
</template>
<script>
import AppInfo from "./cp-content/info";
import AppTitle from "./cp-content/title";
import AppJob from "./cp-content/job";
import AppTags from "./cp-content/tags";
import AppDetail from "./cp-content/detail";
import AppCompany from "./cp-content/company";
import AppSkill from "./cp-content/skill";
import AppParner from "./cp-content/partner";
export default {
  components: {
    AppInfo,
    AppTitle,
    AppJob,
    AppTags,
    AppDetail,
    AppCompany,
    AppSkill,
    AppParner
  }
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
