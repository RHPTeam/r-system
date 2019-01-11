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
                  Đăng xuất {{ statusMenu }}
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
import IconMore from "@/components/icons/IconMore";
import IconMonitor from "../icons/IconMonitor";
export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      statusDropdown: false,
      statusBar: false
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
.nav--top {
  background: #fff;
  font-family: Quicksand, sans-serif;
  height: 64px;
  transition: 0.2s ease-in;
  width: 100%;
  z-index: 50;
  .nav {
    min-height: 64px;
    flex-flow: row nowrap;
    padding: 0;
    .nav--expand-btn {
      color: #000;
      cursor: pointer;
      padding: 0 20px;
    }
  }
  .nav--header {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    line-height: 64px;
    transition: 0.2s ease-in;
    width: 250px;
    z-index: 10;
    .nav--brand {
      font-size: 1.09375rem;
      line-height: inherit;
      margin: 0;
      padding: 0 20px;
      white-space: nowrap;
    }
    .logo--icon {
      margin-right: 5px;
    }
  }
  .nav--collapse {
    background: #fff;
    flex-basis: auto;
    flex-grow: 1;
    margin-left: 250px;
    padding: 0 20px 0 0;
  }
  .nav {
    .nav--item {
      transition: 0.2s ease-in;
    }
    .nav--link,
    .input--search {
      color: rgba(0, 0, 0, 0.5);
      font-size: 0.875rem;
      height: 64px;
      line-height: 64px;
      padding: 0 20px;
    }
    .nav--link-text {
      padding-left: 5px;
    }
    .link--effect {
      cursor: pointer;
      overflow: hidden;
      position: relative;
      transition: all 0.1s ease-out;
      user-select: none;
      will-change: opacity, tranform;
    }
  }
  .nav--expand-md {
    .nav {
      display: flex;
      flex-direction: row;
      list-style: none;
      margin-bottom: 0;
      padding-left: 0;
    }
  }
  .nav--item {
    position: relative;
    .input--search {
      outline: none;
      width: 145px;
    }
  }
}
.dropdown--menu {
  background-clip: padding-box;
  background-color: #fff;
  border: 0;
  border-radius: 2px;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.1);
  color: #3e5569;
  float: none;
  font-size: 0.875rem;
  margin: 0.125rem 0 0;
  min-width: 280px;
  padding: 0 0 0.5rem 0;
  position: absolute;
  text-align: left;
  top: 100%;
  z-index: 1000;
  &.dropdown--menu-right {
    right: 0;
    left: auto;
    .arrow {
      right: 0;
    }
    .shape {
      left: auto;
      right: 20px;
    }
  }
  &.show {
    display: block;
  }
  .arrow {
    height: 10px;
    overflow: hidden;
    position: absolute;
    top: -10px;
    width: 40px;
    & > span {
      background-color: #7460ee;
      border-radius: 6px 0 0;
      content: "";
      height: 15px;
      position: absolute;
      top: 3px;
      transform: rotate(45deg);
      width: 15px;
    }
  }
  div:first-of-type {
    background-color: #7460ee;
  }
  .dropdown--item {
    background-color: transparent;
    border: 0;
    clear: both;
    color: #212529;
    display: block;
    padding: 0.65rem 1rem;
    text-align: inherit;
    text-decoration: none;
    white-space: nowrap;
    width: 100%;
    &:hover {
      color: #16181b;
      text-decoration: none;
      background-color: #f8f9fa;
    }
  }
  .dropdown--divider {
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
    border-top: 1px solid #f8f9fa;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/*RESPONSIVE MENU LEFT-BAR*/
// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
}

// Medium devices (tablets, 768px and up)

@media (min-width: 768px) {
  .nav--top {
    .nav--header {
      width: 70px;
      .logo--text {
        display: none;
      }
    }
    .nav--collapse {
      margin-left: 70px;
    }
  }
  .nav--header {
    .logo--icon {
      img {
        width: 29px;
      }
    }
  }
}
@media (max-width: 767px) {
  .nav--header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100% !important;
  }
  .nav--top {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    .nav--header {
      border-right: 0;
      .nav--brand {
        padding: 0;
      }
    }
    .nav {
      .nav--link {
        padding: 0 10px;
      }
    }
    .nav--collapse {
      display: none !important;
      &.show {
        display: block !important;
        margin-left: 0;
        position: relative;
        top: 64px;
        width: 100%;
      }
    }
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .nav--top {
    .nav--header {
      width: 250px;
      .logo--text {
        display: block;
      }
    }
    .nav--collapse {
      margin-left: 250px;
    }
  }
  .nav--header {
    .logo--icon {
      img {
        width: 37px;
      }
    }
  }
}
</style>
