<template>
  <div class="navbar d_flex justify_content_start align_items_center">
      <span id="" class="navbar--btn">
        <icon-base icon-name="menu" viewBox="0 0 500 500"><icon-menu /></icon-base>
      </span>
      <div class="narbar--search d_flex justify_content_start align_items_center position_relative">
          <icon-base icon-name="search" viewBox="0 0 65 65" class="position_absolute"><icon-search /></icon-base>
          <input type="text" name="" class="" placeholder="Search">
          <span class="narbar--search-border"></span>  
      </div>
      <div class="navbar--right ml_auto d_flex justify_content_end align_items_center">
        <div class="navbar--item d_flex align_items_center">
          <icon-base icon-name="help" viewBox="0 0 60 60"><icon-help /></icon-base>
          <span>Help  </span>
        </div>
        <div class="navbar--item d_flex align_items_center">
          <icon-base icon-name="monitor" viewBox="0 0 520 520"><icon-monitor /></icon-base>
          <span>Tour</span>
        </div>
        <div class="user position_relative d_flex justify_content_end align_items_center" @click="showDropdown">
            <div class="user--avatar position_relative">
              <img class="position_absolute" src="http://www.igeacps.it/app/uploads/2018/05/profile_uni_user.png">
            </div>
            <icon-base icon-name="arrow-down" viewBox="0 0 130 130"><icon-arrow-down /></icon-base>
            <!-- <ul class="user--dropdown position_absolute user--options" :class="{ show: showdropdown }">
                <li>Logout</li>
                <li>Logout</li>
            </ul> -->
        </div>        
      </div>      
  </div>
</template>

<script>
import IconBase from "../icons/IconBase";
import IconMenu from "../icons/IconMenu";
import IconSearch from "../icons/IconSearch";
import IconHelp from "../icons/IconHelp";
import IconMonitor from "../icons/IconMonitor";
import IconArrowDown from "../icons/IconArrowDown";
export default {
  data() {
    return {
      showdropdown: false
    };
  },
  components: {
    IconBase,
    IconMenu,
    IconSearch,
    IconHelp,
    IconMonitor,
    IconArrowDown
  },
  methods: {
    showDropdown: function() {
      this.showdropdown = !this.showdropdown;
    }
  }
};
</script>

<style scoped lang="scss">
.navbar {
  border-bottom: 1px solid #e4e4e4;
  height: 107px;
  padding: 10px 20px;
  font-size: 17px;
  .navbar--btn {
    margin-right: 20px;
    margin-bottom: 1px;
  }
  svg {
    color: #a8a8a8;
  }
  .narbar--search {
    padding-left: 20px;
    svg {
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    input {
      padding: 10px;
      width: 300px;
      outline: none;
      border: none;
      transition: all 0.5s ease;
      border-bottom: 1px solid transparent;
      &:focus {
        border-color: #776ab0;
      }
    }
  }
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #a8a8a8;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: #a8a8a8;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: #a8a8a8;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: #a8a8a8;
  }
  .navbar--item {
    margin-right: 35px;
    line-height: 1.29;
    letter-spacing: 0.1px;
    color: #a8a8a8;
    svg {
      margin-right: 5px;
    }
  }
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
    .user--dropdown {
      right: 0;
      z-index: 10;
      top: calc(100% + 10px);
      min-width: 160px;
      width: auto;
      border: 2px solid #776ab0;
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
        border-bottom-color: #776ab0;
      }
      &.position_absolute {
        top: 66px;
        right: 0;
        width: 150px;
        background: #fafafa;
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
    .user--options {
      list-style: none;
      margin: 0;
      padding: 0;
      width: 100px;
    }
  }
}
</style>
