<template>
  <div class="ads position_relative">
      <img class="position_absolute" src="https://hd1.hotdeal.vn//hinhanh/HCM/39977_0_body_08.jpg" alt="">
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.ads {
  overflow: hidden;
    width: 100%;
  img {
    top: 50%;
    max-width: none;
    width: 100%;
    height: auto;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  &:before {
    display: block;
    padding-top: 100%;
    content: "";
    background-color: #c9c9c9;
  }
}
</style>
