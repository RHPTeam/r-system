<template>
  <div class="tag">
    <div class="tag--head position_relative d_flex justify_content_between align_items_center pb_1 mb_3">
      <div class="tag--title"><span class="tag--title-number">51,30</span> Thẻ</div>
      <a class="dropdown--expand d_block d_sm_none" @click.prevent="showDropdown = !showDropdown"><icon-base icon-name="more" viewBox="0 0 20 10"><icon-more /></icon-base></a>
      <ul :class="{ show: showDropdown }" class="dropdown--collapse dropdown--list d_flex justify_content_start align_items_center pl_0 mb_0">
        <li class="position_relative active">bình chọn</li>
        <li class="position_relative">tên</li>
      </ul>
    </div>
    <div class="tag--content ct_f p_0">
      <div class="r">
        <div class="tag--item c_12 c_sm_6 c_md_6 c_xl_4 mb_3">
          <span class="tag--item-score">59k</span>
          <span class="tag--item-name ml_1 mr_1">sql</span>
          <span class="tag--item-posts">x 43103</span>
        </div>
        <div class="tag--item c_12 c_sm_6 c_md_6 c_xl_4 mb_3">
          <span class="tag--item-score">59k</span>
          <span class="tag--item-name ml_1 mr_1">sql</span>
          <span class="tag--item-posts">x 43103</span>
        </div>
        <div class="tag--item c_12 c_sm_6 c_md_6 c_xl_4 mb_3">
          <span class="tag--item-score">59k</span>
          <span class="tag--item-name ml_1 mr_1">sql</span>
          <span class="tag--item-posts">x 43103</span>
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
.tag--head {
  border-bottom: 1px solid #e9ebee;
  .tag--title {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.24;
    letter-spacing: 0.2px;
    color: #0077dd;
    .tag--title-number {
      color: #9199a1;
    }
  }
}
.tag--content {
  .tag--item {
    letter-spacing: 0.1px;
    font-weight: 600;
    .tag--item-score {
      font-size: 13px;
    }
    .tag--item-name {
      font-size: 12px;
      border-radius: 3px;
      background-color: #e1ecf4;
      color: #39739d;
      padding: 4.5px 6px;
    }
    .tag--item-posts {
      font-size: 11px;
      color: #a8a8a8;
    }
  }
}
</style>
