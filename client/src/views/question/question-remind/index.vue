<template>
  <div class="wraper">
    <app-side-bar/>
    <div class="main">
      <app-nav-bar/>
      <div class="main--content">
        <div class="content--wrapper">
          <div class="container_fluid">
            <div class="content--head">
              <h3>Questions</h3>
              <div class="head--under">
                <label>top</label>
              </div>
            </div>
            <app-content/>
          </div>
        </div>
        <app-aside/>
      </div>
    </div>
  </div>
</template>

<script>
import AppSideBar from "@/components/sidebar/sidebar";
import AppNavBar from "@/components/navbar/navbar";
import AppAside from "@/components/sidebar/aside";
import AppContent from "./components/content";

export default {
  components: {
    AppSideBar,
    AppNavBar,
    AppAside,
    AppContent
  }
};
</script>

<style scoped>
@import "index.scss";
</style>
