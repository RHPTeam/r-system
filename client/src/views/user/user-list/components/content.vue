<template>
    <div class="content--grid">
        <!-- router-view -->
        <div class="content--user ct_f">
            <item-content/>
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
