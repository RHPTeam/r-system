<template>
    <div class="content--grid">
        <!-- router-view -->
        <div class="content--question ct_f">
          <div class="">
            <item/>
            <item/>
            <item/>
            <item/>
          </div>
        </div>
    </div>
</template>
<script>
import Item from "./cp-content/item";
export default {
  components: {
    Item
  }
};
</script>
<style lang="scss" scoped>
</style>
