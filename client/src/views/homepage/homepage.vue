<template>
  <div class="main--wrapper">
    <app-topbar/>
    <app-sidebar/>
    <div class="page--wrapper">
      <div class="page--content d_flex">
<<<<<<< HEAD
        <div class="main">
          <app-info/>
          <app-content/>
        </div>
        <app-user-job/>
=======
         <div class="main">
          <app-info  :items="items"/>
          <app-content />

          <app-footer/>
        </div>

        <app-user-job />
>>>>>>> dev-lamnt-vue
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import AppInfo from "./components/info";
import AppContent from "./components/content";
import AppUserJob from "@/components/user/user-jobs";
import AppSidebar from "@/components/sidebar/sidebar-left";
import AppTopbar from "@/components/navbar/navbar";

export default {
  components: {
    AppSidebar,
    AppTopbar,
    AppInfo,
    AppContent,
    AppUserJob
  }
};
=======
  import AppInfo from "./components/info";
  import AppContent from "./components/content";
  import AppUserJob from "@/components/user/user-jobs";
  import AppSidebar from "@/components/sidebar/sidebar-left";
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
    data(){
      return {
        items: [{
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
          },

        ]
      }
    }
  };

>>>>>>> dev-lamnt-vue
</script>

<style lang="scss" scope>
 @import "homepage.scss";
</style>
