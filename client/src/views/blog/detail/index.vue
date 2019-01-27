<template>
  <div class="post--wrapper blog--content" :data-theme="currentTheme">
    <app-header :categories='listCategory'/>
    <div class="pl_4 pr_4">
      <app-post-detail :blog = 'detailBlog'/>
    </div>
    <div class="detail--other-info p_4 mb_4" :data-theme="currentTheme">
      <div class="ct p_0">
        <div class="r">
          <div class="c_12 c_sm_12 o_sm_0 c_lg_10 o_lg_1 c_xl_8 o_xl_2">
            <app-post-other class=" pb_4 mb_5"/>
            <app-add-comment/>
            <app-comment/>
            <app-comment/>
          </div>
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
import CategoryService from "@/services//modules/category.service";
import IconBase from "@/components/icons/IconBase";
import IconFontSize from "@/components/icons/IconFontSize";
import IconMoon from "@/components/icons/IconMoon";
import IconSun from "@/components/icons/IconSun";
import AppHeader from "@/components/blog/header";
import AppFooter from "@/components/blog/footer";
import AppPostDetail from "@/views/blog/detail/components/postdetail";
import AppComment from "@/views/blog/detail/components/comment";
import AppAddComment from "@/views/blog/detail/components/addcomment";
import AppPostOther from "@/views/blog/detail/components/postother";
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
    AppFooter,
    AppPostDetail,
    AppComment,
    AppAddComment,
    AppPostOther
  },
  computed: {
    valueTheme() {
      return this.theme;
    },
    currentTheme() {
      return this.$store.getters.themeName;
    },
    detailBlog() {
      return this.$store.getters.blog;
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
  },
  async mounted() {
    const blogId = this.$route.params.blogId;
    const res = await BlogService.show(blogId);
    this.$store.dispatch("showBlog", res.data.data[0]);

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
@import "./components/detail";
</style>
