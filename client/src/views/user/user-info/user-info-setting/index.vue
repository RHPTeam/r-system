<template>
  <div class="content">
    <div class="ct_f p_2">
      <div class="r">
        <div class="c_md_3 pl_2 pr_2">
          <app-user-setting class="mb_3"/>
          <app-user-help/>
        </div>
        <div class="c_md_9 pl_2 pr_2">
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
