<template>
  <div :data-theme="currentTheme" class="blog--content">
    <app-header :categories='listCategory'/>
    <div class="category pt_4 pb_4">
      <div class="ct pl_4 pr_4 pr_sm_0 pl_sm_0">
        <div class="r">
          <div class="c_12"><div class="category--title pb_4">JAVASCRIPT</div></div>
          <div class="c_12 c_sm_12 c_md_12 c_lg_8 c_xl_8 pl_lg_3 pr_lg_3">
            <div class="c_12 p_0"><hr/></div>
            <app-feature/>
            <div class="c_12 p_0"><hr/></div>
          </div>
          <div class="c_12 c_sm_12 c_md_12 c_lg_4 c_xl_4 pl_lg_3 pr_lg_3">
            <app-popular/>
            <div class="c_12 p_0 d_block d_lg_none"><hr/></div>
          </div>
          <div class="c_12 c_sm_12 c_md_12 c_lg_8 c_xl_8">
            <app-lastest/>
            <div class="c_12 p_0"><hr/></div>
            <app-all/>
            <app-pagination/>
          </div>
          <div class="c_12 c_sm_12 c_md_12 c_lg_4 c_xl_4 pl_lg_3 pr_lg_3">
            <app-ads class="d_none d_lg_block"/>
          </div>
        </div>
      </div>
    </div>

    <app-footer :categories='listCategory'/>
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
import CategoryService from "@/services//modules/category.service";
import IconBase from "@/components/icons/IconBase";
import IconFontSize from "@/components/icons/IconFontSize";
import IconMoon from "@/components/icons/IconMoon";
import IconSun from "@/components/icons/IconSun";
import AppHeader from "@/components/blog/header";
import AppFooter from "@/components/blog/footer";
import AppAds from "@/components/blog/ads";
import AppFeature from "@/views/blog/category/components/feature";
import AppPopular from "@/views/blog/category/components/popular";
import AppLastest from "@/views/blog/category/components/lastest";
import AppAll from "@/views/blog/category/components/all";
import AppPagination from "@/views/blog/category/components/pagination";
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
    AppAds,
    AppFooter,
    AppFeature,
    AppPopular,
    AppLastest,
    AppAll,
    AppPagination
  },
  computed: {
    valueTheme() {
      return this.theme;
    },
    currentTheme() {
      return this.$store.getters.themeName;
    },
    categories() {
      return this.$store.getters.categories;
    },
    listCategory() {
      if (this.categories.length == 0) return;
      // Sort categories by number of blogs in category
      const descendingCategories = this.categories.sort(
        (a, b) => b._blogs.length - a._blogs.length
      );
      // Get all name categories
      const nameCategory = [];
      for (let i = 0; i < descendingCategories.length; i++) {
        nameCategory.push(descendingCategories[i].name);
      }
      return nameCategory
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
  }
};
</script>

<style scoped lang="scss">
@import "../../../components/blog/scss/main";
.category {
  .category--title {
    font-size: 1.857rem;
    font-weight: bold;
    line-height: 1.19;
    letter-spacing: 0.3px;
  }
}
</style>
