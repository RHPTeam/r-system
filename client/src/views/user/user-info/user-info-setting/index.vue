<template>
  <div class="content">
    <div class="ct_f p_0 p_md_2">
      <div class="r">
        <div class="c_12 c_sm_12 c_md_4 c_xl_3 pl_md_2 pr_md_2">
          <div class="ct_f p_0 pl_sm_2 pr_sm_2">
            <div class="r">
              <div class="c_12 c_sm_6 c_md_12 c_xl_12 mb_3 pl_sm_2 pr_sm_2">
                <app-user-setting/>
              </div>
              <div class="c_12 c_sm_6 c_md_12 c_xl_12 mb_3 pl_sm_2 pr_sm_2">
                <app-user-help/>
              </div>
            </div>
          </div>
        </div>
        <div class="c_12 c_sm_12 c_md_8 c_xl_9 pl_md_2 pr_md_2">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppUserSetting from "@/components/user/user-setting";
import AppUserHelp from "@/components/user/user-help";
export default {
  components: {
    AppUserSetting,
    AppUserHelp
  }
};
</script>

<style lang="scss" scoped>
</style>
