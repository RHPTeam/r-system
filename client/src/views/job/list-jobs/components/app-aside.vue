<template>
  <div class="main--aside">
    <!--Job of Company-->
    <div class="feature--company-jobs mb_4">
      <header>
        <h3 class="text_center mb_3 p_2">Job for Developer</h3>
        <div class="company--detail">
          <div class="company--images">
          </div>
          <div class="company-logo text_center align_items_center position_relative">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtjprGwxPE5FVcY72h1MWxvVVSiW7RFHmJ6DZ9G1lf0YOr-vV" width="100" height="100" alt="">
          </div>
          <div class="company--info text_center">
            <h3>RHP Team</h3>
            <p>
              <icon-base  icon-name="location" viewBox="0 0 960 960"><icon-location/></icon-base>
              <span>Ha Noi</span>
            </p>
          </div>
        </div>
      </header>
      <section class="text_center your--skill">
        <strong><span>SKILLS WE'RE LOOKING FOR</span></strong>
        <ul class="skill-detail justify_content_center m_0 p_0">
          <li><a href="#">javascript</a></li>
          <li><a href="#">javascript</a></li>
          <li><a href="#">javascript</a></li>
          <li><a href="#">javascript</a></li>
          <li><a href="#">javascript</a></li>
          <li><a href="#">javascript</a></li>
        </ul>
      </section>
      <footer class="text_center mt-2">
        <a href="#" class="btn-outline">Detail</a>
      </footer>
    </div>
    <!--More Job-->
    <app-more/>
  </div>
</template>
<script>
import IconBase from "@/components/icons/IconBase";
import IconLocation from "@/components/icons/IconLocation";
import AppMore from "./app-more";
export default {
  components: {
    IconBase,
    IconLocation,
    AppMore
  }
};
</script>

<style lang="scss" scoped>
.main--aside {
  background: #fafafa;
  .company--detail {
  }
  .company--images {
    width: 100%;
    height: 120px;
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4CzJttbVX_SWF7WfzTwxfGKzTim0TR_t9ESkUbCIMtIZRBB3t);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: blur(5px);
  }
  .company-logo {
    z-index: +9;
    width: 100px;
    height: 100px;
    padding: 3px;
    margin-bottom: 5px;
    background: #fafafb;
    box-shadow: inset 0 0 0 3px #fff, 0 0 0 1px rgba(0, 0, 0, 0.2);
    margin: -25px auto 0 auto;
    transition: box-shadow 0.25s ease-in-out, transform 0.25s ease-in-out;
  }
  .company--info {
    padding: 15px 10px 20px 10px;
    h3 {
    }
    p {
    }
  }
  .your--skill {
    padding: 0 10px 15px 10px;
  }
  strong {
    font-weight: normal;
    text-transform: uppercase;
    color: #bbc0c4;
    font-size: 10px;
    position: relative;
    display: block;
    margin-bottom: 15px;
    &::before {
      content: "";
      border-top: 1px solid #e4e6e8;
      position: absolute;
      left: 0;
      top: 50%;
      right: 0;
    }
    span {
      background: #fafafa;
      display: inline-block;
      padding: 0 10px;
      position: relative;
      z-index: 2;
    }
  }
  .skill-detail {
    width: 100%;
    height: auto;
    list-style: none;
    li {
      display: inline-block;
      width: calc(100% / 4);
      padding: 8px 10px;
      text-align: center;
      border-radius: 28px;
      background: #e1ecf4;
      margin: 0 10px 10px;
      a {
        text-decoration: none;
        color: #96bdd9;
      }
    }
  }
  footer {
    .btn-outline {
      border: 1px solid #e4e4e4;
      padding: 8px 15px;
      border-radius: 5px;
      color: #776ab0;
      text-decoration: none;
      outline: 0;
    }
  }
}
</style>
