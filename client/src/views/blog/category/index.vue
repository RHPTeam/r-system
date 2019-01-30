<template>
  <div :data-theme="currentTheme" class="blog--content">
    <app-header :categories="listCategory"/>
    <div class="category pt_4 pb_4">
      <div class="ct pl_4 pr_4 pr_sm_0 pl_sm_0">
        <div class="r">
          <div class="c_12">
            <div v-if="!getNameCategory"></div>
            <div v-else class="category--title pb_4">{{getNameCategory._category.name}}</div>
          </div>
          <div class="c_12 c_sm_12 c_md_12 c_lg_8 c_xl_8 pl_lg_3 pr_lg_3">
            <div class="c_12 p_0">
              <hr>
            </div>
            <app-feature :blog="blogFeature"/>
            <div class="c_12 p_0">
              <hr>
            </div>
          </div>
          <div class="c_12 c_sm_12 c_md_12 c_lg_4 c_xl_4 pl_lg_3 pr_lg_3">
            <app-popular :blogs="blogsPolular"/>
            <div class="c_12 p_0 d_block d_lg_none">
              <hr>
            </div>
          </div>
          <div class="c_12 c_sm_12 c_md_12 c_lg_8 c_xl_8">
            <app-lastest :blogs="lastestBlog"/>
            <div class="c_12 p_0">
              <hr>
            </div>
            <!-- <app-all :blogs="allBlogsByCategory"/> -->
            <app-pagination/>
          </div>
          <div class="c_12 c_sm_12 c_md_12 c_lg_4 c_xl_4 pl_lg_3 pr_lg_3">
            <app-ads class="d_none d_lg_block"/>
          </div>
        </div>
      </div>
    </div>

    <app-footer :categories="listCategory"/>
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
import CategoryService from "@/services/modules/category.service";
import BlogService from "@/services/modules/blog.service";

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
      if (!this.componentLoaded) return;
      return this.$store.getters.categories;
    },
    listCategory() {
      if (!this.categories) return;
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
    },
    blogsByCategory() {
      if (!this.componentLoaded) return;
      return this.$store.getters.blogsByCategory;
    },
    getNameCategory() {
      if (!this.componentLoaded) return;
      return this.$store.getters.blogsByCategory[0];
    },
    sortReactBlog() {
      if (!this.blogsByCategory) return;
      if (this.blogsByCategory.length == 0) return;
      // Sort all Blog by Category in oder number of clap,view,comment
      const sortReactBlog = this.blogsByCategory.sort(
        (a, b) =>
          b._comments.length +
          b.clap +
          b.views -
          (a._comments.length + a.clap + a.views)
      );
      return sortReactBlog;
    },
    blogFeature() {
      if (!this.sortReactBlog) return;
      if (this.sortReactBlog.length == 0) return;
      // Feature Blog
      const blogFeature = this.sortReactBlog.slice(0, 1);
      return blogFeature[0];
    },
    blogsPolular() {
      if (!this.sortReactBlog) return;
      if (this.sortReactBlog.length == 0) return;
      // Popular List Blog
      const blogsPolular = this.sortReactBlog.slice(1, 5);
      return blogsPolular;
    },
    lastestBlog() {
      if (!this.blogsByCategory) return;
      if (this.blogsByCategory.length == 0) return;
      // Lastest List Blog
      const lastestBlog = this.blogsByCategory.slice(0, 3);
      return lastestBlog;
    },
    allBlogsByCategory() {
      if (!this.blogsByCategory) return;
      if (this.blogsByCategory.length == 0) return;
      // Sort all Blog by Category in oder number clap
      const all = this.blogsByCategory.sort(
        (a, b) => b.clap  - a.clap
      );
      return all;
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
    async getBlogsByCategory() {
      // Get all Blog
      const allBlog = await BlogService.index();
      let dataAllBlog = allBlog.data.data;
      // Sort allBlog in order from new to old
      const sortNewBlog = dataAllBlog.reverse();
      this.$store.dispatch("getAllBlog", sortNewBlog);
      if (typeof dataAllBlog == "undefined") return;
      if (dataAllBlog.length == 0) return;

      // Filter blogs by category
      const categoryId = this.$route.params.categoryId;
      const blogsByCategory = dataAllBlog.filter(function(item) {
        return item._category._id == categoryId;
      });
      this.$store.dispatch("getBlogsByCategory", blogsByCategory);
    }
  },
  async mounted() {
    // Get all category
    CategoryService.index().then(res => {
      this.$store.dispatch("index", res.data.data);
    });

    this.getBlogsByCategory();

    this.componentLoaded = true;
  },
  watch: {
    "$route.params.categoryId"(id) {
      this.getBlogsByCategory();
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
    text-transform: uppercase;
  }
}
</style>
