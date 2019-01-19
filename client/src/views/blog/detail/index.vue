<template>
    <div class="post--wrapper blog--content" :data-theme="currentTheme">
      <app-header/>
      <div class="post ct">
        <app-post-detail/>
        <app-comment/>
        <app-comment/>
        <app-comment/>
        <app-add-comment/>
        <app-post-other/>
      </div>
      <app-footer/>
       <div class="blog--change position_fixed text_center">
        <div class="change--theme" @click="changeTheme">
          <div v-if="isThemeLight" class="theme--dark"><icon-base icon-name="moon" width="30" height="30" viewBox="0 0 24.678 25.761"><icon-moon /></icon-base></div>
          <div v-else class="theme--light"><icon-base icon-name="sun" width="30" height="30" viewBox="0 0 30.152 30.152"><icon-sun/></icon-base></div>
        </div>
        <div class="change--size"><icon-base icon-name="font-size" width="30" height="30" viewBox="0 0 32.678 22.018"><icon-font-size /></icon-base></div>
      </div>
    </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconFontSize from "@/components/icons/IconFontSize";
import IconMoon from "@/components/icons/IconMoon";
import IconSun from "@/components/icons/IconSun";
import AppHeader from "@/components/blog/header";
import AppFooter from "@/components/blog/footer";
import AppPostDetail from "@/views/blog/detail/components/postdetail";
import AppComment from "@/views/blog/detail/components/comment";
import AppAddComment from "@/views/blog/detail/components/addcomment";
import AppPostOther from "@/views/blog/detail/components/postother";

export default {
  data() {
    return {
      isThemeLight: true,
      theme: "light"
    };
  },
  components: {
    IconBase,
    IconFontSize,
    IconMoon,
    IconSun,
    AppHeader,
    AppFooter,
    AppPostDetail,
    AppComment,
    AppAddComment,
    AppPostOther
  },
  computed: {
    valueTheme() {
      return this.theme;
    },
    currentTheme() {
      return this.$store.getters.themeName;
    }
  },
  methods: {
    changeTheme() {
      this.isThemeLight = !this.isThemeLight;
      if (this.isThemeLight == true) {
        this.theme = "light";
      } else {
        this.theme = "dark";
      }
      this.$store.dispatch("changeTheme", this.valueTheme);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../components/blog/scss/main";
.post--wrapper {
  background-color: #e9e9e9;
}
.post {
  font-family: Roboto;
  padding-bottom: 50px;
  margin-top: 20px;
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
    .author--info-name {
      font-size: 32px;
      font-weight: bold;
      color: #707070;
      display: block;
    }
    .author--info-time {
      font-size: 32px;
      color: #707070;
    }
  }
}
</style>
