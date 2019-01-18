<template>
  <div class="main--wrapper">
    <app-topbar/>
    <app-sidebar/>
    <div class="page--wrapper">
      <div class="page--content d_flex">
         <div class="main">
          <app-info :items="items"/>
          <app-content />
          <app-footer/>
        </div>

        <app-user-job />
      </div>
    </div>
  </div>
</template>

<script>
import AppInfo from "./components/info";
import AppContent from "./components/content";
import AppUserJob from "@/components/user/user-jobs";
import AppSidebar from "@/components/sidebar/sidebar";
import AppTopbar from "@/components/navbar/navbar";
import AppFooter from "./components/footer";
export default {
  components: {
    AppSidebar,
    AppTopbar,
    AppInfo,
    AppContent,
    AppUserJob,
    AppFooter
  },
  data() {
    return {
      items: [
        {
          name: "Thích nhất",
          url: "intersting"
        },
        {
          name: "Mới nhất",
          url: "feature",
          qty: 212
        },
        {
          name: "Hot nhất",
          url: "hot"
        },
        {
          name:"Tuần",
          url: "week"
        },
        {
          name: "Tháng",
          url: "month"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "homepage.scss";
</style>
