<template>
    <div class="content--grid">
        <!-- router-view -->
        <div class="content--question ct_f">
          <div class="">
            <div class="c_12">
              <item/>
            </div>
            <div class="c_12">
              <item/>
            </div>
            <div class="c_12">
              <item/>
            </div>
            <div class="c_12">
              <item/>
            </div>
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
