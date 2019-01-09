<template>
    <div class="wrapper">
        <side-bar/>
        <home-page/>
    </div>
</template>

<script>
import SideBar from "@/components/sidebar/index";
import HomePage from "./homepage";
export default {
  components: {
    SideBar,
    HomePage
  }
};
</script>

<style lang="scss">
.wrapper {
  font-family: "SegoeUI";
  width: 1920px;
  height: 1079px;
  position: relative;
  overflow-x: hidden;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.428;
  word-wrap: break-word;
  color: #444;
}
.text-info {
  font: {
    family: "SegoeUI";
    size: 14px;
    weight: 600;
    style: normal;
    stretch: normal;
  }
  line-height: 1.36;
  letter-spacing: -0.1px;
  text-align: left;
  color: #a8a8a8;
}
.info-tag {
  padding-top: 10px;
  padding-bottom: 5px;
  text-align: center;
  .tag-item {
    padding: 6px 15px;
    border: 1px solid #a8a8a8;
    text-align: center;
    border-radius: 28px;
    background: #fff;
    margin-right: 7px;
    text-decoration: none;
    line-height: 1.36;
    letter-spacing: -0.1px;
    &:hover,
    &:active,
    &:focus {
      color: #776ab0;
      border-color: #776ab0;
    }
  }
}
</style>
