<template>
    <div class="main">
        <app-head/>
        <div class="main--content">
            <div class="content--wrapper">
                <div class="container_fluid">
                    <app-info/>
                    <app-content/>
                    <app-paginate/>
                </div>
            </div>
            <app-aside/>
        </div>
    </div>
</template>

<script>
import AppInfo from "./info";
import AppHead from "./head";
import AppAside from "./aside";
import AppContent from "./content";
import AppPaginate from "./paginate";
export default {
  components: {
    AppInfo,
    AppHead,
    AppAside,
    AppContent,
    AppPaginate
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-height: 100vh;
}
.main {
  width: 100%;
  min-height: 100vh;
  // width: 1623px;
  // height: 1079px;
  // margin-left: 297px;
  .main--content {
    // width: 1623px;
    display: flex;
    .content--wrapper {
      width: 1113px;
      height: 973px;
      border-right: 1px solid #e4e4e4;
    }
  }
}
</style>
