<template>
  <div class="main--wrapper">
    <app-topbar/>
    <app-sidebar/>
    <router-view />
  </div>
</template>

<script>
import AppSidebar from "@/components/sidebar/sidebar-left";
import AppTopbar from "@/components/navbar/navbar";
export default {
  components: {
    AppSidebar,
    AppTopbar
  }
};
</script>

<style lang="scss">
.main--wrapper {
  font-family: "Quicksand", sans-serif;
  position: relative;
  color: #3b4045;

}
</style>
