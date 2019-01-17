<template>
  <header class="nav--top" :data-theme="currentTheme">
      <nav class="nav ct pb_1">
        <div class="nav--head d_flex align_items_center justify_content_between">
          <router-link
            tag="a"
            to="/"
            class="nav--brand d_flex align_items_center mr_4"
          >
            <icon-base icon-name="logo" width="200" height="28" viewBox="0 0 222 30"><icon-logo /></icon-base>
          </router-link>
          <ul class="nav--right d_flex align_items_center justify_content_end mb_0 pl_0">
            <li class="nav--item mr_3"><icon-base icon-name="search-solid" width="22" height="22" viewBox="0 0 27.033 28"><icon-search-solid /></icon-base></li>
            <li class="nav--item mr_3"><icon-base icon-name="alarm" width="22" height="22" viewBox="0 0 24.5 28"><icon-alarm /></icon-base></li>
            <li class="nav--item mr_3"><button class="btn nav--item-btn">Begin</button></li>
            <li class="nav--item position_relative">
              <a
                class="nav--link link--effect"
                @click.prevent="statusDropdown = !statusDropdown;"
              >
                <img
                  src="http://www.igeacps.it/app/uploads/2018/05/profile_uni_user.png"
                  width="31"
                  alt="User Image"
                />
              </a>
              <transition name="fade" mode="out-in">
                <div v-if="statusDropdown" class="dropdown--menu dropdown--menu-right show">
                  <span class="arrow"><span class="shape"></span></span>
                  <div class="d_flex align_items_center text_white mb_2 p_2">
                    <div>
                      <img
                        src="http://www.igeacps.it/app/uploads/2018/05/profile_uni_user.png"
                        width="60"
                        alt="User Image"
                      />
                    </div>
                    <div class="ml_2">
                      <h4 class="mb_0">Sky Albert</h4>
                      <p class="mb_0">trantoan.fox.97@gmail.com</p>
                    </div>
                  </div>
                  <router-link class="dropdown--item" :to="{ name: '' }">
                    Tài khoản
                  </router-link>
                  <router-link class="dropdown--item" :to="{ name: '' }">
                    Thiết lập
                  </router-link>
                  <div class="dropdown--divider"></div>
                  <router-link class="dropdown--item" :to="{ name: '' }">
                    Đăng xuất
                  </router-link>
                </div>
              </transition>
            </li>
          </ul>
        </div>
        <ul class="nav--menu d_flex align_items_center justify_content_start mb_0 pl_0 ml_n3 mr_n3 mt_n1">
          <li class="menu--item active mr_3 ml_3 position_relative">Trang chủ</li>
          <li class="menu--item mr_3 ml_3 position_relative">HTML</li>
          <li class="menu--item mr_3 ml_3 position_relative">CSS</li>
          <li class="menu--item mr_3 ml_3 position_relative">Javascript</li>
          <li class="menu--item mr_3 ml_3 position_relative">VueJs</li>
          <li class="menu--item mr_3 ml_3 position_relative">AngularJS</li>
          <li class="menu--item mr_3 ml_3 position_relative">React</li>
          <li class="menu--item mr_3 ml_3 position_relative">Front-End</li>
          <li class="menu--item mr_3 ml_3 position_relative">Back-End</li>
          <li class="menu--item mr_3 ml_3 position_relative">Design</li>
          <li class="menu--item mr_3 ml_3 position_relative">Bug</li>
        </ul>
      </nav>
  </header>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconLogo from "@/components/icons/IconLogo";
import IconSearchSolid from "@/components/icons/IconSearchSolid";
import IconAlarm from "@/components/icons/IconAlarm";
export default {
  data() {
    return {
      statusDropdown: false,
      menu: [
        {
          name: "Trang chủ",
          url: "home"
        },
        {
          name: "HTML",
          url: "html"
        },
        {
          name: "CSS",
          url: "css"
        },

        {
          name: "Javascript",
          url: "javasctipt"
        },
        {
          name: "Front-end",
          url: "fe"
        },
        {
          name: "Back-end",
          url: "BE"
        },
        {
          name: "Thiết kế",
          url: "design"
        },
        {
          name: "Bug",
          url: "bug"
        }
      ]
    };
  },
  computed: {
    currentTheme() {
      return this.$store.getters.themeName;
    }
  },
  components: {
    IconBase,
    IconLogo,
    IconSearchSolid,
    IconAlarm
  }
};
</script>

<style scoped lang="scss">
@import "../blog-scss/blog";
@import "../blog-scss/user-dropdown";
</style>
