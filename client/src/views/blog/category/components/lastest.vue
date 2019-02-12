<template>
  <div class="blog--category feature" :data-theme="currentTheme">
    <div class="blog--category-title pt_3 pb_3">LATEST</div>
    <!-- Horizontal item -->
    <div v-for="blog in blogs" :key="blog._id" class="item--category item--horizontal mb_4">
      <div class="ct_f p_0">
        <div class="r">
          <div class="c_md_4 pl_md_3 pr_md_2">
            <div class="item--img position_relative">
              <img
                class="position_absolute"
                src="http://ttol.vietnamnetjsc.vn//2017/05/25/15/05/hoa-sen-dep-moc-mac-thanh-cao-hiem-co-loai-hoa-nao-sanh-bang_8.jpg"
              >
            </div>
          </div>
          <div class="c_md_8 pl_md_2 pr_md_3">
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
                    <icon-base class="pr_1 pt_1" icon-name="heart" viewBox="0 0 378.94 378.94">
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
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconHeart from "@/components/icons/IconHeart";
import IconBookmarkBlog from "@/components/icons/IconBookmarkBlog";
import AppTime from "@/components/shared/timeAgo";
export default {
  props: ["blogs"],
  data() {
    return {
      isBookmark: false,
      theme: "light"
    };
  },
  computed: {
    currentTheme() {
      return this.$store.getters.themeName;
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
@import "category";
</style>
