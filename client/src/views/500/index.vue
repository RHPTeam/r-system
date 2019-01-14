<template>
  <div class="main">
    <div class="r no_g">
      <div class="c_12 c_md_6 c_xl_6">
        <div class="main--text">
          <h1>500</h1>
          <p>Xin lỗi! Có một vài lỗi xảy ra trên máy chủ của chúng tôi. Vui lòng quay lại sau</p>
          <router-link tag="button" class="btn btn_dark" to="/">Quay về trang chủ</router-link>
        </div>
      </div>
      <div class="c_12 c_md_6 c_xl_6">
        <div class="bg_svg">
          <img :src="`${base}images/svg/500.svg`" alt="">
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    font-family: "Quicksand", sans-serif;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    .main--text {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      height: 100%;
      margin-top: 35%;
      h1 {
        color: #373737;
        font-size: 82px;
      }
      p {
        font-size: 24px;
      }
    }
  }
</style>
