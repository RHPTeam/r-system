<template>
  <div class="wrraper--menu position_sticky">
    <div class="top--bar ct d_flex justify_content_between align_items_center">
      <div class="top--bar-logo">
        <icon-base icon-name="logo" width="280" height="42" viewBox="0 0 222 30"><icon-logo /></icon-base>
      </div>
      <div class="user position_relative d_flex justify_content_end align_items_center" @click="showDropdown">
        <div class="user--avatar position_relative">
          <img class="position_absolute" src="http://www.igeacps.it/app/uploads/2018/05/profile_uni_user.png">
        </div>
        <icon-base icon-name="arrow-down" viewBox="0 0 130 130"><icon-arrow-down /></icon-base>
        <ul class="user--dropdown position_absolute" :class="{ show: showdropdown }">
          <li>Logout</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import IconBase from "../icons/IconBase";
import IconLogo from "../icons/IconLogo.vue";
import IconArrowDown from "../icons/IconArrowDown";
export default {
  data() {
    return {
      showdropdown: false
    };
  },
  methods: {
    showDropdown: function() {
      this.showdropdown = !this.showdropdown;
    }
  },
  components: {
    IconBase,
    IconLogo,
    IconArrowDown
  }
};
</script>

<style scoped lang="scss">
@import "header";
</style>
