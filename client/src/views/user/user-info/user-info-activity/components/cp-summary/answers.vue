<template>
  <div class="answer">
    <div class="answer--head d_flex justify_content_between align_items_center pb_1 mb_3">
      <div class="answer--title">Trả lời <span class="answer--title-number">(51,302)</span></div>
      <ul class="answer--filter-list d_flex justify_content_start align_items_center pl_0 mb_0">
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
export default {};
</script>

<style scoped lang="scss">
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
  .answer--filter-list {
    list-style-type: none;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.23;
    letter-spacing: 0.1px;
    color: #9199a1;
    li {
      margin: 0 5px;
      padding-left: 2.5px;
      padding-right: 2.5px;
      transition: all 0.5s ease;
      cursor: pointer;
      &:after {
        content: "";
        position: absolute;
        bottom: -7px;
        left: 0;
        width: 0;
        background-color: #776ab0;
        height: 1px;
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
.answer--item {
  font-weight: 600;
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
