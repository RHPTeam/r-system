<template>
  <div class="ct_f p_0">
    <div class="r">
      <div class="c_12 c_sm_12 c_md_6 c_xl_6 pb_5">
        <app-user-answer/>
      </div>
      <div class="c_12 c_sm_12 c_md_6 c_xl_6 pb_5">
        <app-user-question/>
      </div>
    </div>
    <div class="r">
      <div class="c_12 c_sm_12 c_md_6 c_xl_6 pb_5">
        <app-user-honor/>
      </div>
      <div class="c_12 c_sm_12 c_md_6 c_xl_6">
        <app-user-all-tag/>
      </div>
    </div>
  </div>
</template>

<script>
import AppUserAnswer from "@/views/user/user-info/user-activity-answer";
import AppUserQuestion from "@/views/user/user-info/user-activity-question";
import AppUserHonor from "@/views/user/user-info/user-activity-honor";
import AppUserAllTag from "@/views/user/user-info/user-activity-all-tag";
export default {
  components: {
    AppUserAnswer,
    AppUserQuestion,
    AppUserHonor,
    AppUserAllTag
  }
};
</script>

<style scoped>
</style>
