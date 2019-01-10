<template>
    <div class="comment">
        <div class="d_flex justify_content_between align_items_start">  
          <div class="author d_flex justify_content_start align_items_center">          
            <div class="author--avatar position_relative">
                <img class="position_absolute" src="http://www.igeacps.it/app/uploads/2018/05/profile_uni_user.png">
            </div>
            <div class="author--info">
                <span class="author--info-name">Lukas Gisder-Dubé</span>
                <span class="author--info-time">09:00 PM - Jan 7</span>
            </div>
          </div>        
          <div class="comment--action position_relative" @click="showDropdown">
              <span><icon-base icon-name="more" width="42" height="42" viewBox="0 0 20 10"><icon-more /></icon-base></span>
              <ul class="comment--dropdown position_absolute" :class="{ show: showdropdown }">
                <li>Xóa Bài Viết</li>
              </ul>
            </div>
        </div>        
        <div class="comment--content">
            Really nice article, I will definitely use those tricks in my daily work. I really liked the async/await which finally gets me out of callback hell ;)
        </div>
    </div>
</template>

<script>
import IconBase from "../../../components/icons/IconBase";
import IconMore from "../../../components/icons/IconMore.vue";
export default {
  data() {
    return {
      showdropdown: false
    };
  },
  methods: {
    showDropdown() {
      this.showdropdown = !this.showdropdown;
    }
  },
  components: {
    IconBase,
    IconMore
  }
};
</script>

<style scoped lang="scss">
.comment {
  background-color: #fff;
  padding: 30px 55px;
  margin: 10px 0;
  .comment--content {
    font-size: 32px;
    margin-top: 10px;
  }
  &:last-child {
    margin-bottom: 20px;
  }
  .comment--action {
    cursor: pointer;
    svg {
      color: #707070;
    }
  }
  .comment--dropdown {
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
      }
    }
  }
}
.author {
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
      font-size: 32px;
      font-weight: bold;
      color: #707070;
      display: block;
    }
  }
}
</style>
