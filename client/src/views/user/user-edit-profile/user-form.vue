<template>
    <div class="card form">
       <div class="card_body">
            <h5 class="card_title font_weight_bold">Chỉnh sửa thông tin người dùng</h5>
            <div class="form--content">
                <form @submit.prevent="submit">
                    <div class="form_group">
                        <label for="username">Tên hiển thị</label>
                        <input type="text" class="form_control" id="username" value="htchinh" placeholder="Nhập tên">
                    </div>
                    <div class="form_group">
                        <label for="address">Địa chỉ</label>
                        <input type="text" class="form_control" id="address" placeholder="Nhập địa chỉ">
                    </div>
                    <div class="form_group">
                        <label for="slogan">Câu nói yêu thích của bạn là gì?</label>
                        <input type="text" class="form_control" id="slogan" placeholder="Nhập câu nói yêu thích của bạn">
                    </div>
                    <div class="form_group">
                        <label for="about">Giới thiệu</label>
                        <textarea class="form_control" id="about"></textarea>
                    </div>
                    <div class="live--preview position_relative mb_3">
                        <span class="live--preview-tag position_absolute">live preview</span>
                        <div class="live--preview-content"></div>
                    </div>
                    <div class="form_group form--social">
                        <label>Mạng xã hội</label>
                        <div class="form_row">
                            <div class="c position_relative">
                                <icon-base class="position_absolute form--social-icon" icon-name="link" viewBox="0 0 58 58"><icon-link /></icon-base>
                                <input type="text" class="form_control" placeholder="">
                            </div>
                            <div class="c position_relative">
                                <icon-base class="position_absolute form--social-icon" icon-name="twitter" viewBox="0 0 600 600"><icon-twitter /></icon-base>
                                <input type="text" class="form_control" placeholder="">
                            </div>
                            <div class="c position_relative">
                                <icon-base class="position_absolute form--social-icon" icon-name="github" viewBox="0 0 470 470"><icon-github /></icon-base>
                                <input type="text" class="form_control" placeholder="">
                            </div>
                        </div>
                    </div>
                    <div class="form_group">
                        <label>Hiện tại bạn đang</label>
                        <div class="form_row">
                            <div class="c_5">
                                <div class="btn_group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn_outline_secondary">Làm việc</button>
                                    <button type="button" class="btn btn_outline_secondary">Học tập</button>
                                    <button type="button" class="btn btn_outline_secondary">Lập trình</button>
                                </div>
                            </div>
                            <div class="c_7">
                                <input type="text" class="form_control" placeholder="Điều muốn nói">
                            </div>                           
                        </div>
                    </div>
                    <div class="form_group">
                        <label for="private-name">Tên thật <span class="text--support">(không hiển thị công khai)</span></label>
                        <input type="text" value="Ho Thi Chinh" class="form_control" id="private-name">
                    </div>
                    <div class="form--btn">
                        <button class="btn form--btn-save" type="button">Lưu</button>
                        <button class="btn form--btn-cancel" type="button">Hủy bỏ</button>
                    </div>
                </form>
            </div>
        </div> 
    </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconLink from "@/components/icons/IconLink";
import IconTwitter from "@/components/icons/IconTwitter";
import IconGithub from "@/components/icons/IconGithub";
export default {
  components: {
    IconBase,
    IconLink,
    IconTwitter,
    IconGithub
  }
};
</script>

<style scoped lang="scss">
.form {
  color: #3b4045;
  font-family: Quicksand;

  .card_title {
    font-size: 22px;
  }
  .form--content {
    border-top: 1px solid #e9ebee;
    border-bottom: 1px solid #e9ebee;
    padding: 10px 0;
    .form_group {
      label {
        font-size: 13px;
        font-weight: 600;
        line-height: 1.23;
        letter-spacing: 0.1px;
      }
      .text--support {
        color: #9199a1;
      }
      input {
        font-size: 13px;
        font-weight: 600;
        line-height: 1.23;
        letter-spacing: 0.1px;
      }
      ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: #dddfe2;
        font-weight: 400;
      }
      ::-moz-placeholder {
        /* Firefox 19+ */
        color: #dddfe2;
        font-weight: 400;
      }
      :-ms-input-placeholder {
        /* IE 10+ */
        color: #dddfe2;
        font-weight: 400;
      }
      :-moz-placeholder {
        /* Firefox 18- */
        color: #dddfe2;
        font-weight: 400;
      }
    }
  }
  .live--preview {
    border-top: 1px solid #e9ebee;
    border-bottom: 1px solid #e9ebee;
    padding: 10px;
    min-height: 44px;
    padding-right: 100px;
    .live--preview-tag {
      top: 6px;
      right: 6px;
      width: 95px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      border-radius: 5px;
      background-color: #e1ecf4;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: -0.1px;
      color: #39739d;
    }
  }

  .form--social {
    .form--social-icon {
      left: 12px;
      top: 7.5px;
    }
    input {
      padding-left: 30px;
    }
  }
  .form--btn {
    button {
      width: 98px;
      height: 32px;
      font-size: 14px;
      font-weight: 600;
      border: 1px solid transparent;
      transition: all 0.5s ease;
      &.form--btn-save {
        background-color: #776ab0;
        margin-right: 5px;
        color: #fff;
        border-color: #776ab0;
        &:hover {
          color: #776ab0;
          background-color: transparent;
        }
      }
      &.form--btn-cancel {
        color: #0077dd;
        &:hover {
          border-color: #0077dd;
        }
      }
    }
  }
}
</style>
