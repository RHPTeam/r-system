<template>
  <div :data-theme="currentTheme" class="blog--content">
    <app-header :menu='homeMenu'/>
    <div class="ct pl_4 pr_4 pr_sm_0 pl_sm_0">
      <div class="r">
        <div class="c_12">
          <app-trend :blogs='blogsTrend'/>
        </div>
        <div class="c_12">
          <hr/>
        </div>
        <div class="c_12 c_sm_12 c_md_12 c_lg_8 c_xl_8 pl_lg_3 pr_lg_3">
          <app-lastest :menu='lastestMenu' :blogs='blogsLastest'/>
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
    <app-footer/>
    <div class="blog--change position_fixed text_center">
      <div class="change--theme" @click="changeTheme">
        <div v-if="isThemeLight" class="theme--dark">
          <icon-base icon-name="moon" width="30" height="30" viewBox="0 0 24.678 25.761">
            <icon-moon/>
          </icon-base>
        </div>
        <div v-else class="theme--light">
          <icon-base icon-name="sun" width="30" height="30" viewBox="0 0 30.152 30.152">
            <icon-sun/>
          </icon-base>
        </div>
      </div>
      <div class="change--size">
        <icon-base icon-name="font-size" width="30" height="30" viewBox="0 0 32.678 22.018">
          <icon-font-size/>
        </icon-base>
      </div>
    </div>
  </div>
</template>

<script>
import BlogService from "@/services/modules/blog.service";
import CategoryService from "@/services//modules/category.service";

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
      theme: "light",
      componentLoaded: false
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
    blogsTrend() {
      if (!this.componentLoaded) return;
      return this.$store.getters.blogsTrend;
    },
    blogsLastest() {
      if (!this.componentLoaded) return;
      return this.$store.getters.blogsLastest;
    },
    categories() {
      return this.$store.getters.categories;
    },
    categories2() {
      return this.$store.getters.categories;
    },
    homeMenu() {
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
      // Get 10 item categories for Home Menu
      const homeMenu = nameCategory.slice(0, 10);
      return homeMenu;
    },
    lastestMenu() {
      if (this.categories2.length == 0) return;
      // Sort categories by number of blogs in category
      const descendingCategories = this.categories2.sort(
        (a, b) => b._blogs.length - a._blogs.length
      );
      // Get all name categories
      const nameCategory = [];
      for (let i = 0; i < descendingCategories.length; i++) {
        nameCategory.push(descendingCategories[i].name);
      }
      // Get 5 item categories for Lastest Menu
      const lastestMenu = nameCategory.slice(0, 5);
      return lastestMenu;
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
    },
  },
  async mounted() {
    // Get all Blog
    const allBlog = await BlogService.index();
    let dataAllBlog = allBlog.data.data
    // Sort in order from new to old
    dataAllBlog = dataAllBlog.reverse()
    this.$store.dispatch("getAllBlog", dataAllBlog);
    if (typeof dataAllBlog == "undefined") return;
    if (dataAllBlog.length == 0) return;


    // Get 5 blog lastest for BlogsTrend
    const blogsTrend = dataAllBlog.slice(0, 5);
    this.$store.dispatch("getBlogsTrend", blogsTrend);


    // Get 5 blog lastest for BlogsLastest
    const blogsLastest = dataAllBlog.slice(0, 5);
    this.$store.dispatch("getBlogsLastest", blogsLastest);


    // Get all category
    CategoryService.index().then(res => {
      this.$store.dispatch("index", res.data.data);
    });
    this.componentLoaded = true;
  }
};
</script>

<style scoped lang="scss">
@import "../../../components/blog/scss/main";
</style>
