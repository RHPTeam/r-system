<template>
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
</template>
<script>
import AppUserReputation from "./components/reputation";
import AppUserStatisticTag from "./components/statistic-tag";
import AppUserLevel from "./components/level";
import AppUserSummary from "./components/sumary";

export default {
  components: {
    AppUserReputation,
    AppUserStatisticTag,
    AppUserLevel,
    AppUserSummary
  }
};
</script>

<style lang="scss" scoped>
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
</style>
