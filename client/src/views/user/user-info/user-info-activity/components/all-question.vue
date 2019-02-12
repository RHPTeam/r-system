<template>
  <div class="question">
    <div class="question--head position_relative d_flex justify_content_between align_items_center pb_1 mb_3">
      <div class="question--title"><span class="question--title-number">100</span> Câu hỏi</div>
      <a class="dropdown--expand d_block d_sm_none" @click.prevent="showDropdown = !showDropdown"><icon-base icon-name="more" viewBox="0 0 20 10"><icon-more /></icon-base></a>
      <ul :class="{ show: showDropdown }" class="dropdown--collapse dropdown--list d_flex justify_content_start align_items_center pl_0 mb_0">
        <li class="position_relative active">hoạt động</li>
        <li class="position_relative">bình chọn</li>
        <li class="position_relative">mới nhất</li>
        <li class="position_relative">xem nhiều</li>
      </ul>
    </div>
    <div class="question--content">
      <div class="question--item d_flex justify_content_start align_items_start flex_column flex_md_row mb_3 pb_3">
        <div class="item--count text_center d_flex justify_content_start align_items_center mr_2 mb_2 mb_md_0">
          <div class="item--note pl_1 pr_1 mr_2 d_flex flex_column flex_sm_row flex_md_column justify_content_start align_items_center">
            <icon-base class="mr_1 mr_md_0" icon-name="tags" viewBox="0 0 60 60"><icon-tags /></icon-base>
            <span class="ml_1 ml_md_0">5</span>
          </div>
          <div class="item--vote d_flex flex_column flex_sm_row flex_md_column justify_content_start align_items_center">
            <div class="count--number mr_1 mr_md_0">25</div>
            <div class="count--type">votes</div>
          </div>
          <div class="item--answer bg_success d_flex flex_column flex_sm_row flex_md_column justify_content_start align_items_center">
            <div class="count--number mr_1 mr_md_0">25</div>
            <div class="count--type mr_1 mr_md_0">answers</div>
          </div>
          <div class="item--view d_flex flex_column flex_sm_row flex_md_column justify_content_start align_items_center">
            <div class="count--number mr_1 mr_md_0">25</div>
            <div class="count--type">views</div>
          </div>
        </div>
        <div class="item--detail">
          <div class="item--detail-title mb_2">Pandas groupby.size vs series.value_counts vs collections.Counter with multiple series</div>
            <div class="d_flex justify_content_between flex_column flex_lg_row align_items align_items_start align_items_lg_end">
              <div class="item--tag d_flex justify_content_start align_items_center flex_wrap m_n1">
                <div class="item--tag-item pt_1 pb_1 pl_2 pr_2 m_1">python</div>
                <div class="item--tag-item pt_1 pb_1 pl_2 pr_2 m_1">python</div>
                <div class="item--tag-item pt_1 pb_1 pl_2 pr_2 m_1">python</div>
              </div>
              <div class="item--started m_n1 pt_2 text_right">
              <span class="item--started-time m_1">Sep 1 at 23:51</span>
              <span class="item--started-user m_1">ancelot <span class="tem--started-moderator">♦</span></span>
              <span class="item--started-score m_1">94.9k</span>
            </div>
          </div>
        </div>
      </div>
      <div class="question--item d_flex justify_content_start align_items_start flex_column flex_md_row mb_3 pb_3">
        <div class="item--count text_center d_flex justify_content_start align_items_center mr_2 mb_2 mb_md_0">
          <div class="item--note pl_1 pr_1 mr_2 d_flex flex_column flex_sm_row flex_md_column justify_content_start align_items_center">
            <icon-base class="mr_1 mr_md_0" icon-name="tags" viewBox="0 0 60 60"><icon-tags /></icon-base>
            <span class="ml_1 ml_md_0">5</span>
          </div>
          <div class="item--vote d_flex flex_column flex_sm_row flex_md_column justify_content_start align_items_center">
            <div class="count--number mr_1 mr_md_0">25</div>
            <div class="count--type">votes</div>
          </div>
          <div class="item--answer outline d_flex flex_column flex_sm_row flex_md_column justify_content_start align_items_center">
            <div class="count--number mr_1 mr_md_0">25</div>
            <div class="count--type mr_1 mr_md_0">answers</div>
          </div>
          <div class="item--view d_flex flex_column flex_sm_row flex_md_column justify_content_start align_items_center">
            <div class="count--number mr_1 mr_md_0">25</div>
            <div class="count--type">views</div>
          </div>
        </div>
        <div class="item--detail">
          <div class="item--detail-title mb_2">Pandas groupby.size vs series.value_counts vs collections.Counter with multiple series</div>
            <div class="d_flex justify_content_between flex_column flex_lg_row align_items_start align_items_lg_end">
              <div class="item--tag d_flex justify_content_start align_items_center flex_wrap m_n1">
                <div class="item--tag-item pt_1 pb_1 pl_2 pr_2 m_1">python</div>
                <div class="item--tag-item pt_1 pb_1 pl_2 pr_2 m_1">python</div>
                <div class="item--tag-item pt_1 pb_1 pl_2 pr_2 m_1">python</div>
              </div>
              <div class="item--started m_n1 pt_2 text_right">
              <span class="item--started-time m_1">Sep 1 at 23:51</span>
              <span class="item--started-user m_1">ancelot <span class="tem--started-moderator">♦</span></span>
              <span class="item--started-score m_1">94.9k</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="text_right">
      <app-pagination/>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconMore from "@/components/icons/IconMore";
import IconTags from "@/components/icons/IconTags";
import AppPagination from "./pagination";
export default {
  data() {
    return {
      showDropdown: false
    };
  },
  components: {
    IconBase,
    IconMore,
    IconTags,
    AppPagination
  }
};
</script>

<style scoped lang="scss">
@import "./tab";
.question--head {
  border-bottom: 1px solid #e9ebee;
  .question--title {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.24;
    letter-spacing: 0.2px;
    color: #0077dd;
    .question--title-number {
      color: #9199a1;
    }
  }
}
.question--null {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.23;
  letter-spacing: 0.1px;
  span {
    cursor: pointer;
    border-bottom: 1px solid #0077dd;
    color: #0077dd;
  }
}
.question--item {
  border-bottom: 1px solid #e9ebee;
  &:last-child {
    margin-bottom: 0;
  }
  .item--count {
    font-weight: 500;
    .count--number {
      font-size: 17px;
    }
    .count--type {
      font-size: 11px;
    }
  }
  .item--note {
    color: #848d95;
    font-size: 17px;
    min-width: 44px;
    font-weight: 600;
    svg {
      color: #7460ee;
      margin-bottom: -2px;
    }
  }
  .item--vote,
  .item--answer,
  .item--view {
    min-width: 44px;
    margin: 0 3px 0 0;
    padding: 6px;
    color: #848d95;
  }
  .item--answer {
    border: 1px solid;
    border-color: #28a745;
    border-radius: 3px;
    color: #fff;
    &.outline {
      background-color: #fff;
      color: #28a745;
    }
  }
}
.item--detail {
  width: 100%;
  .item--detail-title {
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.27;
    letter-spacing: 0.2px;
    color: #0077dd;
    transition: all 0.5s ease;
    &:hover {
      color: #7460ee;
    }
  }
  .item--tag {
    .item--tag-item {
      border-radius: 5px;
      background-color: #e1ecf4;
      font-size: 11px;
      line-height: 1.36;
      letter-spacing: -0.1px;
      color: #39739d;
      font-weight: 500;
    }
  }
}
.item--started {
  font-size: 12px;
  color: #848d95;
  font-weight: 500;
  white-space: nowrap;
}
// Large devices (desktops, 992px and up)
@media (max-width: 992px) {
  .item--started {
    width: 100%;
  }
}
</style>
