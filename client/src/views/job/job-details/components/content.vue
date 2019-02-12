<template>
  <div class="main">
    <app-info/>
    <div class="ct_f">
      <div class="main--content p_3">
        <app-title :job="job"/>
        <app-job :job="job"/>
        <app-tags :job="job"/>
        <app-detail :job="job"/>
        <app-company :job="job"/>
        <app-culture :job="job"/>
        <app-parner :job="job"/>
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
import AppCulture from "./cp-content/culture";
import AppParner from "./cp-content/partner";
export default {
  props: ["job"],
  components: {
    AppInfo,
    AppTitle,
    AppJob,
    AppTags,
    AppDetail,
    AppCompany,
    AppCulture,
    AppParner
  }
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
