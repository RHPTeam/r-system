<template>
  <div class="content--head ct m_0">
    <div class="d_flex align_items_center justify_content_center justify_content_md_start">
      <!-- <h3>Welcome back with RHP Team</h3> -->
      <app-breadcrumb/>
    </div>
    <app-tabs :items="items"/>
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
          name: "High Rank",
          url: "high_rank"
        },
        {
          name: "New User",
          url: "new_user"
        },
        {
          name: "Voters",
          url: "voters"
        },
        {
          name: "Questioners",
          url: "questioners"
        },
        {
          name: "Answers",
          url: "answers"
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
