<template>
  <div class="your-answers">
    <h3>Your Answers</h3>
    <form action>
      <app-editor></app-editor>
      <noti-question/>
      <!-- Hiển thị kết quả câu trả lời của bạn ở đây -->
      <div class="question--status text_right">
        <a href="#" class="t_name">live Preview</a>
        <div class="show--answers text_left">

        </div>
      </div>
      <div class="sends--answers">
        <h3>Sign up or
          <span>Login</span>
        </h3>
          <div class="r form_group">
            <div class="c_md_6 c-12">
              <a href="#" type="button" class="btn btn--default">
                <icon-base icon-name="google" width="17" height="17" viewBox="0 0 560 560">
                  <icon-google/>
                </icon-base>Sign up using Goole
              </a>
            </div>
            <div class="c_md_6 c-12">
              <a href="#" type="button" class="btn btn--default">Sign up using Email or Password</a>
            </div>
        </div>
        <button type="submit" class="btn btn--send">Post your answers</button>
      </div>
    </form>
  </div>
</template>
<script>
import NotiQuestion from "@/components/question/notification";
import AppEditor from "@/components/ckeditor/index";
import IconBase from "@/components/icons/IconBase";
import IconGoogle from "@/components/icons/IconGoogle";
export default {
  components: {
    NotiQuestion,
    IconBase,
    IconGoogle,
    AppEditor
  }
};
</script>

<style lang="scss" scoped>
.your-answers {
  border-top: 1px solid #e4e4e4;
  h3 {
    padding: 0.5em 0;
  }
  form {
    textarea {
      min-width: 100%;
      height: 150px;
      max-height: 220px;
      padding-left: 1em;
      border: 1px solid #e4e4e4;
      border-radius: 3px;
    }
  }
  .question--status {
    padding: 11px 0;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    a {
      border-radius: 5px;
      padding: 4px 11px;
      background: #e1ecf4;
    }
  }
  .sends--answers {
    .btn--default {
      border: 1px solid #e4e4e4;
      background: #fff;
      margin-right: 40px;
      padding: 14px 0;
      outline: 0;
      width: 100%;
      margin-bottom: 10px;
      &:hover,
      &:focus {
        border-color: #776ab0;
        color: #776ab0;
      }
    }
    .btn--send {
      padding: 14px 22px;
      border: none;
      outline: 0;
      border-radius: 5px;
      margin-top: 30px;
      margin-bottom: 15px;
      background: #776ab0;
      color: #fff;
    }
  }
}
</style>
