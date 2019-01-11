<template>
    <div class="head">
        <div class="wallpaper position_relative">
            <div class="wallpaper--info d_flex justify_content_start align_items_center position_absolute">
                <div class="wallpaper--avatar position_relative">
                    <img src="http://www.igeacps.it/app/uploads/2018/05/profile_uni_user.png" class="position_absolute">
                </div>
                <div class="user--info">
                    <div class="user--info-name">Sky Albert</div>
                    <div class="user--info-alias">(Trần Quốc Toản)</div>
                </div>
            </div>            
        </div>
        <div class="navbar">
          <ul class="navbar--list d_flex justify_content_start align_items_center">
            <li class="navbar--list-item">Hoạt động</li>
            <li class="navbar--list-item">Thông tin</li>
            <li class="navbar--list-item">Câu chuyện lập trình</li>
            <li class="navbar--list-item">Bài viết</li>
            <li class="navbar--list-item">Tuyển dụng</li>
            <li class="navbar--list-item">Chỉnh sửa thông tin</li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.wallpaper {
  height: 250px;
  background-image: url(https://images.template.net/wp-content/uploads/2014/11/Natural-Facebook-Cover-Photo.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  .wallpaper--avatar {
    width: 168px;
    height: 168px;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.16);
    border: 5px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 7px;
    &:before {
      content: "";
      display: block;
      padding-top: 100%;
    }
    img {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: auto;
    }
  }
  .wallpaper--info {
    left: 64px;
    bottom: -25px;
    width: 100%;
  }
  .user--info {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.3px;
    color: #ffffff;
    margin-left: 30px;
    .user--info-name {
      font-size: 24px;
      line-height: 1.21;
    }
  }
}
.navbar {
  background-color: #ffffff;
  padding-left: 250px;
  border-bottom: 1px solid #e4e4e4;
  .navbar--list {
    list-style-type: none;
    margin-bottom: 0;
    .navbar--list-item {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.2px;
      color: #0077dd;
      padding: 10px 20px;
      border-left: 1px solid #e4e4e4;
      &:last-child {
        border-right: 1px solid #e4e4e4;
      }
    }
  }
}
</style>
