<template>
    <div class="card setting mb_0">
        <div class="card_body">
            <h5 class="card_title font_weight_bold">CÀI ĐẶT NGƯỜI DÙNG</h5>
            <ul class="setting--content mb_0 pl_0">
                <router-link class="d_block setting--content-item active" :to="{ name: 'user-profile-edit' }">
                  Thông tin người dùng
                </router-link>
                <router-link class="d_block setting--content-item" :to="{ name: '' }">
                  Câu chuyện công việc
                </router-link>
                <router-link class="d_block setting--content-item" :to="{ name: 'user-job-edit' }">
                  Thông tin công việc
                </router-link>
                <router-link class="d_block setting--content-item" :to="{ name: '' }">
                  Thiết lập thẻ tag
                </router-link>
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
  height: 100%;
  .card_title {
    font-size: 16px;
  }
  .setting--content {
    list-style-type: none;
    border-top: 1px solid #e9ebee;
    .setting--content-item {
      font-size: 14px;
      font-weight: 500;
      line-height: 1.29;
      letter-spacing: 0.2px;
      color: #9199a1;
      margin: 10px 0;
      text-decoration: none;
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
