<template>
    <div class="main--aside ml_auto">
        <div class="aside--title">
          <span class="info--title">Looking for out...</span>
          <div class="jobs">jobs</div>
        </div>
        <div class="aside--wrapper">
          <div class="aside--grid">
            <item-question/>
            <item-question/>
            <item-question/>
          </div>
        </div>
        <button type="submit" class="btn--aside">view all jobs</button>
    </div>
</template>
<script>
import ItemQuestion from "./item-question";
export default {
  components: {
    ItemQuestion
  }
};
</script>
<style lang="scss" scoped>
.main--aside {
  width: 100%;
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
    .aside--grid {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 1px;
        background-color: #a8a8a8;
        top: 0;
        bottom: 0;
        left: 8px;
      }
    }
  }
  button {
    text-transform: uppercase;
    color: #0077dd;
    font-size: 15px;
    font-weight: 500;
    padding-left: 2.8em;
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
/*RESPONSIVE SIDE-BAR-RIGHT*/
// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
}

// Medium devices (tablets, 768px and up)

@media (max-width: 768px) {
  .main--aside {
    width: 85%;
    margin: auto;
    .aside--item {
      padding: 0 5em 0 5.8em;
      text-align: center;
    }
    button {
      padding: 1em 0 2em 5em;
      &::after {
        top: 21px !important;
      }
    }
  }
}
@media (min-width: 768px) {
  .page--wrapper {
    margin-left: 70px;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .page--wrapper {
    margin-left: 250px;
  }
}
</style>
