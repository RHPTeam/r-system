<template>
  <div class="add--comment mb_4">
    <div class="add--comment-title mb_3">Phản hồi</div>
    <div class="add--input bg--item d_flex justify_content_start align_item_start p_3" :data-bg="currentTheme">
      <div class="avatar--user position_relative mr_3">
        <img
          class="position_absolute"
          src="http://www.igeacps.it/app/uploads/2018/05/profile_uni_user.png"
        >
      </div>
      <input type="text" name class placeholder="Nhập nội dung bình luận...">
    </div>
  </div>
</template>
<script>
export default {
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
