<template>
  <div class="ct_f main-question">
    <app-questions/>
    <app-answers/>
  </div>
</template>
<script>
import AppQuestions from "./post-questions";
import AppAnswers from "./post-answers";
export default {
  components: {
    AppQuestions,
    AppAnswers
  }
};
</script>
<style lang="scss" scoped>
.wrap-question {
  border-right: 1px solid #a8a8a8;
}
</style>





