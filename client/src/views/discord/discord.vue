<template>
  <div class="">
    <!--Top bar Page Discord-->
    <div class="topbar d_flex align_items_center text_center">
      <div class="ct_f">
        Nếu bạn đang gặp khó khăn khi lập trình và cần hỏi đáp
        <a href="#" class="btn btn--white">Tham gia đặt câu hỏi</a>
      </div>
    </div>
    <!--End Top Bar Page Discord-->
    <!--Header Page Discord-->
    <header>
      <div class="ct">
        <div class="r align_items_center">
          <div class="c_auto ">
            <a href="/" class="logo-rhp"> <img src="../../assets/logo.svg"/></a>
          </div>
          <div class="c_auto ml_auto">
            <a href="" class="btn btn--right btn--blue">Cổng thông tin R</a>
          </div>
        </div>
      </div>
    </header>
    <!--End Header Page Discord-->

    <!--Post Header-->
    <div class="post--header-bg">
      <div class="ct">
        <div class="post--title text_center">
          Tham gia discord của team: Cách để bạn tăng kỹ năng thực chiến một cách nhanh chóng
        </div>
      </div>
    </div>
    <!--End Post Header-->
    <!--Section Info-->
    <div class="ct">
      <div class="section-discord-info">
        <div class="discord--item">
          <div class="r align_items_center">
            <div class="c_md_6 discord--text">
              <p>Nhóm discord của RHP Team là gì? Maecenas iaculis imperdiet nulla. Sed fringilla diam et dolor interdum
                vestibulum. Donec quam magna, ornare nec velit ac, tincidunt pharetra ante. Proin sit amet condimentum
                quam. In nibh erat, ultrices non lacinia id, pharetra sed lorem. Donec vestibulum id mauris non blandit.
                Sed interdum magna nisi, ornare tincidunt metus lacinia eu.</p>
            </div>
            <div class="c_md_6 discord--img">
              <img src="../../assets/discord-img.png" alt="">
            </div>
          </div>
        </div>
        <div class="discord--item">
          <div class="r align_items_center">
            <div class="c_md_6 discord--img">
              <img src="../../assets/discord-img.png" alt="">
            </div>
            <div class="c_md_6 discord--text">
              <p>Nhóm discord của RHP Team là gì? Maecenas iaculis imperdiet nulla. Sed fringilla diam et dolor interdum
                vestibulum. Donec quam magna, ornare nec velit ac, tincidunt pharetra ante. Proin sit amet condimentum
                quam. In nibh erat, ultrices non lacinia id, pharetra sed lorem. Donec vestibulum id mauris non blandit.
                Sed interdum magna nisi, ornare tincidunt metus lacinia eu.</p>
            </div>
          </div>
        </div>
        <div class="discord--link text_center m_auto">
          <a href="/" class="btn btn-default">Tham gia discord</a>
        </div>
      </div>
    </div>
    <!--End Section Info-->
  </div>
</template>
<script>
  export default {
    components: {},
    data: {}
  };
</script>

<style lang="scss" scoped>
  /*global*/
  .btn {
    font-size: 14px;
    line-height: 1.2;
  }

  .btn--white {
    background: #fff;
  }

  .btn--blue {
    background-color: #00aefd;
  }

  /*Topbar*/
  .topbar {
    height: 42px;
    background-color: #776ab0;
    color: white;

    .btn--white {
      border-radius: 3px;
      padding: 7px 12px;
      background-color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.2;
      color: #776ab0;
      margin: 0 15px;
    }
  }

  /*Header*/
  header {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    padding: 29px 0;

    .logo_left {
      img {
        width: 260px;
        height: 50px;
      }
    }

    .btn--right {
      border-radius: 100px;
      padding: 10px 23px;
      color: #fff;
    }
  }

  /*Post Header*/
  .post--header-bg {
    background-image: linear-gradient(to bottom, #776ab0, #42aac5);
    padding: 50px 0 85px;

    .post--title {
      font-size: 40px;
      color: #fff;
      line-height: 1.2;
      padding: 0 128px;
    }
  }

  .section-discord-info {
    margin-top: -50px;
    background: #fff;
    padding: 50px 120px;
    box-shadow: 0px 0px 5px 0 rgba(0, 0, 0, 0.16);

    .discord--img {
      text-align: center;

      img {
        margin: 0 auto;
        display: block;
      }
    }

    .discord--text {
      font-size: 14px;
    }

    .discord--link {
      margin: 30px 0;

      .btn-default {
        color: #fff;
        background-color: #776ab0;
        border-radius: 0;
        padding: 10px 30px;
      }
    }
  }
</style>
