<template>
  <div class="content--grid">
    <!-- router-view -->
    <div class="content--question mb_3">
      <div class="card_body">
        <div class="question--title">Làm thế nào để câu hỏi đúng cách?</div>

        <div class="question--content">
          <p>Chào mừng bạn tới với hệ thống RHelp!</p>
          <p>Chúng tôi thực sự muốn giúp đỡ bạn, nhưng thực tế là không phải câu hỏi nào cũng sẽ có câu trả lời. Vì vậy chúng tôi chúng tôi cung cấp một số mẹo sau:</p>
          <h2>Tìm kiếm và nghiên cứu nhiều lần</h2>
          <p>
            Bạn đã chắc chắn rằng, bạn đã tìm kiếm câu trả lời rất kĩ càng chưa? Hoặc thậm chí đó là một lỗi của bạn và bạn đăng lên.
            Nếu bạn thấy một chức năng nào đó không hoàn thiện, hoặc không đáp ứng nhu cầu của bạn! Việc chia sẻ câu hỏi, câu trả lời này giúp chính bạn tìm...
          </p>
        </div>

        <div class="form_group d_flex">
          <input type="text" class="form_control fontsize14" placeholder="Tìm kiếm câu hỏi">
          <button class="btn btn_primary btn--custom s14 ml_2">Tìm kiếm</button>
        </div>

        <div class="question--content">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
          and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
          Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
          Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
          1.10.32.
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
          1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original
          form, accompanied by English versions from the 1914 translation by H. Rackham.
        </div>

        <div class="question--confirm d_flex justify_content_between flex_column flex_sm_row mt_5">
          <div class="form_check">
            <input class="form_check_input" type="checkbox" value>
            <label class="form_check_label s14">Cảm ơn, tôi đã đọc và sẽ áp dụng khi đặt câu hỏi.</label>
          </div>
          <div class="s14 text_right mt_3 mt_sm_0">
            <a
              href="javascript:void(0)"
              @click.prevent="next"
            >tiếp tục »</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    next() {
      this.$router.push({ name: "question-create" });
    }
  }
};
</script>
<style scoped>
@import "content.scss";
</style>
