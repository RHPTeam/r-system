<template>
  <div class="page--wrapper">
    <div class="page--content d_flex">
      <div class="r">
        <div class="c_md_8 c_12 main">
          <app-info />
          <app-content />
          <app-paginate />
        </div>
        <div class="c_md_4 c_12">
          <app-aside />
        </div>
      </div>
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
.info--tag {
  margin: 8px 0;
  .tag--item {
    padding: 6px 9px;
    border: 1px solid #a8a8a8;
    color: #a8a8a8;
    border-radius: 28px;
    margin-right: 5px;
    text-decoration: none;
    &:hover,&:focus {
      border-color: #776ab0;
      color: #776ab0;
    }
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
