<template>
  <div class="pl_md_2 pr_md_2 d_flex flex_column justify_content_center">
    <div class="user--info-thumb text_center">
      <div class="user--avatar">
      <img src="http://thuthuat123.com/uploads/2018/01/27/anh-dai-dien-dep-nhat-39_093007.jpg" class="img_thumbnail" width="160" height="160" alt="user-avatar">
      </div>
      <h3 class="p_2">Toản cực gắt</h3>
    </div>
    <div class="user--slogan text_center">
      <p class="slogan m_0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, architecto.</p>
      <p>
        <span class="user--address">
          <!--chen svg-->
          Địa chỉ
        </span>
        <span class="user--website">Trang web</span>
        <span class="user--twitter">Twitter</span>
        <span class="user--github">Github</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  components: {

  }
}
</script>

<style lang="scss" scoped>
.img_thumbnail {
  padding: .25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: .25rem;
}
.user--info-thumb {
  .user--avatar {

  }
  h3 {
    font-size: 24px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.21;
    letter-spacing: normal;
    color: #3b4045;
  }
}
.user--slogan {
  .slogan {
   font-size: 19px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.26;
    letter-spacing: normal;
    color: #6a737c;
  }
}
</style>
