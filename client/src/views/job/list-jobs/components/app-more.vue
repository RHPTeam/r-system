<template>
  <div class="post--jobs">
    <div class="post--job-options">
      <div class="options--img"></div>
    </div>
    <div class="post--job-more text_center mt_4 mb_3">
      <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, recusandae?</h4>
      <a href="#">Lear more >> </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .post--jobs {
    padding: 2em;
    .post--job-options {
      padding: 20px 0 10px;
      border-top: 1px solid #e4e4e4;
      .options--img {
        width: 103px;
        height: 103px;
        margin: auto;
        background: url(../../../../assets/rocket.svg) no-repeat;
        background-position: center;
        background-size: cover;
      }
    }
    .post--job-more {
      h4 {
        font-size: 16px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.23;
        letter-spacing: -0.2px;
        text-align: center;
        color: #a8a8a8;
      }
      a {
        color: #0077dd;
      }
    }
  }
</style>
