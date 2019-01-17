<template>
  <div class="trend ct" :data-theme="currentTheme">
    <div class="c_md_6">
      <div class="card item--main">
        <div class="item-img position_relative d_block">
          <img class="position_absolute" src="http://ttol.vietnamnetjsc.vn//2017/05/25/15/05/hoa-sen-dep-moc-mac-thanh-cao-hiem-co-loai-hoa-nao-sanh-bang_8.jpg">
        </div>
        <div class="card_body p_0 mt_4">
          <h5 class="card_title">There’s Nothing New at CES 2019</h5>
          <p class="card_text mt_3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
          <div class="item--bottom d-flex justify_content_between align-content-center">
            <div class="item--info d-flex justify_content_start align-content-center mb_0">
              <span class="item--info-time">Jan 14</span>
              <span class="item--info-like"><icon-base class="pr_1 pt_1" icon-name="heart" viewBox="0 0 12.413 11.127"><icon-heart /></icon-base>26</span>
              <span class="item--info-author">by <span class="item--info-name">dangyen103</span></span>
            </div>
            <div class="item--icon text_right"><icon-base icon-name="bookmark2" viewBox="0 0 17.321 20.474"><icon-bookmark2/></icon-base></div>
          </div>
        </div>
      </div>
    </div>
    <div class="c_md_6">
      <!-- <div class="card"></div> -->
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconHeart from "@/components/icons/IconHeart";
import IconBookmark2 from "@/components/icons/IconBookmark2";
export default {
  data() {
    return {
      isThemeLight: true,
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
    IconBookmark2
  }
};
</script>

<style scoped lang="scss">
@import "../blog-scss/trend";
</style>
