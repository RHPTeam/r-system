<template>
  <div class="impressive--question">
    <tag-lang/>
    <app-desc/>
    <app-sources/>
    <!-- question -->
    <div class="info--question d_flex">
      <tag-question/>
      <info-user/>
    </div>
    <similar-question/>
  </div>
</template>
<script>
import TagLang from "./tag-lang";
import AppDesc from "@/components/question/description";
import AppSources from "@/components/question/sources";
import TagQuestion from "./tag-question";
import InfoUser from "@/components/question/info-user";
import SimilarQuestion from "./similar-question";
export default {
  components: {
    TagLang,
    SimilarQuestion,
    InfoUser,
    TagQuestion,
    AppSources,
    AppDesc
  }
};
</script>
<style lang="scss" scoped>
.info--question {
  margin: 18px 0;
}
</style>
