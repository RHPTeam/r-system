<template>
  <div class="main--aside mb_5">
    <div class="ct m_0">
      <div class="aside--title position_relative">
        <span class="aside--title-top position_absolute">Looking for out...</span>
        jobs
      </div>
    </div>
    <div class="aside--wrapper ct m_0">
      <div class="aside--grid">
        <div class="aside--item position_relative">
          <h3>front end developer with vue</h3>
          <p class="text--info text--aside"><label>Framgia Inc</label></p>
          <p class="text--info text--aside">
            <span class="city">
              <icon-base icon-name="location" viewBox="0 0 60 60"><icon-location /></icon-base>
                Ha Noi, Viet Nam
            </span>
            <span class="remote">
              <icon-base icon-name="world" viewBox="0 0 500 500"><icon-world /></icon-base>
                Remote
            </span>
          </p>
          <div class="info--tag aside--tag">
            <a href="#" class=" text--info tag--item">angular js</a>
            <a href="#" class=" text--info tag--item">cordova</a>
          </div>
        </div>
        <div class="aside--item position_relative">
          <h3>front end developer with vue</h3>
          <p class="text--info text--aside"><label>Framgia Inc</label></p>
          <p class="text--info text--aside">
            <span class="city">
              <icon-base icon-name="location" viewBox="0 0 60 60"><icon-location /></icon-base>
                Ha Noi, Viet Nam
            </span>
            <span class="remote">
              <icon-base icon-name="world" viewBox="0 0 500 500"><icon-world /></icon-base>
                Remote
            </span>
          </p>
          <div class="info--tag aside--tag">
            <a href="#" class=" text--info tag--item">angular js</a>
            <a href="#" class=" text--info tag--item">cordova</a>
          </div>
        </div>
      </div>
    </div>
    <button type="submit" class="btn--aside">view all jobs</button>
  </div>
</template>
<script>
import IconBase from "@/components/icons/IconBase";
import IconLocation from "@/components/icons/IconLocation";
import IconWorld from "@/components/icons/IconWorld";
export default {
  components: {
    IconBase,
    IconLocation,
    IconWorld
  }
};
</script>
<style lang="scss" scoped>
.main--aside {
  // width: 510px;
  // height: 973px;
  min-height: calc(100% - 64px);
  background: #fafafa;
  .aside--title {
    font-size: 120px;
    font-weight: 600;
    line-height: 1.33;
    letter-spacing: -2.2px;
    color: #f5f5f5;
    .aside--title-top {
      font-size: 26px;
      line-height: 1.35;
      letter-spacing: 0.6px;
      color: #999999;
      left: 0;
      top: 55%;
      transform: translateY(-50%);
    }
  }
  .aside--wrapper {
    // padding-left: 119px;
    // padding-right: 75px;
    padding-left: 67px;
    .aside--grid {
      width: 280px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 1px;
        background-color: #a8a8a8;
        top: 5px;
        bottom: 0;
        left: -40px;
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
.aside--item {
  width: 100%;
  margin-bottom: 34px;
  .text--aside {
    font-weight: normal !important;
  }
  h3 {
    font-size: 18px;
    color: #0077dd;
    font-weight: normal;
    margin: 0;
    text-transform: capitalize;
    cursor: pointer;
    padding: 2px 0;
  }
  p {
    margin-bottom: 16px;
    > label {
      font-size: 18px !important;
      margin: 0;
    }
    > span.city {
      margin-right: 1em;
      svg {
        color: #a8a8a8 !important;
      }
    }
    svg {
      color: #a8a8a8;
    }
  }
  .aside--tag {
    text-align: left !important;
    border-bottom: 1px solid #a8a8a8;
    padding-bottom: 34px;
  }
  &:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    border: 1px solid #a8a8a8;
    border-radius: 50%;
    background: #fff;
    left: -51px;
    top: 2px;
  }
  &:last-child {
    .aside--tag {
      border-bottom: none;
    }
  }
}
</style>
