<template>
    <div class="wraper">
        <app-side-bar/>
        <div class="main">
            <app-nav-bar/>
            <div class="main--content">
                <div class="content--wrapper">
                    <div class="container_fluid">
                        <div class="content--head">
                            <h3>Questions</h3>
                                <div class="head--under">
                                    <label>top</label>
                                </div> 
                        </div>
                        <question-remind-content/>
                    </div>
                </div>
                <app-aside/>
            </div>
        </div>
    </div>
</template>

<script>
import AppSideBar from "@/components/sidebar/sidebar-left";
import AppNavBar from "@/components/navbar/navbar";
import AppInfo from "@/views/user/user-list/info";
import AppAside from "@/views/user/user-list/aside";
import QuestionRemindContent from "./question-remind/content";

export default {
  components: {
    AppSideBar,
    AppNavBar,
    AppInfo,
    AppAside,
    QuestionRemindContent,
  }
};
</script>

<style scoped>
.wrapper {
    font-family: 'Quicksand', sans-serif;
}

.main {
  width: 1623px;
  height: 1079px;
  margin-left: 297px;
}

.main--content {
    width: 1623px;
    display: flex;
}

.content--wrapper {
    width: 1113px;
    height: 973px;
    border-right: 1px solid #e4e4e4;
}

.content--head {
  width: 100%;
  height: 235px;
  position: relative;
  border-bottom: 1px solid #e4e4e4;
}

 .content--head h3 {
    color: #999999;
    font-size: 26px;
    line-height: 190px;
    padding-left: 75px;
}

.content--head .head--under {
    position: absolute;
    top: 0;
    left: 75px;
    z-index: -15;
    width: 182px;
    height: 159px;
}

.content--head .head--under label {
      font-size: 120px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.33;
      letter-spacing: -2.2px;
      text-align: left;
      color: #f5f5f5;
}
</style>
