<template>
  <div class="page--wrapper">
    <div class="page--content d_flex">
      <div class="main">
        <app-user-head/>
        <div class="content">
          <div class="ct_f p_0">
            <div class="r">
              <div class="c_sm_12 c_md_4 pl_12px pr_12px">
                <app-user-level class="mb_25px"/>
                <app-user-history/>
              </div>
              <div class="c_sm_12 c_md_8 pl_12px pr_12px">
                <app-user-tags class="mb_25px"/>
                <app-user-posts/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppUserHead from "@/components/user/user-head";
import AppUserLevel from "./user-info/user-level";
import AppUserHistory from "./user-info/user-history";
import AppUserTags from "./user-info/user-tags";
import AppUserPosts from "./user-info/user-posts";
export default {
  components: {
    AppUserHead,
    AppUserLevel,
    AppUserHistory,
    AppUserTags,
    AppUserPosts
  }
};
</script>

<style scoped lang="scss">
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
  .content {
    padding: 25px 30px;
  }
}
.mb_25px {
  margin-bottom: 25px !important;
}
.pl_12px {
  padding-left: 12.5px !important;
}
.pr_12px {
  padding-right: 12.5px !important;
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
