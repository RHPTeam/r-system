<template>
    <div class="content-grid">
        <!-- router-view -->
        <div class="content-user">
            <item-content/>
            <item-content/>
            <item-content/>
            <item-content/>
            <item-content/>
            <item-content/>
            <item-content/>
            <item-content/>
            <item-content/>
            <item-content/>
            <item-content/>
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
.content-grid {
  .content-user {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-left: 64px;
    padding-right: 58px;
    padding-top: 22px;
  }
}
</style>
