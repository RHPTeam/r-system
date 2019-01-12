<template>
    <div class="card setting">
        <div class="card_body">
            <h5 class="card_title font_weight_bold">CÀI ĐẶT NGƯỜI DÙNG</h5>
            <ul class="setting--content mb_0 pl_0">
                <li class="active">Thông tin người dùng</li>
                <li>Câu chuyện công việc</li>
                <li>Thông tin công việc</li>
                <li>Thiết lập thẻ tag</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.setting {
  margin-bottom: 15px;
  .card_title {
    font-size: 16px;
  }
  .setting--content {
    list-style-type: none;
    border-top: 1px solid #e9ebee;
    li {
      font-size: 14px;
      font-weight: 500;
      line-height: 1.29;
      letter-spacing: 0.2px;
      color: #9199a1;
      margin: 10px 0;
      cursor: pointer;
      transition: all 0.5s ease;
      &:hover,
      &.active {
        color: #776ab0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
