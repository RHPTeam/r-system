<template>
  <div class="question">
    <div class="question--head d_flex justify_content_between align_items_center pb_1 mb_3">
      <div class="question--title">Câu hỏi <span class="question--title-number">(0)</span></div>
      <ul class="question--filter-list d_flex justify_content_start align_items_center pl_0 mb_0">
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
export default {};
</script>

<style scoped lang="scss">
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
  .question--filter-list {
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
