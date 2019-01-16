<template>
  <div class="actions">
    <div class="actions--head position_relative d_flex justify_content_between align_items_center pb_1 mb_3">
      <div class="actions--title"><span class="actions--title-number">51,30</span> Vinh danh</div>
      <a class="dropdown--expand d_block d_sm_none" @click.prevent="showDropdown = !showDropdown"><icon-base icon-name="more" viewBox="0 0 20 10"><icon-more /></icon-base></a>
      <ul :class="{ show: showDropdown }" class="dropdown--collapse dropdown--list d_flex justify_content_start align_items_center pl_0 mb_0">
       <li class="position_relative active">tất cả</li>
        <li class="position_relative">bình luận</li>
        <li class="position_relative">trả lời</li>
        <li class="position_relative">xem lại</li>
      </ul>
    </div>
    <div class="actions--content">
      <div class="item item--comment d_flex flex_column flex_md_row justify_content_start align_items_start pt_2 pb_2">
        <div class="d_flex justify_content_start align_items_center mr_3">
          <div class="item--time text_nowrap">12h ago</div>
          <div class="item--type text_nowrap">bình luận</div>
        </div>
        <div class="item--content mt_1 mt_md_0">
          <div class="item--content-title">Pandas resample: add columns of group_id </div>
          <div class="item--content-comment">@user189035 - yes, it is best solution for your problem.</div>
        </div>
      </div>
      <div class="item item--answer d_flex flex_column flex_md_row justify_content_start align_items_start pt_2 pb_2">
        <div class="d_flex justify_content_start align_items_center mr_3">
          <div class="item--time text_nowrap">12h ago</div>
          <div class="item--type text_nowrap">trả lời</div>
        </div>
        <div class="item--content mt_1 mt_md_0">
          <div class="item--content-title">Pandas resample: add columns of group_id </div>
        </div>
      </div>
      <div class="item item--review d_flex flex_column flex_md_row justify_content_start align_items_start pt_2 pb_2">
        <div class="d_flex justify_content_start align_items_center mr_3">
          <div class="item--time text_nowrap">Dec 20</div>
          <div class="item--type text_nowrap">xem lại</div>
        </div>
        <div class="item--content mt_1 mt_md_0">
          <div class="item--content-title"><span class="item--review-type mr_1">Edit</span>Pandas resample: add columns of group_id </div>
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
    AppPagination
  }
};
</script>

<style scoped lang="scss">
@import "tab";
.actions--head {
  border-bottom: 1px solid #e9ebee;
  .actions--title {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.24;
    letter-spacing: 0.2px;
    color: #0077dd;
    .actions--title-number {
      color: #9199a1;
    }
  }
}
.item {
  font-size: 13px;
  font-weight: 500;
  border-bottom: 1px solid #e9ebee;
  &:last-child {
    border-bottom: 0;
  }
  .item--time {
    color: #a8a8a8;
    font-weight: 600;
    width: 65px;
  }
  .item--type {
    width: 65px;
    font-weight: 600;
  }
  .item--content {
    width: 100%;
    .item--content-title {
      font-size: 15px;
      line-height: 1.24;
      letter-spacing: 0.2px;
      color: #0077dd;
      cursor: pointer;
    }
  }
  &.item--comment {
    .item--type {
      color: #150a5c;
    }
    .item--content-comment {
      font-size: 13px;
    }
  }
  &.item--answer {
    .item--type {
      color: #396039;
    }
  }
  &.item--review {
    .item--content-title {
      .item--review-type {
        background-color: #eff0f1;
        font-weight: 600;
        padding: 2px 4px;
        color: #005999;
      }
    }
  }
}
</style>
