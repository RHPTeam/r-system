<template>
  <div class="blog--component trend pt_4 pb_4 pt_lg_5 pb_lg_5" :data-theme="currentTheme">
    <div class="ct_f p_0">
      <div class="r">
        <div class="c_12 c_sm_12 c_md_12 c_lg_6 c_xl_6 pl_md_3 pr_md_3 mb_4 mb_lg_0">
          <!-- Vertical item -->
          <div class="item--blog item--vertical">
            <div class="ct_f p_0">
              <div class="r">
                <div class="c_md_12">
                  <div class="item--img position_relative">
                    <img class="position_absolute"
                         src="http://ttol.vietnamnetjsc.vn//2017/05/25/15/05/hoa-sen-dep-moc-mac-thanh-cao-hiem-co-loai-hoa-nao-sanh-bang_8.jpg">
                  </div>
                </div>
                <div class="c_md_12">
                  <div class="card card_body p_0 mt_n1 mt_sm_0 mt_md_3">
                    <router-link tag="h5" :to="{name: 'post', params: {blogId: lastBlog[0]._id}}"
                                 class="card_title mb_2 mt_2 mt_sm_0">
                      {{lastBlog[0].title}}
                    </router-link>
                    <p class="card_text mb_2">{{lastBlog[0].desc | cutMainDesc}}</p>
                    <div class="item--bottom d_flex justify_content_between align_items_center">
                      <div class="item--info d_inline mb_0">
                        <span class="item--info-time mr_4 position_relative">Jan 14</span>
                        <span class="item--info-like mr_4 position_relative"><icon-base class="pr_1 pt_1"
                                                                                        icon-name="heart"
                                                                                        viewBox="0 0 378.94 378.94"><icon-heart/></icon-base>26</span>
                        <span class="item--info-author position_relative">by <span
                          class="item--info-name">dangyen103</span></span>
                      </div>
                      <div class="item--icon text_right"><span @click="isBookmark = !isBookmark"><icon-base
                        :class="{selected: isBookmark}" icon-name="bookmark-blog" viewBox="0 0 431.972 431.972"><icon-bookmark-blog/></icon-base></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End. Vertical item -->
        </div>
        <div class="c_12 c_sm_12 c_md_12 c_lg_6 c_xl_6 pl_md_3 pr_md_3">
          <!-- Horizontal item -->
          <div v-for="blog in listBlog" :key="blog._id" class="item--blog item--horizontal mb_4">
            <div class="ct_f p_0">
              <div class="r">
                <div class="c_md_4 pl_md_3 pr_md_3">
                  <div class="item--img position_relative">
                    <img class="position_absolute"
                         src="http://ttol.vietnamnetjsc.vn//2017/05/25/15/05/hoa-sen-dep-moc-mac-thanh-cao-hiem-co-loai-hoa-nao-sanh-bang_8.jpg">
                  </div>
                </div>
                <div class="c_md_8 pl_md_3 pr_md_3">
                  <div class="card card_body p_0 mt_n1 mt_sm_0">
                    <router-link tag="h5" :to="{name: 'post', params: {blogId: blog._id}}"
                                 class="card_title mb_2 mt_2 mt_md_0">
                      {{blog.title}}
                    </router-link>
                    <p class="card_text mb_2">{{blog.desc}}</p>
                    <div class="item--bottom d_flex justify_content_between align_items_center">
                      <div class="item--info d_inline mb_0">
                        <span class="item--info-time mr_4 position_relative">Jan 14</span>
                        <span class="item--info-like mr_4 position_relative"><icon-base class="pr_1 pt_1"
                                                                                        icon-name="heart"
                                                                                        viewBox="0 0 378.94 378.94"><icon-heart/></icon-base>26</span>
                        <span class="item--info-author position_relative">by <span
                          class="item--info-name">dangyen103</span></span>
                      </div>
                      <div class="item--icon text_right"><span @click="isBookmark = !isBookmark"><icon-base
                        :class="{selected: isBookmark}" icon-name="bookmark-blog" viewBox="0 0 431.972 431.972"><icon-bookmark-blog/></icon-base></span>
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
      },
      lastBlog() {
        return this.blogs.slice(-1);
      },
      listBlog() {
        // Get 5 last item in arr
        const getFiveLast = this.blogs.slice(Math.max(this.blogs.length - 5, 1));

        //Remove last item
        getFiveLast.pop();

        //Return arr 4 item and reverse arr
        return getFiveLast.reverse();
      }
    },
    filters: {
      cutMainDesc(value) {
        if (typeof value != "string") {
          return;
        }
        // Count word in string
        // const countWord = value.split(" ").length;

        // Return desc for show
        if (value.length > 200) {
          value = value.slice(0, 200) + "...";
        }
        return value;
      },
      cutDescList(value) {
        if (typeof value != "string") {
          return;
        }
        // Count word in string
        // const countWord = value.split(" ").length;

        // Return desc for show
        if (value.length > 150) {
          value = value.slice(0, 150) + "...";
        }
        return value;
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
