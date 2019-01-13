<template>
  <div class="page--wrapper">
    <div class="page--content d_flex">
      <div class="main">
        <app-user-head/>
        <div class="content">
          <div class="ct_f p_2">
            <div class="r">
              <div class="c_md_3 pl_2 pr_2">
                <app-user-setting class="mb_3"/>
                <app-user-help/>
              </div>
              <div class="c_md_9 pl_2 pr_2">
                <app-profile-form/>
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
import AppUserSetting from "@/components/user/user-setting";
import AppUserHelp from "@/components/user/user-help";
import AppProfileForm from "@/views/user/user-edit/user-profile-form";
export default {
  components: {
    AppUserHead,
    AppUserSetting,
    AppUserHelp,
    AppProfileForm
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
    padding: 20px 25px;
    background-color: #e9ebee;
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
