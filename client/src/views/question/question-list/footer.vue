<template>
  <div class="main ct mt-5 pb-3">
    <div class="r justify_content_center">
      <div class="c_12 c_md_6 c_xl_6">
        <figure class='image--main'>
            <img :src="`${base}images/svg/rhp-home-icon_@1x.svg`" alt="">
        </figure>
        <div class="main--text mt-3">
          <h3>Looking for more?</h3>
          <h4>Browse the complete <span>list questions</span>, or <span>popular tags</span>.Help us answer unanswered questions </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      base: process.env.BASE_URL
    };
  }
};
</script>

<style lang="scss" scoped>
    .image--main{
        display: flex;
        justify-content: center;
        img{
            width: 80%;
        }
    }
    .main--text{
        text-align: center;
        h4{
            letter-spacing: -0.27px;
            font-size: 15px;
            line-height: 20px
            
        }
        span{
            color: #0077dd
        }
    }
</style>
