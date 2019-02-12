<template>
  <div class="main--aside ml_auto">
    <div class="aside--title">
      <span class="info--title">Looking for out...</span>
      <div class="jobs">jobs</div>
    </div>
    <div class="aside--wrapper">
      <div class="aside--grid">
        <item/>
        <item/>
        <item/>
        <item/>
        <item/>
      </div>
    </div>
    <button type="submit" class="btn--aside">view all jobs</button>
  </div>
</template>
<script>
import Item from "./cp-aside/item";
export default {
  components: {
    Item
  }
};
</script>
<style lang="scss" scoped>
@import "aside";
</style>
