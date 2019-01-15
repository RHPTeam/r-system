<template>
  <div class="card">
    <div class=" card_body user--story-setting">
      <p>Tùy chọn</p>
      <p class="story-item story--setting-job text_center"><a href="#">Thiết lập nghề nghiệp</a></p>
      <p class="story-item story--setting-thumb text_center"><a href="#">Lưu lại thành PDF</a></p>
      <div class="story-item d_flex story--setting-status">
        <p class="story--public w_50 align_items_center">
          Công khai
        </p>
        <p class="story-item"><a class="story--rules ml_auto">Điều khoản</a></p>
      </div>
      <p>Chia sẻ câu chuyện của bạn?</p>
      <p class="story-item story--setting-public text_center">
        <a href="#">Tạo link công khai</a>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.user--story-setting {
  p.story-item {
    padding: 8px;
    background: #e1ecf4;
    border-radius: 3px;
    a{
      color: #39739d;
      text-decoration: none;
    }
    }
}
  .w_50 {
    width: 50%;
  }
</style>
