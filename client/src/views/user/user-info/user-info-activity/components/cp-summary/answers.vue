<template>
  <div class="answer">
    <div class="answer--head position_relative d_flex justify_content_between align_items_center pb_1 mb_3">
      <div class="answer--title">Trả lời <span class="answer--title-number">(51,302)</span></div>
      <a class="dropdown--expand d_block d_sm_none" @click.prevent="showDropdown = !showDropdown"><icon-base icon-name="more" viewBox="0 0 20 10"><icon-more /></icon-base></a>
      <ul :class="{ show: showDropdown }" class="dropdown--collapse dropdown--list d_flex justify_content_start align_items_center pl_0 mb_0">
        <li class="position_relative active">hoạt động</li>
        <li class="position_relative">bình chọn</li>
        <li class="position_relative">mới nhất</li>
      </ul>
    </div>
    <div class="answer--content">
        <div class="answer--item d_flex justify_content_start align_items_center mb_2">
          <div class="answer--item-count mr_2 outline">80</div>
          <div class="answer--item-title mr_2">Count unique values with pandas per groups</div>
        </div>
        <div class="answer--item d_flex justify_content_start align_items_center mb_2">
          <div class="answer--item-count mr_2 bg_success">80</div>
          <div class="answer--item-title mr_2">Count unique values with pandas per groups</div>
        </div>
    </div>
    <div class="answer--more mt_4">
      <span>Xem thêm &#8594;</span>
    </div>

  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconMore from "@/components/icons/IconMore";
export default {
  data() {
    return {
      showDropdown: false
    };
  },
  components: {
    IconBase,
    IconMore
  }
};
</script>

<style scoped lang="scss">
@import "../tab";
.answer--head {
  border-bottom: 1px solid #e9ebee;
  .answer--title {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.24;
    letter-spacing: 0.2px;
    color: #0077dd;
    .answer--title-number {
      color: #9199a1;
    }
  }
}
.answer--item {
  font-weight: 500;
  .answer--item-count {
    border-radius: 3px;
    height: 24px;
    min-width: 36px;
    text-align: center;
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
    line-height: 24px;
    border: 1px solid transparent;
    &.outline {
      border-color: #28a745;
      color: #28a745;
    }
  }
  .answer--item-title {
    font-size: 15px;
    line-height: 1.6;
    letter-spacing: 0.2px;
    color: #0077dd;
  }
}
.answer--more {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.23;
  letter-spacing: 0.1px;
  color: #0077dd;
  cursor: pointer;
}
</style>
