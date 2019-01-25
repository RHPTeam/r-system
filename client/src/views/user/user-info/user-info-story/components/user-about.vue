<template>
  <div class="pl_md_2 pr_md_2 mb_3">
    <div class="user--info card text_center">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, autem.</p>
      <p class="user--add-choose">
        <span  @click="showForm = !showForm">Thêm thông tin không bố kick giờ</span>
      </p>
    </div>
    <div class="user--add-info" :class="{show: showForm}">
      <div class="card">
        <div class="card_body">
          <form>
            <div class="form_group">
              <label>Personal statement</label>
              <textarea name="" id="" class="form_control">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</textarea>
              <div class="user--check mt_3">
                <input type="checkbox" id="check_info"/>
                <span>Only show your pesonal statement to employers</span>
              </div>
            </div>
            <div class="r form_group">
              <div class="c_12 c_sm_12 c_md_6 c_lg_6">
                <label>Editor favorite</label>
                <input type="text" class="form_control" placeholder="Vim, Sublime, Atom,…" />
              </div>
              <div class="c_12 c_sm_12 c_md_6 c_lg_6">
                <label>Máy tính đầu tiên của bạn</label>
                <input type="text" class="form_control" placeholder="Dell OptiPlex 486SX/25, Amiga 500, Sinclair ZX Spectrum…" />
              </div>
            </div>
            <div class="r form_group">
              <div class="c_12 c_sm_12 c_md_6 c_lg_6 text_center">
                <button type="button" class="btn_primary btn--user">Add</button>
              </div>
              <div class="c_12 c_sm_12 c_md_6 c_lg_6 text_center">
                <button type="button" class="btn_danger btn--user">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showForm: false
    };
  }
};
</script>

<style lang="scss" scoped>
.user--info {
  padding: 1em 0 0 0;
  p {
    font-size: 16px;
    span {
      color: #0077dd;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.4s ease;
      &:hover {
        border-bottom: 1px solid #07d;
      }
    }
    &.user--add-choose {
      cursor: pointer;
      span {
        color: #0077dd;
        font-size: 14px;
      }
    }
  }
}
.user--add-info {
  display: none;
  .card_body {
    background: #f4f8fb;
  }
  form {
    .form_group {
      label {
        display: block;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.14;
        text-align: left;
        color: #3b4045;
      }
      textarea {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        min-height: 68px;
        max-height: 100px;
        outline: 0;
      }
      input[type="text"] {
        height: 40px;
        padding-left: 20px;
      }
      .btn--user {
        padding: 8px 15px;
        border-radius: 8px;
        /*background: #776ab0;*/
        width: 60%;
      }
      /*textarea, input, button {*/
      /*&:hover,&:focus,&:active {*/
      /*outline: 0;*/
      /*}*/
      /*}*/
    }
  }
  &.show {
    display: block;
  }
}
</style>
