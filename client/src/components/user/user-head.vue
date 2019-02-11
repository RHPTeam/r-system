<template>
  <div class="head bg_light">
    <div class="navbar d_block d_lg_none pl_0">
      <ul class="navbar--list d_flex justify_content_between align_items_center pl_0">
        <router-link class="navbar--list-item p_0 pt_1" :to="{ name: 'user-info-activity' }">
          <icon-base width="20" height="20" icon-name="activity" viewBox="0 0 400 400">
            <icon-activity/>
          </icon-base>
        </router-link>
        <router-link class="navbar--list-item p_0 pt_1" :to="{ name: 'user-info-profile' }">
          <icon-base width="20" height="20" icon-name="infomation" viewBox="0 0 32 32">
            <icon-infomation/>
          </icon-base>
        </router-link>
        <router-link class="navbar--list-item p_0 pt_1" :to="{ name: 'user-info-story' }">
          <icon-base width="20" height="20" icon-name="story" viewBox="0 0 511.999 511.999">
            <icon-story/>
          </icon-base>
        </router-link>
        <router-link class="navbar--list-item p_0 pt_1" :to="{ name: 'user-info-blog' }">
          <icon-base width="20" height="20" icon-name="blog" viewBox="0 0 520 520">
            <icon-blog/>
          </icon-base>
        </router-link>
        <router-link class="navbar--list-item p_0 pt_1" :to="{ name: 'user-info-recruitment' }">
          <icon-base width="20" height="20" icon-name="recruit" viewBox="0 0 540 540">
            <icon-recruit/>
          </icon-base>
        </router-link>
        <router-link class="navbar--list-item p_0 pt_1" :to="{ name: 'user-setting-info' }">
          <icon-base width="20" height="20" icon-name="edit-info" viewBox="0 0 480 520">
            <icon-edit-info/>
          </icon-base>
        </router-link>
      </ul>
    </div>
    <div class="wallpaper position_relative d_flex align_items_sm_end">
      <div class="loading" v-if="!user"></div>
      <div
        v-else
        class="wallpaper--info d_flex justify_content_center justify_content_sm_start flex_column flex_sm_row align_items_center mb_0 mt_3 pt_1 mb_sm_4 mb_lg_n4">
        <div class="wallpaper--avatar position_relative">
          <img src="http://www.igeacps.it/app/uploads/2018/05/profile_uni_user.png" class="position_absolute">
        </div>
        <div class="user--info ml_0 ml_sm_3 mt_1 mt_sm_0 text_center text_sm_left align_self_end align_self_lg_center">
          <div class="user--info-name">{{ user.nameDisplay }}</div>
          <div class="user--info-alias">( {{ !user.title ? 'life strange is power' : user.title }} )</div>
        </div>
      </div>
    </div>
    <div class="navbar d_none d_lg_block">
      <ul class="navbar--list d_flex justify_content_start align_items_center">
        <router-link class="navbar--list-item" :to="{ name: 'user-info-activity' }">
          Hoạt động
        </router-link>
        <router-link class="navbar--list-item" :to="{ name: 'user-info-profile' }">
          Thông tin
        </router-link>
        <router-link class="navbar--list-item" :to="{ name: 'user-info-story' }">
          Câu chuyện lập trình
        </router-link>
        <router-link class="navbar--list-item" :to="{ name: 'user-info-blog' }">
          Bài viết
        </router-link>
        <router-link class="navbar--list-item" :to="{ name: 'user-info-recruitment' }">
          Tuyển dụng
        </router-link>
        <router-link class="navbar--list-item" :to="{ name: 'user-setting-info' }">
          Chỉnh sửa thông tin
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import IconBase from "../icons/IconBase";
  import IconEditInfo from "../icons/IconEditInfo";
  import IconActivity from "../icons/IconActivity";
  import IconBlog from "../icons/IconBlog";
  import IconInfomation from "../icons/IconInfomation";
  import IconRecruit from "../icons/IconRecruit";
  import IconStory from "../icons/IconStory";

  import UserService from "@/services/modules/user.service";

  export default {
    props: ["idRoute"],
    computed: {
      user() {
        return this.$store.getters.userInfo;
      }
    },
    components: {
      IconBase,
      IconActivity,
      IconBlog,
      IconEditInfo,
      IconInfomation,
      IconRecruit,
      IconStory
    }
  };
</script>

<style scoped lang="scss">
  @import "user-head";
</style>
