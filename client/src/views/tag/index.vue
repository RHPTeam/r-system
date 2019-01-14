<template>
  <div class="main--wrapper">
    <app-topbar />
    <app-sidebar />
    <div class="page--wrapper">
      <div class="page--content d_flex">
        <div class="main">
          <app-info />
          <app-content />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppInfo from "./components/info";
  import AppContent from "./components/content";
  import AppSidebar from "@/components/sidebar/sidebar-left";
  import AppTopbar from "@/components/navbar/navbar";
  export default {
    components: {
      AppSidebar,
      AppTopbar,
      AppInfo,
      AppContent,
    },

    
  };
  
</script>

<style lang="scss" scope>
  .main--wrapper {
    font-family: "Quicksand", sans-serif;
    position: relative;
    color: #3b4045;

    .page--wrapper {
      background-color: #fff;
      display: block;
      margin-left: 250px;
      padding-top: 64px;
      position: relative;
      transition: 0.2s ease-in;
    }

    .page--content {
      background-color: #fafafa;

      .main {
        background-color: #fff;
        width: 100%;
      }
    }

    /*RESPONSIVE MENU LEFT-BAR*/
    // Extra small devices (portrait phones, less than 576px)
    // No media query for `xs` since this is the default in Bootstrap

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {}

    // Medium devices (tablets, 768px and up)

    @media (max-width: 768px) {
      .page--wrapper {
        margin-left: 0;

        .page--content {
          flex-direction: column;
        }
      }
    }

    @media (min-width: 768px) {
      .page--wrapper {
        margin-left: 70px;
      }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {}

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
      .page--wrapper {
        margin-left: 250px;
      }
    }
  }

</style>
