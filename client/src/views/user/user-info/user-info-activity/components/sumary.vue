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
        <app-user-reputation/>
      </div>
      <div class="c_12 c_sm_12 c_md_6 c_xl_6">
        <app-user-tag/>
      </div>
    </div>
  </div>
</template>

<script>
import AppUserAnswer from "./cp-summary/answers";
import AppUserQuestion from "./cp-summary/questions";
import AppUserReputation from "./cp-summary/reputations";
import AppUserTag from "./cp-summary/tags";
export default {
  components: {
    AppUserAnswer,
    AppUserQuestion,
    AppUserReputation,
    AppUserTag
  }
};
</script>

<style scoped>
</style>
