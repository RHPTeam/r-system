<template>
    <div class="create">
        <div class="create--head position_relative">
            top
            <span class="create--head-top position_absolute">Questions</span>
        </div>
        <div class="create--content">
            <div class="create--content-title">Đăng câu hỏi</div>
            <div class="create--content-wrapper">
                <form @submit.prevent="submit">
                    <div class="form_group">
                        <label for="question-name">Tên câu hỏi</label>
                        <input type="text" class="form_control" id="question-name" placeholder="Câu hỏi của bạn là gì? Chi tiết">
                    </div>
                    <div class="create--note mb_3">
                        <p class="create--note-question mb_2">Is your question about programming?</p>
                        <span class="create--note-answer">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</span>
                    </div>
                    <div class="form_group">
                        <label for="about">Giới thiệu</label>
                        <textarea class="form_control" id="about"></textarea>
                    </div>
                    <div class="live--preview position_relative mb_3">
                        <span class="live--preview-tag position_absolute">live preview</span>
                        <div class="live--preview-content"></div>
                    </div>
                    <div class="form_group">
                        <label for="tag-name">Thẻ</label>
                        <input type="text" class="form_control" id="tag-name" placeholder="e.g. (jquery reactjs mongodb)">
                    </div>
                    <div class="form--btn">
                        <button class="btn" type="button">Đăng câu hỏi</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.create {
  font-family: Quicksand;
  color: #3b4045;
  .create--head {
    font-size: 120px;
    font-weight: 600;
    line-height: 1.33;
    letter-spacing: -2.2px;
    margin-left: 74px;
    color: #f5f5f5;
    .create--head-top {
      font-size: 26px;
      line-height: 1.35;
      letter-spacing: 0.6px;
      color: #999999;
      left: 0;
      top: 55%;
      transform: translateY(-50%);
    }
  }
  .create--content {
    .create--content-title {
      font-size: 27px;
      line-height: 1.33;
      letter-spacing: 0.3px;
      border-bottom: 1px solid #e4e4e4;
      padding: 10px 74px;
    }
    .create--content-wrapper {
      padding: 42px 74px;
    }
  }
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
  .create--note {
    border-radius: 3px;
    background-color: #fff7e5;
    padding: 12px 22px;
    font-weight: 600;
    .create--note-answer {
      color: rgba(59, 64, 69, 0.8);
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
  .form--btn {
    margin-top: 60px;
    button {
      height: 32px;
      font-size: 14px;
      font-weight: 600;
      border: 1px solid transparent;
      transition: all 0.5s ease;
      background-color: #776ab0;
      color: #fff;
      border-color: #776ab0;
      &:hover {
        color: #776ab0;
        background-color: transparent;
      }
    }
  }
}
</style>
