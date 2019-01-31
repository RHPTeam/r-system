<template>
  <div class="blog--component feature pt_4 pb_4 pt_lg_5 pb_lg_5" :data-theme="currentTheme">
    <div class="component--header d_flex justify_content_start align_items_end mb_4 mb_lg_5">
      <div class="component--header-title mr_5">FEATURE BLOGS</div>
      <ul class="blog--filter d_flex align_items_center justify_content_start mb_0 pl_0 pb_1">
        <li class="blog--fliter-item active mr_2 position_relative">Tất cả</li>
        <li
          class="blog--fliter-item mr_2 ml_3 position_relative"
          v-for="category in listCategory"
          :key="category._id"
        >{{category.name}}</li>
      </ul>
    </div>
    <div class="ct_f p_0">
      <div class="r">
        <div class="c_md_6 pl_md_3 pr_md_3 mb_4 mb_md_0" v-for="blog in verBlogs" :key="blog._id">
          <!-- Vertical item -->
          <div class="item--blog item--vertical">
            <div class="ct_f p_0">
              <div class="r">
                <div class="c_md_12">
                  <div class="item--img position_relative">
                    <img
                      class="position_absolute"
                      src="http://ttol.vietnamnetjsc.vn//2017/05/25/15/05/hoa-sen-dep-moc-mac-thanh-cao-hiem-co-loai-hoa-nao-sanh-bang_8.jpg"
                    >
                  </div>
                </div>
                <div class="c_md_12">
                  <div class="card card_body p_0 mt_n1 mt_sm_0 mt_md_3">
                    <router-link
                      tag="h5"
                      :to="{name: 'post', params: {blogId: blog._id}}"
                      class="card_title mb_2 mt_2 mt_sm_0"
                    >{{blog.title}}</router-link>
                    <p
                      class="card_text mb_2"
                    >{{blog.desc}}</p>
                    <div class="item--bottom d_flex justify_content_between align_items_center">
                      <div class="item--info d_inline mb_0">
                        <span class="item--info-time mr_4 position_relative"><app-time :time="blog.createAt"/></span>
                        <span class="item--info-like mr_4 position_relative">
                          <icon-base
                            class="pr_1 pt_1"
                            icon-name="heart"
                            viewBox="0 0 378.94 378.94"
                          >
                            <icon-heart/>
                          </icon-base>{{blog.clap}}
                        </span>
                        <span class="item--info-author position_relative">by
                          <span class="item--info-name">{{blog._author.nameDisplay}}</span>
                        </span>
                      </div>
                      <div class="item--icon text_right">
                        <span @click="isBookmark = !isBookmark">
                          <icon-base
                            :class="{selected: isBookmark}"
                            icon-name="bookmark-blog"
                            viewBox="0 0 431.972 431.972"
                          >
                            <icon-bookmark-blog/>
                          </icon-base>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End. Vertical item -->
        </div>
        <div class="c_md_12 mt_4">
          <!-- Horizontal item -->
          <div class="item--blog item--horizontal mb_4" v-for="blog in horBlogs" :key="blog._id">
            <div class="ct_f p_0">
              <div class="r">
                <div class="c_md_4 pl_md_3 pr_md_3">
                  <div class="item--img position_relative">
                    <img
                      class="position_absolute"
                      src="http://ttol.vietnamnetjsc.vn//2017/05/25/15/05/hoa-sen-dep-moc-mac-thanh-cao-hiem-co-loai-hoa-nao-sanh-bang_8.jpg"
                    >
                  </div>
                </div>
                <div class="c_md_8 pl_md_3 pr_md_3">
                  <div class="card card_body p_0 mt_n1 mt_sm_0">
                     <router-link
                      tag="h5"
                      :to="{name: 'post', params: {blogId: blog._id}}"
                      class="card_title mb_2 mt_2 mt_md_0"
                    >{{blog.title}}</router-link>
                    <p
                      class="card_text mb_2"
                    >{{blog.desc}}</p>
                    <div class="item--bottom d_flex justify_content_between align_items_center">
                      <div class="item--info d_inline mb_0">
                        <span class="item--info-time mr_4 position_relative"><app-time :time="blog.createAt"/></span>
                        <span class="item--info-like mr_4 position_relative">
                          <icon-base
                            class="pr_1 pt_1"
                            icon-name="heart"
                            viewBox="0 0 378.94 378.94"
                          >
                            <icon-heart/>
                          </icon-base>{{blog.clap}}
                        </span>

                        <span class="item--info-author position_relative">by
                          <span class="item--info-name">{{blog._author.nameDisplay}}</span>
                        </span>
                      </div>
                      <div class="item--icon text_right">
                        <span @click="isBookmark = !isBookmark">
                          <icon-base
                            :class="{selected: isBookmark}"
                            icon-name="bookmark-blog"
                            viewBox="0 0 431.972 431.972"
                          >
                            <icon-bookmark-blog/>
                          </icon-base>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End. Horizontal item -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconHeart from "@/components/icons/IconHeart";
import IconBookmarkBlog from "@/components/icons/IconBookmarkBlog";
import AppTime from "@/components/shared/timeAgo";
export default {
  props: ["categories", "blogs"],
  data() {
    return {
      isBookmark: false,
      theme: "light"
    };
  },
  computed: {
    currentTheme() {
      return this.$store.getters.themeName;
    },
    listCategory() {
      if (typeof this.categories == "undefined") return;
      if (this.categories.length == 0) return;
      // Get 5 item categories for Lastest Menu
      const listCategory = this.categories.slice(0, 5);
      return listCategory;
    },
    verBlogs() {
      if (typeof this.blogs == "undefined") return;
      if (this.blogs.length == 0) return;
      const verBlogs = this.blogs.slice(0, 2);
      return verBlogs;
    },
    horBlogs() {
      if (typeof this.blogs == "undefined") return;
      if (this.blogs.length == 0) return;
      //Get 4 last item in arr
      const horBlogs = this.blogs.slice(2, 5);
      return horBlogs;
    }
  },
  components: {
    IconBase,
    IconHeart,
    IconBookmarkBlog,
    AppTime
  }
};
</script>

<style scoped lang="scss">
@import "home";
</style>
