<template>
   <div class="create--content">
          <div class="create--content-title ct pb_2">Đăng câu hỏi</div>
          <div class="ct pt_4 pb_4">
            <form @submit.prevent="submit">
              <div class="form_group">
                <label for="question-name">Tên câu hỏi</label>
                <input
                  type="text"
                  class="form_control"
                  id="question-name"
                  placeholder="Câu hỏi của bạn là gì? Chi tiết"
                />
              </div>
              <div class="create--note mb_3">
                <p class="create--note-question mb_2">
                  Is your question about programming?
                </p>
                <span class="create--note-answer"
                >It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as
                    opposed</span
                >
              </div>
              <div class="form_group">
                <label for="about">Giới thiệu</label>
                <textarea class="form_control" id="about"></textarea>
              </div>
              <div class="live--preview position_relative mb_3">
                  <span class="live--preview-tag position_absolute"
                  >live preview</span
                  >
                <div class="live--preview-content"></div>
              </div>
              <div class="form_group">
                <label for="tag-name">Thẻ</label>
                <input
                  type="text"
                  class="form_control"
                  id="tag-name"
                  placeholder="e.g. (jquery reactjs mongodb)"
                />
              </div>
              <div class="form--btn">
                <button class="btn" type="button">Đăng câu hỏi</button>
              </div>
            </form>
          </div>
        </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
@import "../index";
</style>
