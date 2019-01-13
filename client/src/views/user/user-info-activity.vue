<template>
  <div class="page--wrapper">
    <div class="page--content d_flex">
      <div class="main">
        <app-user-head/>
        <div class="content">
          <div class="ct_f pb_0 pl_2 pr_2 pt_2">
            <div class="r">
              <div class="c_12 c_sm_12 c_md_6 c_xl_6 pl_2 pr_2 mb_3">
                <app-user-reputation/>
              </div>
              <div class="c_12 c_sm_12 c_md_6 c_xl_6 pl_2 pr_2 mb_3">
                <app-user-statistic-tag/>
              </div>
              <div class="c_12 c_sm_12 c_md_12 c_xl_12 pl_2 pr_2">
                <app-user-level/>
              </div>
            </div>
          </div>
          <div class="card mt_3">
            <div class="card_body">
              <div class="main--filter">
                <ul class="main--filter-list d_flex justify_content_start align_items_center pl_0 pb_2">
                  <li class="position_relative active">Tổng hợp</li>
                  <li class="position_relative">Câu hỏi</li>
                  <li class="position_relative">Trả lời</li>
                  <li class="position_relative">Thẻ</li>
                  <li class="position_relative">Vinh danh</li>
                  <li class="position_relative">Tất cả hành động</li>
                </ul>
              </div>
              <app-user-summary/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppUserHead from "@/components/user/user-head";
import AppUserReputation from "@/views/user/user-info/user-activity-reputation";
import AppUserStatisticTag from "@/views/user/user-info/user-activity-statistic-tag";
import AppUserLevel from "@/views/user/user-info/user-activity-level";
import AppUserSummary from "@/views/user/user-info/user-activity-sumary";

export default {
  components: {
    AppUserHead,
    AppUserReputation,
    AppUserStatisticTag,
    AppUserLevel,
    AppUserSummary
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
    padding: 15px 20px;
    background-color: #e9ebee;
  }
}
.main--filter {
  .main--filter-list {
    list-style-type: none;
    border-bottom: 1px solid #e9ebee;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.23;
    letter-spacing: 0.1px;
    color: #9199a1;
    li {
      margin-right: 5px;
      padding: 0 5px;
      transition: all 0.5s ease;
      cursor: pointer;
      &:after {
        content: "";
        position: absolute;
        bottom: -9px;
        left: 0;
        width: 0;
        background-color: #776ab0;
        height: 2px;
        transition: all 0.4s ease;
      }
      &.active,
      &:hover {
        color: #3b4045;
        &:after {
          width: 100%;
        }
      }
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
      .content {
        padding: 10px 15px 15px 15px;
        background-color: #e9ebee;
      }
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
