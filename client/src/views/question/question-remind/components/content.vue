<template>
    <div class="content--grid">
        <!-- router-view -->
        <div class="content--question">
            <div class="card_body">
                <div class="question--title">
                    Làm thế nào để câu hỏi được phê duyệt?
                </div>

                <div class="question--content">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </div>

                <div class="form_group d_flex">
                    <input type="text"
                            class="form_control fontsize14"
                            placeholder="Tìm kiếm câu hỏi">
                    <button class="btn btn_primary btn--custom s14 ml_2">Tìm kiếm</button>
                </div>

                <div class="question--content">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </div>

                <div class="question--confirm d_flex justify_content_between mt_5">
                   <div class="form_check">
                        <input class="form_check_input" type="checkbox" value="">
                        <label class="form_check_label s14">
                            Cảm ơn, tôi đã đọc và sẽ áp dụng khi đặt câu hỏi.
                        </label>
                   </div>
                    <div class="s14">
                        <a href="javascript:void(0)" @click.prevent="$router.push({ name: 'question-create' })">tiếp tục »</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.content--grid .content--question {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 64px;
  padding-right: 58px;
  padding-top: 22px;
}
.question--title {
  font-size: 24px;
  width: 100%;
}
.question--title::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  margin-top: 17px;
}
.question--content {
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 13px;
  line-height: 1.75rem;
}

.s14 {
  font-size: 14px;
}

.btn--custom {
  background-color: #776ab0;
  border: 0px;
  width: 130px;
}

.btn--custom:hover,
.btn--custom:focus,
.btn_primary:not(:disabled):not(.disabled):active {
  background-color: #685d9b;
}
</style>
