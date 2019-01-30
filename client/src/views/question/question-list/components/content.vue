<template>
    <div class="content--grid">
        <!-- router-view -->
        <div class="content--question ct_f">
          <div class="">
            <div class="c_12" v-for="(post, index) in posts" :key="index">
              <item :post="post" />
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
  },
  props: ["posts"]
};
</script>
<style lang="scss" scoped>
</style>
