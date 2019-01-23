<template>
  <div class="ct">
    <div class="main-question">
      <!--Question component-->
      <app-question/>
      <!-- Answers component-->
      <app-answers/>
    </div>
  </div>
</template>
<script>
import AppQuestion from "./cp-content/question";
import AppAnswers from "./cp-content/answers";
export default {
  components: {
    AppQuestion,
    AppAnswers
  }
};
</script>
<style lang="scss" scoped>
</style>
