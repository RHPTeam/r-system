<template>
  <div class="content">
    <div class="ct_f p_0 p_md_2">
      <div class="r">
        <div class="c_12 c_sm_12 c_md_12 c_xl_4 pl_md_2 pr_md_2">
          <div class="ct_f p_0 pl_sm_2 pr_sm_2">
            <div class="r">
              <div class="c_12 c_sm_6 c_md_6 c_xl_12 mb_3 pl_sm_2 pr_sm_2">
                <app-user-level/>
              </div>
              <div class="c_12 c_sm_6 c_md_6 c_xl_12 mb_3 pl_sm_2 pr_sm_2">
                <app-user-history/>
              </div>
            </div>
          </div>
        </div>
        <div class="c_12 c_sm_12 c_md_12 c_xl_8 pl_md_2 pr_md_2">
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
