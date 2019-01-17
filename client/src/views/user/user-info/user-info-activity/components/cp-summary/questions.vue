<template>
  <div class="question">
    <div class="question--head position_relative d_flex justify_content_between align_items_center pb_1 mb_3">
      <div class="question--title">Câu hỏi <span class="question--title-number">(0)</span></div>
      <a class="dropdown--expand d_block d_sm_none" @click.prevent="showDropdown = !showDropdown"><icon-base icon-name="more" viewBox="0 0 20 10"><icon-more /></icon-base></a>
      <ul :class="{ show: !showDropdown }" class="dropdown--collapse dropdown--list d_flex justify_content_start align_items_center pl_0 mb_0">
        <li class="position_relative active">hoạt động</li>
        <li class="position_relative">bình chọn</li>
        <li class="position_relative">mới nhất</li>
      </ul>
    </div>
    <div class="question--content">
      <div class="question--null">Người dùng chưa hỏi <span>câu hỏi</span> nào trên hệ thống</div>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconMore from "@/components/icons/IconMore";
export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
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
@import "tab";
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
</style>
