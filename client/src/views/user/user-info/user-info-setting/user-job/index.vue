<template>
  <div class="card form">
    <div class="card_body">
      <h5 class="card_title font_weight_bold">Chỉnh sửa thông tin nghề nghiệp</h5>
      <div class="form--content pt_2">
        <form @submit.prevent="submit">
          <div class="form_group">
            <div class="form_row">
              <div class="c_12 c_sm_6 c_md_12 c_xl_6">
                <div class="form_group">
                  <label for="technology-like">Công nghệ bạn mong muốn làm việc</label>
                  <textarea class="form_control" id="technology-like"></textarea>
                </div>
              </div>
              <div class="c_12 c_sm_6 c_md_12 c_xl_6">
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
              <div class="c_12 c_sm_12 c_md_12 c_xl_4">
                <div class="form_group">
                  <label for="position">Vị trí</label>
                  <input type="text" class="form_control" id="position" placeholder="">
                </div>
              </div>
              <div class="c_12 c_sm_6 c_md_5 c_xl_4">
                <div class="form_group">
                  <label for="background">Kinh nghiệm</label>
                  <input type="text" class="form_control" id="background" placeholder="">
                </div>
              </div>
              <div class="c_12 c_sm_6 c_md_7 c_xl_4">
                <div class="form_group">
                  <label for="salary">Mức tối thiểu bạn mong muốn</label>
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
              <div class="c_12">
                <div class="form_group form--radio">
                  <label for="work-type1" class="d_block">Loại công việc</label>
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
export default {
  components: {
    IconBase,
    IconCaretArrowUp
  }
};
</script>

<style scoped lang="scss">
@import "index";
</style>
