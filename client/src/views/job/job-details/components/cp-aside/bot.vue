<template>
  <footer class="p_4">
    <div class="aside--top p_4">
      <div class="aside--footer-img">
      </div>
    </div>
    <div class="aside--bot text_center">
      <p class="mb_3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <p><a href="#">Lear more >> </a></p>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  .aside--footer-img {
    width: 103px;
    height: 103px;
    background: url(../../../../../assets/rocket.svg);
    background-size: cover;
    background-position: center;
    margin: auto;
  }
  .aside--bot {
    p {
      font-size: 16px;
      line-height: 1.15;
      letter-spacing: -0.4px;
      color: #707070;
      a {
        font-size: 14px;
        line-height: 1.15;
        letter-spacing: -0.2px;
        color: #0077dd;
      }
    }
  }
}
</style>
