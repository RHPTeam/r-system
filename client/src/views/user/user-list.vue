<template>
  <div class="page--wrapper">
    <div class="page--content d_flex">
      <div class="main">
        <app-info />
        <app-content />
        <app-paginate />
      </div>
      <app-aside />
    </div>
  </div>
</template>

<script>
import AppInfo from "./user-list/info";
import AppAside from "./user-list/aside";
import AppContent from "./user-list/content";
import AppPaginate from "./user-list/paginate";
export default {
  components: {
    AppInfo,
    AppAside,
    AppContent,
    AppPaginate
  }
};
</script>

<style lang="scss">
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
@media (min-width: 576px) {
}

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
@media (min-width: 992px) {
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .page--wrapper {
    margin-left: 250px;
  }
}
</style>
