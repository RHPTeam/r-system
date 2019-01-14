<template>
  <div class="content">
    <div class="ct_f p_2">
      <div class="r">
        <div class="c_sm_12 c_md_4 pl_2 pr_2">
          <app-user-level class="mb_3"/>
          <app-user-history/>
        </div>
        <div class="c_sm_12 c_md_8 pl_2 pr_2">
          <app-user-tags class="mb_3"/>
          <app-user-posts/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppUserLevel from "./components/level";
import AppUserHistory from "./components/history";
import AppUserTags from "./components/tags";
import AppUserPosts from "./components/posts";
export default {
  components: {
    AppUserLevel,
    AppUserHistory,
    AppUserTags,
    AppUserPosts
  }
};
</script>

<style scoped lang="scss">
</style>
