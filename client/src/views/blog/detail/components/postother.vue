<template>
  <div class="post--other detail-component ct p_0" :data-color="currentTheme">
    <div class="post--other-title mb_3">Các bài viết khác</div>
    <div class="r">
      <div v-for="blog in blogsOther" :key="blog._id" class="c_12 c_sm_12 c_md_4 c_lg_4 pl_3 pr_3 mb_4 mb_md_0">
        <div class="other--item position_relative">
          <div class="item--img position_relative">
            <img
              class="position_absolute"
              src="http://ttol.vietnamnetjsc.vn//2017/05/25/15/05/hoa-sen-dep-moc-mac-thanh-cao-hiem-co-loai-hoa-nao-sanh-bang_8.jpg"
            >
          </div>
          <div class="item--info position_absolute">
            <div class="item--info--tile mb_1">{{blog.title}}</div>
            <div class="item--info-bottom d_inline">
              <span class="item--info-time mr_4 position_relative"><app-time :time="blog.createAt"/></span>
              <span class="item--info-like mr_4 position_relative"><icon-base class="pr_1 pt_1" icon-name="heart" viewBox="0 0 378.94 378.94"><icon-heart /></icon-base>{{blog.clap}}</span>
              <span class="item--info-author position_relative">by <span class="item--info-name">{{blog._author.nameDisplay}}</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogService from "@/services/modules/blog.service";

import IconBase from "@/components/icons/IconBase";
import IconHeart from "@/components/icons/IconHeart";
import AppTime from "@/components/shared/timeAgo";
export default {
  components: {
    IconBase,
    IconHeart,
    AppTime
  },
  computed: {
    currentTheme() {
      return this.$store.getters.themeName;
    },
    blogsByUser() {
      const blogsByUser = this.$store.getters.blogsByUser;
      return blogsByUser;
    },
    blogsOther() {
      const blogsOther = this.$store.getters.blogsOther;
      return blogsOther;
    }
  },
  async mounted() {
    // Get all Blog by User
    const userId = "5c44b2ab3ffcb12f18c33394";
    BlogService.getByUser(userId).then(res => {
      const blogsByUser = res.data.data;
      this.$store.dispatch("showByUser", blogsByUser);
    });

    // Get all Blog
    const allBlog = await BlogService.index();
    let dataAllBlog = allBlog.data.data;
    if (typeof dataAllBlog == "undefined") return;
    if (dataAllBlog.length == 0) return;

    // Sort allBlog in order from new to old
    const sortNewBlog = dataAllBlog.reverse();
    this.$store.dispatch("getAllBlog", sortNewBlog);

    // Create array for other blogs
    const currentBlogId = this.$route.params.blogId;

    const filterBlogsUser = this.blogsByUser.filter(function(item) {
      return item._id != currentBlogId;
    });
    const filterAllBlogs = sortNewBlog.filter(function(item) {
      return item._author._id != userId;
    });
    const allOtherBlogs = filterBlogsUser.concat(filterAllBlogs);
    // Get 3 object for other blogs
    const otherBlogs = allOtherBlogs.slice(0, 3);
    this.$store.dispatch("getBlogsOther", otherBlogs);
  }
};
</script>

<style scoped lang="scss">
@import "./detail";
</style>
