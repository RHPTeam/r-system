<template>
  <div class="post--detail detail-component ct mt_4 mb_4" :data-color="currentTheme">
    <div class="r">
      <div
        class="c_12 c_sm_12 c_md_12 c_lg_1 c_xl_2 d_none d_lg_flex flex_column justify_content_center align_item_start"
      >
        <span class="detail--icon mt_2 mb_2 d_flex align_items_center">
          <icon-base
            class="selected mr_2"
            icon-name="heart"
            width="30"
            height="30"
            viewBox="0 0 378.94 378.94"
          >
            <icon-heart/>
          </icon-base>26
        </span>
        <span class="detail--icon mt_2 mb_2">
          <icon-base width="30" height="34" icon-name="bookmark-blog" viewBox="0 0 431.972 431.972">
            <icon-bookmark-blog/>
          </icon-base>
        </span>
        <span class="detail--icon mt_2 mb_2">
          <icon-base width="30" height="26" icon-name="facebook" viewBox="0 0 512 512">
            <icon-facebook/>
          </icon-base>
        </span>
      </div>
      <div class="c_12 c_sm_12 c_md_12 c_lg_10 c_xl_8 p_0">
        <div class="detail--content">
          <div class="detail--content-title">{{blog.title}}</div>
          <div class="author author--top d_flex justify_content_start align_items_center mt_4 mb_4">
            <div class="author--avatar position_relative mr_3">
              <img
                class="position_absolute"
                src="http://www.igeacps.it/app/uploads/2018/05/profile_uni_user.png"
              >
            </div>
            <div class="author--info">
              <div class="mb_1 d_flex justify_content_start align_items_end">
                <div class="author--info-name">{{blog._author.nameDisplay}}</div>
                <div class="author--follow ml_2">
                  <button class="btn">Follow</button>
                </div>
              </div>
              <div class="author--start">
                <span class="author--start-time mr_4 position_relative">Jan 14</span>
                <span class="author--start-icon mr_4 position_relative">
                  <icon-base class="pr_1 pt_1" icon-name="heart" viewBox="0 0 378.94 378.94">
                    <icon-heart/>
                  </icon-base>26
                </span>
              </div>
            </div>
          </div>
          <div class="detail--img position_relative">
            <img
              class="position_absolute"
              src="http://ttol.vietnamnetjsc.vn//2017/05/25/15/05/hoa-sen-dep-moc-mac-thanh-cao-hiem-co-loai-hoa-nao-sanh-bang_8.jpg"
            >
          </div>
          <div class="detail--text mt_4 mb_4" v-html="blog.body"></div>
          <div class="detail--react pb_3 d_flex justify_content_between align_items_center">
            <span class="detail--react-like d_flex align_items_center">
              <icon-base
                class="mr_1"
                icon-name="heart"
                width="30"
                height="30"
                viewBox="0 0 378.94 378.94"
              >
                <icon-heart/>
              </icon-base>26
            </span>
            <div class="d_flex justify_content_end align_items_center">
              <span class="detail--react-comment d_flex align_items_center">
                <icon-base
                  class="mr_1"
                  icon-name="answer"
                  width="40"
                  height="30"
                  viewBox="0 0 18.657 11.994"
                >
                  <icon-answer/>
                </icon-base>22
              </span>
              <span class="ml_3 detail--react-facebook">
                <icon-base width="30" height="30" icon-name="facebook" viewBox="0 0 512 512">
                  <icon-facebook/>
                </icon-base>
              </span>
              <span class="ml_3 detail--react-bookmark">
                <icon-base
                  width="30"
                  height="30"
                  icon-name="bookmark-blog"
                  viewBox="0 0 431.972 431.972"
                >
                  <icon-bookmark-blog/>
                </icon-base>
              </span>
            </div>
          </div>
          <div class="author author--bottom mt_4 mb_4">
            <div class="d_flex justify_content_start align_items_center">
              <div class="author--avatar position_relative mr_3">
                <img
                  class="position_absolute"
                  src="http://www.igeacps.it/app/uploads/2018/05/profile_uni_user.png"
                >
              </div>
              <div class="author--info">
                <div class="mb_1 d_flex justify_content_between align_items_end">
                  <div class="author--info-name">{{blog._author.nameDisplay}}</div>
                  <div class="author--follow ml_2">
                    <button class="btn">Follow</button>
                  </div>
                </div>
                <div class="author--info-join">Member since May 2017</div>
              </div>
            </div>
            <div class="author--slogan mt_2 ml_5 pl_5">{{blog._author.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import IconBase from "@/components/icons/IconBase";
import IconHeart from "@/components/icons/IconHeart";
import IconBookmarkBlog from "@/components/icons/IconBookmarkBlog";
import IconAnswer from "@/components/icons/IconAnswer";
import IconFacebook from "@/components/icons/IconFacebook";
export default {
  props: ["blog"],
  data() {
    return {
      isClap: false,
      showdropdown: false
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
    IconAnswer,
    IconFacebook
  },
};
</script>

<style scoped lang="scss">
@import "./detail";
</style>
