<template>
    <div class="head bg_light">
      <div class="navbar d_block d_lg_none pl_0">
        <ul class="navbar--list d_flex justify_content_between align_items_center pl_0">
          <router-link class="navbar--list-item p_0 pt_1" :to="{ name: 'user-info-activity' }">
            <icon-base width="20" height="20" icon-name="activity" viewBox="0 0 400 400"><icon-activity /></icon-base>
          </router-link>
          <router-link class="navbar--list-item p_0 pt_1" :to="{ name: 'user-info-profile' }">
            <icon-base width="20" height="20" icon-name="infomation" viewBox="0 0 32 32"><icon-infomation /></icon-base>
          </router-link>
          <router-link class="navbar--list-item p_0 pt_1" :to="{ name: 'user-info-story' }">
            <icon-base width="20" height="20" icon-name="story" viewBox="0 0 511.999 511.999"><icon-story /></icon-base>
          </router-link>
          <router-link class="navbar--list-item p_0 pt_1" :to="{ name: 'user-info-blog' }">
            <icon-base width="20" height="20" icon-name="blog" viewBox="0 0 520 520"><icon-blog /></icon-base>
          </router-link>
          <router-link class="navbar--list-item p_0 pt_1" :to="{ name: 'user-info-recruitment' }">
            <icon-base width="20" height="20" icon-name="recruit" viewBox="0 0 540 540"><icon-recruit /></icon-base>
          </router-link>
          <router-link class="navbar--list-item p_0 pt_1" :to="{ name: 'user-setting-info' }">
            <icon-base width="20" height="20" icon-name="edit-info" viewBox="0 0 480 520"><icon-edit-info /></icon-base>
          </router-link>
        </ul>
      </div>
      <div class="wallpaper position_relative d_flex align_items_sm_end">
          <div class="wallpaper--info d_flex justify_content_center justify_content_sm_start flex_column flex_sm_row align_items_center mb_0 mt_3 pt_1 mb_sm_4 mb_lg_n4">
              <div class="wallpaper--avatar position_relative">
                  <img src="http://www.igeacps.it/app/uploads/2018/05/profile_uni_user.png" class="position_absolute">
              </div>
              <div class="user--info ml_0 ml_sm_3 mt_1 mt_sm_0 text_center text_sm_left align_self_end align_self_lg_center">
                  <div class="user--info-name">{{ user.name }}</div>
                  <div class="user--info-alias">( {{ user.nameDisplay }} )</div>
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
  components: {
    IconBase,
    IconActivity,
    IconBlog,
    IconEditInfo,
    IconInfomation,
    IconRecruit,
    IconStory
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  async mounted() {
    await UserService.show(this.idRoute).then((res) => {
      this.$store.dispatch("show", res.data.data)
    })
  }
};
</script>

<style scoped lang="scss">
.wallpaper {
  height: 250px;
  background-image: url(https://images.template.net/wp-content/uploads/2014/11/Natural-Facebook-Cover-Photo.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  .wallpaper--avatar {
    width: 168px;
    height: 168px;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.16);
    border: 5px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 7px;
    &:before {
      content: "";
      display: block;
      padding-top: 100%;
    }
    img {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: auto;
    }
  }
  .wallpaper--info {
    padding: 0 20px;
    width: 100%;
  }
  .user--info {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.3px;
    color: #ffffff;
    .user--info-name {
      font-size: 24px;
      line-height: 1.21;
    }
  }
}
.navbar {
  background-color: #ffffff;
  padding-left: 175px;
  border-bottom: 1px solid #e4e4e4;
  .navbar--list {
    list-style-type: none;
    margin-bottom: 0;
    .navbar--list-item {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.2px;
      color: #0077dd;
      padding: 10px 12.5px;
      text-decoration: none;
      border-left: 1px solid #e4e4e4;
      transition: all 0.5s ease;
      &:last-child {
        border-right: 1px solid #e4e4e4;
      }
      &:hover {
        color: #7460ee;
      }
    }
    svg {
      color: #7460ee;
    }
  }
}

// Small devices (landscape phones, 576px and up)
@media (max-width: 576px) {
  .wallpaper {
    .wallpaper--avatar {
      width: 150px;
      height: 150px;
    }
    .user--info {
      width: 100%;
    }
  }
}

// Medium devices (tablets, 768px and up)
@media (max-width: 768px) {
}

@media (min-width: 768px) {
}
// Large devices (desktops, 992px and up)
@media (max-width: 992px) {
  .navbar {
    padding: 0 20px !important;
    border-top: 1px solid #e4e4e4;
    .navbar--list {
      height: 42px;
      .navbar--list-item {
        border-left: 0;
        &:last-child {
          border-right: 0;
        }
      }
    }
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
}
</style>
