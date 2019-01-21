<template>  
<div class="card--question r">
    <div class="card--left r_auto">
        <div class="card--title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div class="card--tabs">
            <a href="" class="card--btn">python</a>
            <a href="" class="card--btn">javascript</a>
        </div>
        <div class="created">
        <span class="circle-icon">
         <icon-base icon-name="pen" width="10" height="10" viewBox="0 0 9.374 9.328"><icon-pen /></icon-base>
        </span>
           
            modifiled 1 min ago <a href="">clusterdude 122</a>
        </div>
    </div>
    <div class="card-right ml_auto d_flex ">
    <div class="like  d_flex flex_column align_items_center">
        <span class="num">0</span>
        <span>votes</span>
        <span><icon-base icon-name="thumbs" viewBox="0 0 18.657 11.994"><icon-thumbs-up /></icon-base></span>
    </div>
    <div class="comt d_flex flex_column align_items_center">
        <span class="num">0</span>
        <span>answers</span>
        <span><icon-base icon-name="answer" viewBox="0 0 18.657 11.994"><icon-answer /></icon-base></span>
    </div>
    <div class="views d_flex flex_column align_items_center">
        <span class="num">0</span>
        <span>views</span>
        <span><icon-base icon-name="eye" viewBox="0 0 480 520"><icon-eye /></icon-base></span>
    </div>
    </div>
</div>
</template>

<script>
import IconPen from "@/components/icons/IconPen";
import IconThumbsUp from "@/components/icons/IconThumbsUp";
import IconEye from "@/components/icons/IconEye";
import IconAnswer from "@/components/icons/IconAnswer";
import IconBase from "@/components/icons/IconBase";
export default {
  components: {
    IconPen,
    IconBase,
    IconEye,
    IconThumbsUp,
    IconAnswer
  }
};
</script>

<style lang="scss" scope>
.card--question {
  border: 0;
  border-bottom: 1px solid #e4e4e4;
  border-radius: 0;
  padding-top: 40px;
  padding-bottom: 40px;
  .card--title {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.31;
    letter-spacing: -0.3px;
    color: #0077dd;
  }
  span.circle-icon {
    border-radius: 50%;
    border: 1px solid #ccc;
    width: 25px;
    height: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-bottom: 0;
    }
  }
  .card--btn {
    padding: 4px 15px;
    border-radius: 28px;
    display: inline-block;
    border: 1px solid #ccc;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #a8a8a8;
    &:hover {
      text-decoration: none;
    }
  }
  .card--btn + .card--btn {
    margin-left: 15px;
  }
  .card-right {
    > div + div {
      margin-left: 52px;
    }
    > div {
      font-size: 13px;
      line-height: 1.31;
      letter-spacing: -0.2px;
      &:after {
        content: "";
        border-top-left-radius: 90px;
        border-top-right-radius: 90px;
        background: #fff;
        display: inline-block;
        margin: 0 1em 1em 0;
        height: 10px;
        width: 20px;
        display: block;
        position: absolute;
        bottom: -13px;
        border-bottom: 1px solid #e4e4e4;
      }
      &:hover,
      &:active {
        color: #5fba7d;
        font-size: 13px;
        line-height: 1.31;
        letter-spacing: -0.2px;
        &:after {
          content: "";
          background: #5fba7d;
          border-bottom: 1px solid #5fba7d;
        }
      }
      > span + span {
        margin-top: 20px;
        display: block;
      }
      .num {
        font-size: 15px;
        line-height: 1.33;
        letter-spacing: -0.3px;
        color: #a8a8a8;
      }
    }
  }
}
</style>
