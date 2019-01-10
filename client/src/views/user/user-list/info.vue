<template>
    <div class="content--head">
        <h3>Welcome back with RHP Team</h3>
        <app-tabs/>
        <div class="head--under">
            <label>top</label>
        </div> 
    </div>
</template>
<script>
import AppTabs from "./tabs";
export default {
  components: {
    AppTabs
  }
};
</script>
<style lang="scss" scoped>
.content--head {
  width: 100%;
  height: 235px;
  position: relative;
  border-bottom: 1px solid #e4e4e4;
  h3 {
    color: #776ab0;
    // color: #999;
    font-size: 26px;
    line-height: 220px;
    padding-left: 75px;
  }
  .head--under {
    position: absolute;
    top: 0;
    left: 75px;
    z-index: -15;
    width: 182px;
    height: 159px;
    > label {
      font-size: 120px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.33;
      letter-spacing: -2.2px;
      text-align: left;
      color: #f5f5f5;
    }
  }
}
</style>
