<template>
  <div class="card form">
    <div class="card_body">
      <h3 class="card_title font_weight_bold">Thiết lập thông tin thẻ tag</h3>
      <div class="form--content pt_3">
        <h4>Tag watching</h4>
        <p>You has 3 tag watching</p>
        <ul class="edit--tag m_0 p_0">
          <li>
            <a href="#">
              css
              <icon-base icon-name="close" width="16" height="16" viewBox="0 0 420 420">
                <icon-close/>
              </icon-base>
            </a>
          </li>
          <li>
            <a href="#">
              scss
              <icon-base icon-name="close" width="16" height="16" viewBox="0 0 420 420">
                <icon-close/>
              </icon-base>
            </a>
          </li>
          <li>
            <a href="#">
              sass
              <icon-base icon-name="close" width="16" height="16" viewBox="0 0 420 420">
                <icon-close/>
              </icon-base>
            </a>
          </li>
        </ul>
        <form @submit.prevent="" class="mt_4">
          <div class="form_group form_inline">
            <input type="text" class="form_control" placeholder="Find a tag by name">
            <button class="btn btn_danger">Watch tag</button>
          </div>
        </form>
        <div class="edit--note d_flex">
          <div class="edit--title justify_content_start">
            <h4>
              <icon-base icon-name="stop" width="20" height="20" viewBox="0 0 530 530">
                <icon-stop/>
              </icon-base>
              Stop sending me tag notifications
            </h4>
            <p>We want to keep in touch but only  in ways that you find helpful</p>
          </div>
          <div class="edit--button ml_auto">
            <a href="#">Unsubcribe from all</a>
          </div>
        </div>
      </div>
      <div class="form--content p_3">
        <h4>Ignored Tag</h4>
        <p>There is no Ignored tags</p>
        <form class="mt_4">
          <div class="form_group form_inline">
            <input type="text" class="form_control" placeholder="Find a tag by name">
            <button class="btn btn_danger">Watch tag</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import IconBase from "@/components/icons/IconBase";
import IconClose from "@/components/icons/IconClose";
import IconStop from "@/components/icons/IconStop";
export default {
  components: {
    IconBase,
    IconClose,
    IconStop
  }
};
</script>

<style scoped lang="scss">
h3 {
  font-size: 22px;
  font-weight: 500;
  line-height: 1.27;
  letter-spacing: 0.2px;
  color: #3b4045;
}
.form--content {
  border-top: 1px solid #e4e4e4;
  h4 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.28;
    letter-spacing: 0.2px;
    color: #3b4045;
  }
  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: 0.1px;
    color: #a8a8a8;
  }
  .edit--tag {
    list-style: none;
    li {
      display: inline-block;
      padding: 8px 10px;
      border-radius: 5px;
      text-align: center;
      background: #e1ecf4;
      margin-right: 10px;
      a {
        text-decoration: none;
        svg {
          margin-left: 5px;
          margin-bottom: -7px;
          color: #000;
        }
      }
      &:hover,
      &:active,
      &:focus {
        background: #776ab0;
        a {
          color: #fff;
        }
      }
    }
  }
  form {
    button {
      margin-left: 15px;
      background: #776ab0;
      border-color: #776ab0;
    }
  }
  .edit--note {
    h4 {
      svg {
        margin-right: 5px;
      }
    }
    .edit--button {
      a {
        text-decoration: none;
        padding: 8px 15px;
        background: transparent;
        border: 1px solid #e4e4e4;
        border-radius: 5px;
        outline: 0;
        color: #3b4045;
      }
    }
  }
}
</style>
