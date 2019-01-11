<template>
    <div class="wrapper d_flex align_items_stretch">
        <side-bar/>
        <div class="main">
            <app-nav-bar/>
            <app-user-head/>
            <div class="content">
                <div class="ct_f">
                    <div class="r">
                        <div class="c_md_3">
                            <app-user-setting/>
                            <app-user-help/>
                        </div>
                        <div class="c_md_9">
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
  padding: 30px 15px;
}
</style>
