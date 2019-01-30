<template>
  <div
    class="comment bg--item detail-component p_3 mt_4"
    :data-bg="currentTheme"
    :data-color="currentTheme"
  >
    <div class="d_flex justify_content_between align_items_start">
      <div class="author author--comment d_flex justify_content_start align_items_center">
        <div class="author--avatar position_relative mr_3">
          <img
            class="position_absolute"
            src="http://www.igeacps.it/app/uploads/2018/05/profile_uni_user.png"
          >
        </div>
        <div class="author--info">
          <div class="author--info-name mb_1">{{comment._user.nameDisplay}}</div>
          <div class="author--start">
            <app-time :time="comment.createAt"/>
          </div>
        </div>
      </div>
      <div class="comment--action position_relative" @click="showDropdown">
        <span>
          <icon-base icon-name="more" width="25" height="25" viewBox="4 10 16 4">
            <icon-more/>
          </icon-base>
        </span>
        <ul class="comment--dropdown position_absolute p_2 m_0" :class="{ show: showdropdown }">
          <li class="p_1">Báo cáo</li>
          <li class="p_1" @click="deleteComment(index)">Xóa bình luận</li>
        </ul>
      </div>
    </div>
    <div class="comment--content">
      <div class="comment--content-text mt_3 mb_3">{{comment.content}}</div>
      <div class="comment--content-like">
        <span @click="toggleLike" class="icon-like mt_2 mb_2 d_flex align_items_center" v-bind:class="{ liked: liked }">
          <icon-base
            class="mr_1"
            icon-name="heart"
            width="22"
            height="24"
            viewBox="0 0 378.94 378.94"
          >
            <icon-heart/>
          </icon-base>
          {{comment.like}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import CommentService from "@/services/modules/comment.service";

import IconBase from "@/components/icons/IconBase";
import IconMore from "@/components/icons/IconMore.vue";
import IconHeart from "@/components/icons/IconHeart";
import AppTime from "@/components/shared/timeAgo";
export default {
  props: ["comment", "index"],
  data() {
    return {
      showdropdown: false,
      componentLoaded: false,
      liked: false
    };
  },
  methods: {
    showDropdown() {
      this.showdropdown = !this.showdropdown;
    },
    deleteComment(index) {
      // Xoa phan tu tren server
      const userId = this.comment._user._id;
      CommentService.delete(this.comment._id, userId);
      // Xoa phan tu trong store
      this.$store.dispatch("deleteCommentBlog", index);
    },
    toggleLike() {
      this.liked = !this.liked;
      this.liked ? this.comment.like++ : this.comment.like--;
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
    IconHeart,
    AppTime
  }
};
</script>

<style scoped lang="scss">
@import "./detail";
</style>
