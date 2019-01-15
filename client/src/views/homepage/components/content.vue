<template>
    <div class="content--grid">
        <!-- router-view -->
        <div class="content--question ct_f">
          <div class="">
            <div class="c_12">
              <item-content/>
            </div>
            <div class="c_12">
              <item-content/>
            </div>
            <div class="c_12">
              <item-content/>
            </div>
            <div class="c_12">
              <item-content/>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import ItemContent from "./itemcontent";
export default {
  components: {
    ItemContent
  }
};
</script>
<style lang="scss" scoped>
</style>
