<template>
    <div class="wrapper d_flex align_items_stretch">
        <side-bar/>
        <div class="main">
            <app-nav-bar/>
            <app-user-head/>
            <div class="content">
                <div class="ct_f p_0">
                    <div class="r">
                        <div class="c_md_3 pl_12px pr_12px">
                            <app-user-setting class="mb_25px"/>
                            <app-user-help/>
                        </div>
                        <div class="c_md_9 pl_12px pr_12px">
                            <app-user-form/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppNavBar from "@/components/navbar/navbar";
import SideBar from "@/components/sidebar/sidebar-left";
import AppUserHead from "@/components/user/user-head";
import AppUserSetting from "./user-edit-profile/user-setting";
import AppUserHelp from "./user-edit-profile/user-help";
import AppUserForm from "./user-edit-profile/user-form";
export default {
  components: {
    AppNavBar,
    SideBar,
    AppUserHead,
    AppUserSetting,
    AppUserHelp,
    AppUserForm
  }
};
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  min-height: 100vh;
  background-color: #e9ebee;
}
.content {
  padding: 25px 30px;
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
</style>
