<template>
  <div :data-theme="currentTheme" class="blog--content">
    <app-header :categories='listCategory'/>
    <div class="ct pl_4 pr_4 pr_sm_0 pl_sm_0">
      <div class="r">
        <div class="c_12">
          <app-trend :blogs='blogsTrend'/>
        </div>
        <div class="c_12">
          <hr/>
        </div>
        <div class="c_12 c_sm_12 c_md_12 c_lg_8 c_xl_8 pl_lg_3 pr_lg_3">
          <app-lastest :categories='listCategory' :blogs='blogsLastest'/>
          <div class="c_12 p_0 d_block d_lg_none">
            <hr/>
          </div>
        </div>
        <div class="c_12 c_sm_12 c_md_12 c_lg_4 c_xl_4 pl_lg_3 pr_lg_3">
          <app-popular :blogs='blogsPopular'/>
          <app-ads class="d_none d_lg_block"/>
        </div>
        <div class="c_12">
          <hr/>
        </div>
        <div class="c_12 c_sm_12 c_md_12 c_lg_8 c_xl_8">
          <app-feature :categories='listCategory' :blogs='blogsFeature'/>
        </div>
      </div>
    </div>
    <app-footer :categories='listCategory'/>
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
import CategoryService from "@/services/modules/category.service";

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
    blogsPopular() {
      if (!this.componentLoaded) return;
      return this.$store.getters.blogsPopular;
    },
    blogsFeature() {
      if (!this.componentLoaded) return;
      return this.$store.getters.blogsFeature;
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
      const category = [];
      for (let i = 0; i < descendingCategories.length; i++) {
        category.push(descendingCategories[i]);
      }
      return category;
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
    // Get all Blog
    const allBlog = await BlogService.index();
    let dataAllBlog = allBlog.data.data;
    if (typeof dataAllBlog == "undefined") return;
    if (dataAllBlog.length == 0) return;

    // Sort allBlog in order from new to old
    const sortNewBlog = dataAllBlog.reverse();
    this.$store.dispatch("getAllBlog", sortNewBlog);

    // Sort all Blog in oder number of clap,view,comment
    const sortReactBlog = dataAllBlog.sort(
      (a, b) =>
        (b._comments.length +
        b.clap +
        b.views) -
        (a._comments.length + a.clap + a.views)
    );

    // Get 5 blogs lastest for BlogsTrend
    const blogsTrend = sortNewBlog.slice(0, 5);
    this.$store.dispatch("getBlogsTrend", blogsTrend);

    // Get 5 blogs lastest for BlogsLastest
    const blogsLastest = sortNewBlog.slice(0, 5);
    this.$store.dispatch("getBlogsLastest", blogsLastest);

    // Get 5 blogs follow number of reaction for popular
    const blogsPopular = sortReactBlog.slice(0, 5);
    this.$store.dispatch("getBlogsPopular", blogsPopular);

    // Get 5 blogs follow number of reaction for feature
    const blogsFeature = sortReactBlog.slice(0, 5);
    this.$store.dispatch("getBlogsFeature", blogsFeature);

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
