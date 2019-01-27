<template>
  <div class="comment bg--item detail-component p_3 mt_4" :data-bg="currentTheme" :data-color="currentTheme">
    <div class="d_flex justify_content_between align_items_start">
      <div class="author author--comment d_flex justify_content_start align_items_center">
        <div class="author--avatar position_relative mr_3">
          <img
            class="position_absolute"
            src="http://www.igeacps.it/app/uploads/2018/05/profile_uni_user.png"
          >
        </div>
        <div class="author--info">
          <div class="author--info-name mb_1">Yen Dang</div>
          <div class="author--start">09:00 PM - Jan 7</div>
        </div>
      </div>
      <div class="comment--action position_relative" @click="showDropdown">
        <span>
          <icon-base icon-name="more" width="25" height="25" viewBox="4 10 16 4">
            <icon-more/>
          </icon-base>
        </span>
        <ul class="comment--dropdown position_absolute p_2 m_0" :class="{ show: showdropdown }">
          <li class="p_1">Xóa Bài Viết</li>
          <li class="p_1">Xóa Bài Viết</li>
        </ul>
      </div>
    </div>
    <div class="comment--content">
      <div class="comment--content-text mt_3 mb_3">Really nice article, I will definitely use those tricks in my daily work. I really liked the async/await which finally gets me out of callback hell ;)</div>
      <div class="comment--content-like">
        <span class="mt_2 mb_2 d_flex align_items_center">
          <icon-base
            class="mr_1"
            icon-name="heart"
            width="22"
            height="24"
            viewBox="0 0 378.94 378.94"
          >
            <icon-heart/>
          </icon-base>26
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconMore from "@/components/icons/IconMore.vue";
import IconHeart from "@/components/icons/IconHeart";
export default {
  data() {
    return {
      showdropdown: false
    };
  },
  methods: {
    showDropdown() {
      this.showdropdown = !this.showdropdown;
    }
  },
  computed: {
    currentTheme() {
      return this.$store.getters.themeName;
    }
  },
  components: {
    IconBase,
    IconMore,
    IconHeart
  }
};
</script>

<style scoped lang="scss">
@import "./detail";
</style>
