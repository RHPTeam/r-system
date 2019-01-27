<template>
  <header class="nav--top position_fixed">
    <nav
      class="nav nav--expand-md nav--light position_relative d_flex align_items_center justify_content_start"
    >
      <div class="nav--header position_fixed">
        <a class="nav--expand-btn d_block d_md_none" @click.prevent="showMenu">
          <icon-base icon-name="menu" viewBox="0 0 500 500"
          ><icon-menu
          /></icon-base>
        </a>
        <!-- logo -->
        <router-link
          tag="a"
          to="/"
          class="nav--brand d_flex align_items_center"
        >
          <!-- Logo icon -->
          <b class="logo--icon"
            ><img
              :src="`${baseUrl}images/logo-icon.png`"
              alt="Logo Icon Homepage"
              width="37"
              height="30"
          /></b>
          <!-- End logo icon -->
          <!-- Logo text -->
          <b class="logo--text"
            ><img
              :src="`${baseUrl}images/logo-text.png`"
              alt="Logo Icon Homepage"
              height="30"
          /></b>
          <!-- End logo text -->
        </router-link>
        <!-- End Logo -->
        <a class="nav--expand-btn d_block d_md_none" @click.prevent="statusBar = !statusBar"><icon-base icon-name="more" viewBox="0 0 20 20"><icon-more /></icon-base></a>
      </div>
      <div :class="{ show: !statusBar }" class="nav--collapse d_flex align_items_center">
        <ul class="nav float_left mr_auto">
          <li class="nav--item link--effect d_none d_md_block">
            <a class="nav--link">
              <icon-base icon-name="menu" viewBox="0 0 500 500"
                ><icon-menu
              /></icon-base>
            </a>
          </li>
          <li class="nav--item link--effect">
            <input
              type="text"
              class="input--search"
              placeholder="Tìm kiếm câu hỏi, người dùng..."
            />
          </li>
        </ul>
        <ul class="nav float_right">
          <li class="nav--item">
            <a class="nav--link link--effect">
              <icon-base icon-name="help" viewBox="0 0 60 60"
                ><icon-help
              /></icon-base>
              <span class="nav--link-text">Help</span>
            </a>
          </li>
          <li class="nav--item">
            <a class="nav--link link--effect">
              <icon-base icon-name="monitor" viewBox="0 0 520 520"
                ><icon-monitor
              /></icon-base>
              <span class="nav--link-text">Tour</span>
            </a>
          </li>
          <li class="nav--item">
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
              <div
                v-if="statusDropdown"
                class="dropdown--menu dropdown--menu-right show"
              >
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
                <router-link class="dropdown--item" :to="{ name: 'users' }">
                  Tài khoản
                </router-link>
                <router-link class="dropdown--item" :to="{ name: 'users' }">
                  Thiết lập
                </router-link>
                <div class="dropdown--divider"></div>
                <router-link class="dropdown--item" :to="{ name: 'users' }">
                  Đăng xuất
                </router-link>
              </div>
            </transition>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import IconBase from "../icons/IconBase";
import IconMenu from "../icons/IconMenu";
import IconHelp from "../icons/IconHelp";
import IconMore from "../icons/IconMore";
import IconMonitor from "../icons/IconMonitor";
export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      statusDropdown: false,
      statusBar: true
    };
  },
  components: {
    IconMore,
    IconBase,
    IconMenu,
    IconHelp,
    IconMonitor
  },
  computed: {},
  methods: {
    showMenu() {
      return this.$store.dispatch(
        "changeStatusMenu",
        !this.$store.state.statusMenu
      );
    }
  }
};
</script>

<style scoped lang="scss">
@import "navbar";
</style>
