<template>
    <div class="card form">
       <div class="card_body">
          <h5 class="card_title font_weight_bold">Chỉnh sửa thông tin nghề nghiệp</h5>
          <div class="form--content pt_2">
              <form @submit.prevent="submit">
                <div class="form_group">
                  <div class="form_row">
                    <div class="c_md_6">
                      <div class="form_group">
                        <label for="technology-like">Công nghệ bạn mong muốn làm việc</label>
                        <textarea class="form_control" id="technology-like"></textarea>
                      </div>
                    </div>
                    <div class="c_md_6">
                      <div class="form_group">
                        <label for="technology-hate">Công nghệ bạn không thích làm việc</label>
                        <textarea class="form_control" id="technology-hate"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form_group">
                  <label>Nơi bạn muốn làm việc</label>
                  <div class="form_row">
                    <div class="c_6">
                      <input type="text" class="form_control" id="location" value="UK" placeholder="">
                      <div class="custom_control custom_checkbox form--checkbox mt_1">
                        <input type="checkbox" class="custom_control_input" id="work-remote">
                        <label class="custom_control_label pt_1 font_weight_normal" for="work-remote">Có thể làm việc từ xa</label>
                      </div>
                      <div class="location--remote pt_2 m_n1 d_flex align_items_center justify_content_start flex_row flex_wrap">
                        <div class="location--remote-item m_1 alert alert_secondary alert_dismissible fade show" role="alert">
                          Vietnam
                          <button type="button" class="close pr_1" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="c_6 form--btn border--none">
                      <button class="btn form--btn-save" type="button">Thêm</button>
                    </div>
                  </div>
                </div>
                <div class="form_group mb_0">
                  <div class="form_row">
                    <div class="c_md_4">
                      <div class="form_group">
                        <label for="position">Vị trí</label>
                        <input type="text" class="form_control" id="position" placeholder="">
                      </div>
                    </div>
                    <div class="c_md_4">
                      <div class="form_group">
                        <label for="background">Kinh nghiệm</label>
                        <input type="text" class="form_control" id="background" placeholder="">
                      </div>
                    </div>
                    <div class="c_md_4">
                      <div class="form_group">
                        <label for="salary">Mức tối thiểu mà bạn mong muốn</label>
                        <div class="salary--group d_flex align_items_center justify_content_start">
                          <input type="text" class="form_control" id="salary" placeholder="">
                          <div class="select--wrapper position_relative">
                            <select class="form_control" id="exampleFormControlSelect1">
                              <option>USD</option>
                              <option>VND</option>
                            </select>
                            <icon-base icon-name="caret-arrow-up" width="10" height="10" viewBox="0 0 320 320" class="select--wrapper-caret position_absolute"><icon-caret-arrow-up /></icon-base>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="c_md_12">
                      <div class="form_group form--radio">
                        <label for="work-type" class="d_block">Loại công việc</label>
                        <div class="custom_control custom_radio custom_control_inline">
                          <input type="radio" id="work-type1" name="work-type" class="custom_control_input">
                          <label class="custom_control_label font_weight_normal pt_1" for="work-type1">Full time</label>
                        </div>
                        <div class="custom_control custom_radio custom_control_inline">
                          <input type="radio" id="work-type2" name="work-type" class="custom_control_input">
                          <label class="custom_control_label font_weight_normal pt_1" for="work-type2">Contract</label>
                        </div>
                        <div class="custom_control custom_radio custom_control_inline">
                          <input type="radio" id="work-type3" name="work-type" class="custom_control_input">
                          <label class="custom_control_label font_weight_normal pt_1" for="work-type3">Internship</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form--btn pt_3">
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
import IconCaretArrowUp from "@/components/icons/IconCaretArrowUp";
import IconTwitter from "@/components/icons/IconTwitter";
import IconGithub from "@/components/icons/IconGithub";
export default {
  components: {
    IconBase,
    IconCaretArrowUp
  }
};
</script>

<style scoped lang="scss">
.form {
  .card_title {
    font-size: 22px;
  }
  .form--content {
    border-top: 1px solid #e9ebee;
    .form_group {
      label {
        font-size: 13px;
        font-weight: 600;
        line-height: 1.23;
        letter-spacing: 0.1px;
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
  .form--checkbox {
    font-size: 8px;
  }
  .form--btn {
    border-top: 1px solid #e9ebee;
    &.border--none {
      border-top: none;
    }
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
.location--remote {
  margin-bottom: 1em !important;
  .location--remote-item {
    height: 20px;
    font-size: 10px;
    font-weight: 500;
    line-height: 20px;
    white-space: normal;
    padding: 0 20px 0 5px;
  }
  .alert_dismissible .close {
    font-weight: 400;
    top: -3px;
    padding: 0;
    outline: none;
  }
}
.salary--group {
  input {
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  select {
    background-color: #dddfe2;
    width: 75px;
    font-size: 13px;
    font-weight: 600;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    &:focus {
      box-shadow: none;
    }
  }
  .select--wrapper {
    .select--wrapper-caret {
      color: #3b4045;
      top: 11px;
      right: 12px;
      pointer-events: none;
      transform: rotate(180deg);
    }
  }
}
</style>
