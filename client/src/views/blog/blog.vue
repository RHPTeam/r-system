<template>
  <div :data-theme="currentTheme" class="blog--content">
    <app-header/>
    <div class="ct pt_5 pb_5">
      <app-trend/>
    </div>
    <div class="blog--change position_fixed text_center">
      <div class="change--theme" @click="changeTheme">
        <div v-if="isThemeLight" class="theme--light"><icon-base icon-name="moon" width="30" height="30" viewBox="0 0 24.678 25.761"><icon-moon /></icon-base></div>
        <div v-else class="theme--dark"><icon-base icon-name="sun" width="30" height="30" viewBox="0 0 30.152 30.152"><icon-sun/></icon-base></div>
      </div>
      <div class="change--size"><icon-base icon-name="font-size" width="30" height="30" viewBox="0 0 32.678 22.018"><icon-font-size /></icon-base></div>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconFontSize from "@/components/icons/IconFontSize";
import IconMoon from "@/components/icons/IconMoon";
import IconSun from "@/components/icons/IconSun";
import AppHeader from "@/views/blog/blog-component/header";
import AppTrend from "@/views/blog/blog-component/trend";
export default {
  data() {
    return {
      isThemeLight: true,
      theme: "light"
    };
  },
  components: {
    IconBase,
    IconFontSize,
    IconMoon,
    IconSun,
    AppHeader,
    AppTrend
  },
  computed: {
    valueTheme() {
      return this.theme;
    },
    currentTheme() {
      return this.$store.getters.themeName;
    }
  },
  methods: {
    changeTheme() {
      this.isThemeLight = !this.isThemeLight;
      if (this.isThemeLight == true) {
        this.theme = "light";
      } else {
        this.theme = "dark";
      }
      console.log(this.valueTheme);
      this.$store.dispatch("changeTheme", this.valueTheme);
    }
  }
};
</script>

<style scoped lang="scss">
@import "./blog-scss/blog";
.blog--change {
  background-color: transparent;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  z-index: 49;
  .change--theme,
  .change--size {
    border: 2px solid #776ab0;
    border-radius: 5px;
    width: 45px;
    height: 45px;
    line-height: 58px;
    cursor: pointer;
  }
  .change--theme {
    margin-bottom: -2px;
  }
}
</style>
