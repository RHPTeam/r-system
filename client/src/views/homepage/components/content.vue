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
          <div>
            <app-paginate/>
          </div>
        </div>
    </div>
</template>
<script>
import ItemContent from "./itemcontent";
import AppPaginate from "./paginate";
export default {
  components: {
    ItemContent,
    AppPaginate
  }
};
</script>
<style lang="scss" scoped>
</style>
