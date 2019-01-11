<template>
    <div class="wrapper d_flex align_items_stretch">
        <side-bar/>
        <div class="main">
            <app-nav-bar/>
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
</template>

<script>
import AppNavBar from "@/components/navbar/navbar";
import SideBar from "@/components/sidebar/sidebar-left";
import AppUserHead from "@/components/user/user-head";
import AppUserLevel from "./user-info/user-level";
import AppUserHistory from "./user-info/user-history";
import AppUserTags from "./user-info/user-tags";
import AppUserPosts from "./user-info/user-posts";
export default {
  components: {
    AppNavBar,
    SideBar,
    AppUserHead,
    AppUserLevel,
    AppUserHistory,
    AppUserTags,
    AppUserPosts
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
