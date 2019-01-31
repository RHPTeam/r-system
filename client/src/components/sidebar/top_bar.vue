<template>
  <div class="wrraper--menu position_sticky">
    <div class="top--bar ct d_flex justify_content_between align_items_center">
       <div class="top--bar-logo">
         <icon-base icon-name="logo" width="280" height="42" viewBox="0 0 222 30"><icon-logo /></icon-base>
       </div>
       <div class="user position_relative d_flex justify_content_end align_items_center" @click="showDropdown">
          <div class="user--avatar position_relative">
            <img class="position_absolute" src="http://www.igeacps.it/app/uploads/2018/05/profile_uni_user.png">
          </div>
          <icon-base icon-name="arrow-down" viewBox="0 0 130 130"><icon-arrow-down /></icon-base>
          <ul class="user--dropdown position_absolute" :class="{ show: showdropdown }">
              <li>Logout</li>
              <li>Logout</li>
          </ul>
        </div>
    </div>
  </div>
    
</template>

<script>
import IconBase from "../icons/IconBase";
import IconLogo from "../icons/IconLogo.vue";
import IconArrowDown from "../icons/IconArrowDown";
export default {
  data() {
    return {
      showdropdown: false
    };
  },
  methods: {
    showDropdown: function() {
      this.showdropdown = !this.showdropdown;
    }
  },
  components: {
    IconBase,
    IconLogo,
    IconArrowDown
  }
};
</script>

<style scoped lang="scss">
.wrraper--menu {
  background: #776ab0;
  top: 0;
  width: 100%;
  z-index: 100;
}
.top--bar {
  height: 100px;
}
.user {
  cursor: pointer;
  .user--avatar {
    width: 45px;
    height: 45px;
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
  svg {
    color: #fff;
  }
  .user--dropdown {
    right: 0;
    z-index: 10;
    top: calc(100% + 10px);
    min-width: 160px;
    width: auto;
    border: 2px solid #ddd;
    pointer-events: auto;
    transition: all 0.4s ease;
    transition-delay: 0.2s;
    transform: translate(15px, 15px);
    text-align: left;
    visibility: hidden;
    opacity: 0;
    padding: 5px 15px 7.5px 15px;
    border-radius: 5px;
    list-style-type: none;
    margin-bottom: 0;
    background-color: #fff;
    &.show {
      visibility: visible;
      opacity: 1;
      transform: translate(0px, 0px);
    }
    &:after {
      content: "";
      position: absolute;
      top: -13px;
      border: 6px solid transparent;
      height: 0;
      left: 106px;
      border-bottom-color: #ddd;
    }
    li {
      border-bottom: 1px solid #a8a8a8;
      padding: 7.5px 0;
      transition: all 0.4s ease;
      cursor: pointer;
      &:hover {
        color: #776ab0;
      }
      &:last-child {
        border-bottom: 0;
      }
    }
  }
}
</style>
