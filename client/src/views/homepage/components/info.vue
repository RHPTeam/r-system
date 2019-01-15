<template>
  <div class="content--head ct_fl ">
    <div class="d_flex align_items_center justify_content_center justify_content_md_start">
      <app-breadcrumb />
      <div class="ml_auto ask--question">
        <button class="btn--question">Ask question</button>
      </div>

    </div>
    <app-tabs :items="items"  />
  </div>
</template>
<script>
  import AppTabs from "@/components/navbar/tabs";
  import AppContent from "./itemcontent";
  import AppBreadcrumb from "@/components/breadcrumb/breadcrumb";
  export default {
    
    props:['items'],

    components: {
      AppTabs,
      AppBreadcrumb
    },
   
  };

</script>
<style lang="scss" scoped>
@import "info.scss";
</style>
