<template>
    <div class="post--wrapper">
      <app-menu/>
      <div class="post ct">
        <app-post-detail/>
        <app-comment/>
        <app-comment/>
        <app-comment/>
        <app-add-comment/>
        <app-post-other/>
      </div>
    </div>    
</template>

<script>
import AppMenu from "@/components/navbar/header";
import AppPostDetail from "./post-component/postdetail";
import AppComment from "./post-component/comment";
import AppAddComment from "./post-component/addcomment";
import AppPostOther from "./post-component/postother";

export default {
  components: {
    AppMenu,
    AppPostDetail,
    AppComment,
    AppAddComment,
    AppPostOther
  }
};
</script>

<style scoped lang="scss">
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
