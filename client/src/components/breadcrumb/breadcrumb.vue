<template>
  <div class="title--head position_relative">
    top
    <span class="title--head-top position_absolute">{{ breadcrumb }}</span>
  </div>
</template>

<script>
export default {
  props: ["breadcrumb"]
};
</script>

<style lang="scss" scoped>
.title--head {
  font-size: 120px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: -2.2px;
  color: #f5f5f5;
  .title--head-top {
    font-size: 26px;
    line-height: 1.35;
    letter-spacing: 0.6px;
    color: #999999;
    left: 0;
    top: 55%;
    transform: translateY(-50%);
  }
}
</style>
