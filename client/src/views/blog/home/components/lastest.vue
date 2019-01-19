<template>
  <div class="blog--component lastest pt_4 pb_4 pt_lg_5 pb_lg_5" :data-theme="currentTheme">
    <div class="component--header d_flex justify_content_start align_items_end mb_4 mb_lg_5">
      <div class="component--header-title mr_5">LATEST BLOGS</div>
      <ul class="blog--filter d_flex align_items_center justify_content_start mb_0 pl_0 pb_1">
        <li class="blog--fliter-item active mr_2 position_relative">Tất cả</li>
        <li class="blog--fliter-item mr_2 ml_3 position_relative">HTML</li>
        <li class="blog--fliter-item mr_2 ml_3 position_relative">CSS</li>
        <li class="blog--fliter-item mr_2 ml_3 position_relative">Javascript</li>
        <li class="blog--fliter-item mr_2 ml_3 position_relative">VueJs</li>
        <li class="blog--fliter-item mr_2 ml_3 position_relative">AngularJS</li>
        <li class="blog--fliter-item mr_2 ml_3 position_relative">React</li>
      </ul>
    </div>
    <div class="ct_f p_0">
      <div class="r">

        <div class="c_md_6 pl_md_3 pr_md_3 mb_4 mb_md_0">
          <!-- Vertical item -->
          <div class="item--blog item--vertical">
            <div class="ct_f p_0">
              <div class="r">
                <div class="c_md_12">
                   <div class="item--img position_relative">
                    <img class="position_absolute" src="http://ttol.vietnamnetjsc.vn//2017/05/25/15/05/hoa-sen-dep-moc-mac-thanh-cao-hiem-co-loai-hoa-nao-sanh-bang_8.jpg">
                  </div>
                </div>
                <div class="c_md_12">
                  <div class="card card_body p_0 mt_n1 mt_sm_0 mt_md_3">
                    <h5 class="card_title mb_2 mt_2 mt_sm_0">There’s Nothing New at CES 2019</h5>
                    <p class="card_text mb_2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    <div class="item--bottom d_flex justify_content_between align_items_center">
                      <div class="item--info d_inline mb_0">
                        <span class="item--info-time mr_4 position_relative">Jan 14</span>
                        <span class="item--info-like mr_4 position_relative"><icon-base class="pr_1 pt_1" icon-name="heart" viewBox="0 0 378.94 378.94"><icon-heart /></icon-base>26</span>
                        <span class="item--info-author position_relative">by <span class="item--info-name">dangyen103</span></span>
                      </div>
                      <div class="item--icon text_right" ><span  @click="isBookmark = !isBookmark"><icon-base :class="{selected: isBookmark}" icon-name="bookmark-blog" viewBox="0 0 431.972 431.972"><icon-bookmark-blog/></icon-base></span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End. Vertical item -->
        </div>

        <div class="c_md_6 pl_md_3 pr_md_3">
          <!-- Vertical item -->
          <div class="item--blog item--vertical">
            <div class="ct_f p_0">
              <div class="r">
                <div class="c_md_12">
                   <div class="item--img position_relative">
                    <img class="position_absolute" src="http://ttol.vietnamnetjsc.vn//2017/05/25/15/05/hoa-sen-dep-moc-mac-thanh-cao-hiem-co-loai-hoa-nao-sanh-bang_8.jpg">
                  </div>
                </div>
                <div class="c_md_12">
                  <div class="card card_body p_0 mt_n1 mt_sm_0 mt_md_3">
                    <h5 class="card_title mb_2 mt_2 mt_sm_0">There’s Nothing New at CES 2019</h5>
                    <p class="card_text mb_2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    <div class="item--bottom d_flex justify_content_between align_items_center">
                      <div class="item--info d_inline mb_0">
                        <span class="item--info-time mr_4 position_relative">Jan 14</span>
                        <span class="item--info-like mr_4 position_relative"><icon-base class="pr_1 pt_1" icon-name="heart" viewBox="0 0 378.94 378.94"><icon-heart /></icon-base>26</span>
                        <span class="item--info-author position_relative">by <span class="item--info-name">dangyen103</span></span>
                      </div>
                      <div class="item--icon text_right" ><span  @click="isBookmark = !isBookmark"><icon-base :class="{selected: isBookmark}" icon-name="bookmark-blog" viewBox="0 0 431.972 431.972"><icon-bookmark-blog/></icon-base></span></div>
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
          <div class="item--blog item--horizontal mb_4">
            <div class="ct_f p_0">
              <div class="r">
                <div class="c_md_4 pl_md_3 pr_md_3">
                   <div class="item--img position_relative">
                    <img class="position_absolute" src="http://ttol.vietnamnetjsc.vn//2017/05/25/15/05/hoa-sen-dep-moc-mac-thanh-cao-hiem-co-loai-hoa-nao-sanh-bang_8.jpg">
                  </div>
                </div>
                <div class="c_md_8 pl_md_3 pr_md_3">
                  <div class="card card_body p_0 mt_n1 mt_sm_0">
                    <h5 class="card_title mb_2 mt_2 mt_md_0">There’s Nothing New at CES 2019</h5>
                    <p class="card_text mb_2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
                    <div class="item--bottom d_flex justify_content_between align_items_center">
                      <div class="item--info d_inline mb_0">
                        <span class="item--info-time mr_4 position_relative">Jan 14</span>
                        <span class="item--info-like mr_4 position_relative"><icon-base class="pr_1 pt_1" icon-name="heart" viewBox="0 0 378.94 378.94"><icon-heart /></icon-base>26</span>
                        <span class="item--info-author position_relative">by <span class="item--info-name">dangyen103</span></span>
                      </div>
                      <div class="item--icon text_right" ><span  @click="isBookmark = !isBookmark"><icon-base :class="{selected: isBookmark}" icon-name="bookmark-blog" viewBox="0 0 431.972 431.972"><icon-bookmark-blog/></icon-base></span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End. Horizontal item -->

          <!-- Horizontal item -->
          <div class="item--blog item--horizontal mb_4">
            <div class="ct_f p_0">
              <div class="r">
                <div class="c_md_4 pl_md_3 pr_md_3">
                   <div class="item--img position_relative">
                    <img class="position_absolute" src="http://ttol.vietnamnetjsc.vn//2017/05/25/15/05/hoa-sen-dep-moc-mac-thanh-cao-hiem-co-loai-hoa-nao-sanh-bang_8.jpg">
                  </div>
                </div>
                <div class="c_md_8 pl_md_3 pr_md_3">
                  <div class="card card_body p_0 mt_n1 mt_sm_0">
                    <h5 class="card_title mb_2 mt_2 mt_md_0">There’s Nothing New at CES 2019</h5>
                    <p class="card_text mb_2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
                    <div class="item--bottom d_flex justify_content_between align_items_center">
                      <div class="item--info d_inline mb_0">
                        <span class="item--info-time mr_4 position_relative">Jan 14</span>
                        <span class="item--info-like mr_4 position_relative"><icon-base class="pr_1 pt_1" icon-name="heart" viewBox="0 0 378.94 378.94"><icon-heart /></icon-base>26</span>
                        <span class="item--info-author position_relative">by <span class="item--info-name">dangyen103</span></span>
                      </div>
                      <div class="item--icon text_right" ><span  @click="isBookmark = !isBookmark"><icon-base :class="{selected: isBookmark}" icon-name="bookmark-blog" viewBox="0 0 431.972 431.972"><icon-bookmark-blog/></icon-base></span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End. Horizontal item -->

          <!-- Horizontal item -->
          <div class="item--blog item--horizontal mb_4">
            <div class="ct_f p_0">
              <div class="r">
                <div class="c_md_4 pl_md_3 pr_md_3">
                   <div class="item--img position_relative">
                    <img class="position_absolute" src="http://ttol.vietnamnetjsc.vn//2017/05/25/15/05/hoa-sen-dep-moc-mac-thanh-cao-hiem-co-loai-hoa-nao-sanh-bang_8.jpg">
                  </div>
                </div>
                <div class="c_md_8 pl_md_3 pr_md_3">
                  <div class="card card_body p_0 mt_n1 mt_sm_0">
                    <h5 class="card_title mb_2 mt_2 mt_md_0">There’s Nothing New at CES 2019</h5>
                    <p class="card_text mb_2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
                    <div class="item--bottom d_flex justify_content_between align_items_center">
                      <div class="item--info d_inline mb_0">
                        <span class="item--info-time mr_4 position_relative">Jan 14</span>
                        <span class="item--info-like mr_4 position_relative"><icon-base class="pr_1 pt_1" icon-name="heart" viewBox="0 0 378.94 378.94"><icon-heart /></icon-base>26</span>
                        <span class="item--info-author position_relative">by <span class="item--info-name">dangyen103</span></span>
                      </div>
                      <div class="item--icon text_right" ><span  @click="isBookmark = !isBookmark"><icon-base :class="{selected: isBookmark}" icon-name="bookmark-blog" viewBox="0 0 431.972 431.972"><icon-bookmark-blog/></icon-base></span></div>
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
export default {
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
    IconBookmarkBlog
  }
};
</script>

<style scoped lang="scss">
@import "home";
</style>
