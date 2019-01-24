<template>
  <div class="post--other detail-component ct p_0" :data-color="currentTheme">
    <div class="r">
      <div class="c_12 c_sm_12 c_md_4 c_lg_4 pl_3 pr_3 mb_4 mb_md_0">
        <div class="other--item position_relative">
          <div class="item--img position_relative">
            <img
              class="position_absolute"
              src="http://ttol.vietnamnetjsc.vn//2017/05/25/15/05/hoa-sen-dep-moc-mac-thanh-cao-hiem-co-loai-hoa-nao-sanh-bang_8.jpg"
            >
          </div>
          <div class="item--info position_absolute">
            <div class="item--info--tile mb_1">There’s Nothing New at CES 2019</div>
            <div class="item--info-bottom d_flex justify_content_start align_items_center">
              <span class="item--info-time mr_4 position_relative">Jan 14</span>
              <span class="item--info-like mr_4 position_relative"><icon-base class="pr_1 pt_1" icon-name="heart" viewBox="0 0 378.94 378.94"><icon-heart /></icon-base>26</span>
              <span class="item--info-author position_relative">by <span class="item--info-name">dangyen103</span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="c_12 c_sm_12 c_md_4 c_lg_4 pl_3 pr_3 mb_4 mb_md_0">
        <div class="other--item position_relative">
          <div class="item--img position_relative">
            <img
              class="position_absolute"
              src="http://ttol.vietnamnetjsc.vn//2017/05/25/15/05/hoa-sen-dep-moc-mac-thanh-cao-hiem-co-loai-hoa-nao-sanh-bang_8.jpg"
            >
          </div>
          <div class="item--info position_absolute">
            <div class="item--info--tile mb_1">There’s Nothing New at CES 2019</div>
            <div class="item--info-bottom d_flex justify_content_start align_items_center">
              <span class="item--info-time mr_4 position_relative">Jan 14</span>
              <span class="item--info-like mr_4 position_relative"><icon-base class="pr_1 pt_1" icon-name="heart" viewBox="0 0 378.94 378.94"><icon-heart /></icon-base>26</span>
              <span class="item--info-author position_relative">by <span class="item--info-name">dangyen103</span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="c_md_4 pl_3 pr_3">
        <div class="other--item position_relative">
          <div class="item--img position_relative">
            <img
              class="position_absolute"
              src="http://ttol.vietnamnetjsc.vn//2017/05/25/15/05/hoa-sen-dep-moc-mac-thanh-cao-hiem-co-loai-hoa-nao-sanh-bang_8.jpg"
            >
          </div>
          <div class="item--info position_absolute">
            <div class="item--info--tile mb_1">There’s Nothing New at CES 2019</div>
            <div class="item--info-bottom d_flex justify_content_start align_items_center">
              <span class="item--info-time mr_4 position_relative">Jan 14</span>
              <span class="item--info-like mr_4 position_relative"><icon-base class="pr_1 pt_1" icon-name="heart" viewBox="0 0 378.94 378.94"><icon-heart /></icon-base>26</span>
              <span class="item--info-author position_relative">by <span class="item--info-name">dangyen103</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconHeart from "@/components/icons/IconHeart";
export default {
  components: {
    IconBase,
    IconHeart
  },
  computed: {
    currentTheme() {
      return this.$store.getters.themeName;
    }
  }
};
</script>

<style scoped lang="scss">
@import "./detail";
</style>
