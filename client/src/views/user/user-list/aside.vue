<template>
    <div class="main--aside">
        <div class="aside--title">
            <span class="info--title">Looking for out...</span>
            <div class="jobs">jobs</div>
        </div>
        <div class="aside--wrapper">
            <div class="aside--grid">
                <item-aside/>
                <item-aside/>
                <item-aside/>
            </div>
        </div>
        <button type="submit" class="btn--aside">view all jobs</button>
    </div>
</template>
<script>
import ItemAside from './item-aside'
export default {
    components: {
        ItemAside,
    }
};
</script>
<style lang="scss" scoped>
.main--aside {
  width: 510px;
  height: 973px;
  background: #fafafa;
  .aside--title {
    position: relative;
    width: 100%;
    height: 159px;
    // margin-bottom: 20px;
    .jobs {
      position: absolute;
      top: 0;
      left: 55px;
      z-index: -15;
      width: 231px;
      height: 159px;
      font-family: "SegoeUI";
      font-size: 120px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.33;
      letter-spacing: -1.1px;
      text-align: left;
      color: #f0f0f0;
    }
    span.info--title {
      font-family: SegoeUI;
      font-size: 26px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: 150px;
      letter-spacing: 0.3px;
      text-align: left;
      color: #999;
      padding-left: 55px;
    }
  }
  .aside--wrapper {
    padding-left: 119px;
    padding-right: 75px;
    .aside--grid {
      width: 316px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 1px;
        background-color: #a8a8a8;
        top: 0;
        bottom: 0;
        left: -50px;
      }
      
    }
  }
  button {
    text-transform: uppercase;
    color: #0077dd;
    font-size: 15px;
    font-weight: 500;
    padding-left: 119px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      width: 11px;
      height: 11px;
      top: 6px;
      right: -15px;
      border-top: 2px solid #0077dd;
      border-right: 2px solid #0077dd;
      transform: rotate(45deg);
    }
  }
}
</style>
