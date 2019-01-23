<template>
  <div class="content--head ct m_0">
    <div class="d_flex align_items_center justify_content_center justify_content_md_start">
      <app-breadcrumb/>
    </div>
    <div class="r p_3">
        <app-tabs :items="items"/>
    </div>
  </div>
</template>
<script>
import AppTabs from "@/components/navbar/tabs";
import AppBreadcrumb from "@/components/breadcrumb/breadcrumb";
export default {
  data() {
    return {
      items: [
        {
          name: "Overview",
          url: "over-view"
        },
        {
          name: "Company",
          url: "company"
        },
        {
          name: "Developer Culture",
          url: "dev-culture"
        }
      ]
    };
  },
  components: {
    AppTabs,
    AppBreadcrumb
  }
};
</script>
