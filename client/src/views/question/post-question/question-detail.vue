<template>
  <div class="page--wrapper">
    <div class="page--content d_flex">
      <div class="r">
        <div class="c_md_8 c_12 main">
          <app-info />
          <app-content />
        </div>
        <div class="c_md_4 c_12">
          <app-article/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppContent from "@/views/question/post-question/components/content"
import AppInfo from "@/components/top/question"
import AppArticle from '@/components/article/question'
export default {
  components: {
    AppInfo,
    AppArticle,
    AppContent,
  }
};
</script>
<style lang="scss">
// @import "./../../../assets/scss/rhelp/main-content";
@import "index";
</style>

