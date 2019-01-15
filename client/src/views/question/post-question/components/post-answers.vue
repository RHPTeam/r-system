<template>
  <div class="impressive--answers">
    <tag-answers/>
    <app-sources/>
    <div class="info--question d_flex">
      <app-answers/>
      <info-user/>
    </div>
    <similar-answers/>
    <form-answers/>
    <note-question/>
  </div>
</template>
<script>
import TagAnswers from "./tag-answers";
import AppSources from "@/components/question/sources";
import AppAnswers from "./tag-options";
import InfoUser from "@/components/question/info-user";
import SimilarAnswers from "./similar-answers";
import FormAnswers from "./form-answers";
import NoteQuestion from "./note-question";

export default {
  components: {
    NoteQuestion,
    SimilarAnswers,
    FormAnswers,
    InfoUser,
    AppSources,
    TagAnswers,
    AppAnswers
  }
};
</script>
<style lang="scss" scoped>
.impressive--answers {
  padding-top: 10px;
}
.info--question {
  margin: 18px 0;
}
</style>
