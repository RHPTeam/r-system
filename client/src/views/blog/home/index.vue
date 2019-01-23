<template>
  <div :data-theme="currentTheme" class="blog--content">
    <app-header/>
    <div class="ct pl_4 pr_4 pr_sm_0 pl_sm_0">
      <div class="r">
        <div class="c_12">
          <app-trend :blogs='allBlog'/>
        </div>
        <div class="c_12">
          <hr/>
        </div>
        <div class="c_12 c_sm_12 c_md_12 c_lg_8 c_xl_8 pl_lg_3 pr_lg_3">
          <app-lastest/>
          <div class="c_12 p_0 d_block d_lg_none">
            <hr/>
          </div>
        </div>
        <div class="c_12 c_sm_12 c_md_12 c_lg_4 c_xl_4 pl_lg_3 pr_lg_3">
          <app-popular/>
          <app-ads class="d_none d_lg_block"/>
        </div>
        <div class="c_12">
          <hr/>
        </div>
        <div class="c_12 c_sm_12 c_md_12 c_lg_8 c_xl_8">
          <app-feature/>
        </div>
      </div>
    </div>
    <div>{{allBlog}}</div>
    <app-footer/>
    <div class="blog--change position_fixed text_center">
      <div class="change--theme" @click="changeTheme">
        <div v-if="isThemeLight" class="theme--dark"><icon-base icon-name="moon" width="30" height="30" viewBox="0 0 24.678 25.761"><icon-moon /></icon-base></div>
        <div v-else class="theme--light"><icon-base icon-name="sun" width="30" height="30" viewBox="0 0 30.152 30.152"><icon-sun/></icon-base></div>
      </div>
      <div class="change--size"><icon-base icon-name="font-size" width="30" height="30" viewBox="0 0 32.678 22.018"><icon-font-size /></icon-base></div>
    </div>
  </div>
</template>

<script>
import BlogService from "@/services/modules/blog.service";

import IconBase from "@/components/icons/IconBase";
import IconFontSize from "@/components/icons/IconFontSize";
import IconMoon from "@/components/icons/IconMoon";
import IconSun from "@/components/icons/IconSun";
import AppHeader from "@/components/blog/header";
import AppFooter from "@/components/blog/footer";
import AppAds from "@/components/blog/ads";
import AppTrend from "@/views/blog/home/components/trend";
import AppLastest from "@/views/blog/home/components/lastest";
import AppFeature from "@/views/blog/home/components/feature";
import AppPopular from "@/views/blog/home/components/popular";
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
    AppTrend,
    AppLastest,
    AppFeature,
    AppPopular,
    AppAds,
    AppFooter
  },
  computed: {
    valueTheme() {
      return this.theme;
    },
    currentTheme() {
      return this.$store.getters.themeName;
    },
    allBlog() {
      return this.$store.getters.blogs;
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
      this.$store.dispatch("changeTheme", this.valueTheme);
    }
  },
  async mounted() {
    const allblog = await BlogService.index();
    this.$store.dispatch("index", allblog.data.data);
  }
};
</script>

<style scoped lang="scss">
@import "../../../components/blog/scss/main";
</style>
