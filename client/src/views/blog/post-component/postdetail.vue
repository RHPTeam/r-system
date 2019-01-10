<template>
    <div class="postdetail">
        <h1 class="postdetail--title">9 Tricks for Kickass JavaScript Developers in 2019</h1>
        <div class="author d_flex justify_content_start align_items_center">          
          <div class="author--avatar position_relative">
            <img class="position_absolute" src="http://www.igeacps.it/app/uploads/2018/05/profile_uni_user.png">
          </div>
          <div class="author--info">
            <span class="author--info-name">Lukas Gisder-Dubé</span>
            <span class="author--info-time">09:00 PM - Jan 7</span>
          </div>
        </div>  
        <div class="postdetail--content">
          Yet another year is over and JavaScript is ever changing. However, there are some tips that can help you write clean and efficient code that scales, even (or maybe especially?) in 2019. Below is a list of 9 pragmatic tips that will make you a better developer.
          <h2>1. async / await</h2>
          If you’re still stuck in callback hell, 2014 wants its code back. Just don’t use callbacks, unless it is absolutely necessary, for example required by a library or for performance reasons. Promises are fine, but they’re a bit awkward to use if your codebase gets bigger. My go-to solution nowadays is async / await, which makes reading and improving my code a lot cleaner. In fact, you can await every Promise in JavaScript, in case a library you’re using is returning a Promise, simply await it. In fact, async/await is just syntactical sugar around promises. To make your code work, you only need to add the async keyword in front of a function. Here’s a quick example:
        </div>
        <div class="action d_flex justify_content_end align_items_center">
            <div class="action--clap d_flex justify_content_start align_items_center" @click="clap">
              <span>100</span>
              <icon-base v-if="!isClap" icon-name="clap" width="42" height="42" viewBox="0 0 25 25"><icon-clap /></icon-base>
              <icon-base v-else class="svg--active" icon-name="clap-active" width="42" height="42" viewBox="0 0 26 26"><icon-clap-active /></icon-base>
            </div>
            <div class="action--list position_relative" @click="showDropdown">
              <span><icon-base icon-name="more" width="42" height="42" viewBox="0 0 20 10"><icon-more /></icon-base></span>
              <ul class="action--dropdown position_absolute" :class="{ show: showdropdown }">
                <li>Lưu Bài Viết</li>
                <li>Sửa Bài Viết</li>
                <li>Xóa Bài Viết</li>
              </ul>
            </div>
        </div>
    </div>
</template>

<script>
import IconBase from "../../../components/icons/IconBase";
import IconMore from "../../../components/icons/IconMore.vue";
import IconClap from "../../../components/icons/IconClap.vue";
import IconClapActive from "../../../components/icons/IconClapActive.vue";

export default {
  data() {
    return {
      isClap: false,
      showdropdown: false
    };
  },
  methods: {
    showDropdown() {
      this.showdropdown = !this.showdropdown;
    },
    clap() {
      this.isClap = !this.isClap;
    }
  },
  components: {
    IconBase,
    IconMore,
    IconClap,
    IconClapActive
  }
};
</script>

<style scoped lang="scss">
.postdetail {
  background-color: #ffffff;
  padding: 15px 55px;
  margin-bottom: 20px;

  .postdetail--title {
    font-size: 48px;
    font-weight: bold;
    color: #707070;
  }
  .postdetail--content {
    font-size: 28px;
  }
}
.author {
  margin-top: 20px;
  margin-bottom: 50px;
  .author--avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 30px;
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
  .author--info {
    font-size: 32px;
    color: #707070;
    .author--info-name {
      font-weight: bold;
      display: block;
    }
  }
}
.action {
  font-size: 32px;
  color: #707070;
  margin-top: 50px;
  .action--clap {
    cursor: pointer;
    margin-right: 42px;
    span {
      margin-right: 10px;
      padding-top: 7.5px;
      user-select: none;
    }
    .svg--active {
      color: #776ab0;
    }
  }
  .action--list {
    cursor: pointer;
  }
  .action--dropdown {
    font-size: 24px;
    right: -50px;
    z-index: 10;
    top: calc(100% + 10px);
    min-width: 200px;
    width: auto;
    border: 2px solid #776ab0;
    pointer-events: auto;
    transition: all 0.4s ease;
    transition-delay: 0.2s;
    transform: translate(15px, 15px);
    text-align: left;
    visibility: hidden;
    opacity: 0;
    padding: 2.5px 15px 7.5px 15px;
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
      left: 126px;
      border-bottom-color: #776ab0;
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
        padding-bottom: 0;
        color: #ff3242;
      }
    }
  }
}
</style>
