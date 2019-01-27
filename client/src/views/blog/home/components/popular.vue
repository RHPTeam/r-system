<template>
  <div class="blog--component popular pt_4 pb_4 pt_lg_5 pb_lg_5" :data-theme="currentTheme">
    <div class="component--header d_flex justify_content_start align_items_end mb_4 mb_lg_5">
      <div class="component--header-title mr_5">POPULAR BLOGS</div>
    </div>
    <div class="item--wrap">
          <!-- Popular item -->
          <div v-for="(blog, index) in blogs" :key="index" class="item--blog item--popular d_flex justify-content-start align_item_start mb_4">
            <div class="item--popular-number pr_3">{{index + 1}}</div>
            <div class="card card_body p_0">
              <router-link
                      tag="h5"
                      :to="{name: 'post', params: {blogId: blog._id}}"
                    >{{blog.title}}</router-link>
                <div class="item--bottom d_flex justify_content_between align_items_center">
                  <div class="item--info d_inline mb_0">
                    <span class="item--info-time mr_4 position_relative">{{blog.createAt}}</span>
                    <span class="item--info-like mr_4 position_relative"><icon-base class="pr_1 pt_1" icon-name="heart" viewBox="0 0 378.94 378.94"><icon-heart /></icon-base>{{blog.clap}}</span>
                    <span class="item--info-author position_relative">by <span class="item--info-name">{{blog._author.nameDisplay}}</span></span>
                  </div>
                </div>
              </div>
          </div>
          <!-- End. Popular item -->
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconHeart from "@/components/icons/IconHeart";
export default {
  props: ['blogs'],
  data() {
    return {
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
    IconHeart
  }
};
</script>

<style scoped lang="scss">
@import "home";
</style>
