<template>
  <div class="content--head ct m_0">
    <div class="d_flex align_items_center justify_content_center justify_content_md_start">
      <app-breadcrumb/>
    </div>
    <app-tabs :items="items" />
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
          name: "Intersting",
          url: "intersting"
        },
        {
          name: "Feature",
          url: "feature",
          qty: 212
        },
        {
          name: "Hot",
          url: "Week"
        },
        {
          name: "Month",
          url: "questioners"
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
<style lang="scss" scoped>
@media (max-width: 767px) {
  .content--head {
    h3 {
      font-size: 1.5rem;
    }
  }
}
</style>
