<template>
    <div class="wrapper d_flex align_items_stretch">
        <app-side-bar/>
        <div class="main">
            <app-nav-bar/>
            <div class="content d_flex align_items_stretch">
                <app-create-question/>
                <app-aside/>
            </div>
        </div>
    </div>
</template>

<script>
import AppSideBar from "@/components/sidebar/sidebar-left";
import AppNavBar from "@/components/navbar/navbar";
import AppAside from "@/views/user/user-list/aside";
import AppCreateQuestion from "@/views/question/question-create/create";
export default {
  components: {
    AppSideBar,
    AppNavBar,
    AppAside,
    AppCreateQuestion
  }
};
</script>

<style scoped lang="scss">
.main {
  //   width: 100%;
  min-height: 100vh;
  background-color: #fff;
}
</style>
