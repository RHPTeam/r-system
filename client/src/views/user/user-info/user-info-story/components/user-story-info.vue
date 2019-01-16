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
      <p class="user--links mt_2">
        <span class="user--address">
          <icon-base icon-name="address" viewBox="0 0 960 960"
          ><icon-location
          /></icon-base>
          Địa chỉ
        </span>
        <span class="user--website ml_2">
          <icon-base icon-name="website" viewBox="0 0 60 60"
          ><icon-link
          /></icon-base>
          Trang web
        </span>
        <span class="user--twitter ml_2">
          <icon-base icon-name="twitter" viewBox="0 0 620 620"
          ><icon-twitter
          /></icon-base>
          Twitter</span>
        <span class="user--github ml_2">
          <icon-base icon-name="github" viewBox="0 0 520 520"
          ><icon-github
          /></icon-base>
          Github
        </span>
      </p>
    </div>
  </div>
</template>
<script>
  import IconBase from "@/components/icons/IconBase"
  import IconLocation from "@/components/icons/IconLocation"
  import IconLink from "@/components/icons/IconLink"
  import IconTwitter from "@/components/icons/IconTwitter"
  import IconGithub from "@/components/icons/IconGithub"

export default {
  components: {
    IconBase,
    IconLocation,
    IconTwitter,
    IconLink,
    IconGithub,

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
