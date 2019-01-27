<template>
  <div class="ads">
      <span>Advertisement </span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.ads {
  width: 100%;
  position: relative;
  span {
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    line-height: 1.17;
    letter-spacing: 0.3px;
    color: #a8a8a8;

    text-align: center;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  &:before {
    display: block;
    padding-top: 100%;
    content: "";
    background-color: #c9c9c9;
  }
}
</style>
