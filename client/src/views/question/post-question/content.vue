<template>
        <div class="ct">
            <div class="main-question">
                <div class="impressive--question">
                    <tag-lang/>
                    <app-desc/>
                    <app-sources/>
                    <div class="info--question d_flex">
                        <tag-question/>
                        <info-user/>
                    </div>
                    <similar-question/>
                </div>
                <!-- Answers people-->
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
            </div>
        </div>
</template>
<script>
import InfoUser from "@/components/question/info-user";
import AppSources from "@/components/question/sources";
import AppDesc from "@/components/question/description";
import TagLang from "./tag-lang";
import NoteQuestion from "./note-question";
import FormAnswers from "./form-answers";
import SimilarAnswers from "./similar-answers";
import SimilarQuestion from "./similar-question";
import TagQuestion from "./tag-question";
import TagAnswers from "./tag-answers";
import AppAnswers from "./tag-options";
export default {
  components: {
    TagLang,
    NoteQuestion,
    SimilarQuestion,
    SimilarAnswers,
    FormAnswers,
    InfoUser,
    TagQuestion,
    AppSources,
    AppDesc,
    TagAnswers,
    AppAnswers
  }
};
</script>
<style lang="scss" scoped>
.wrap-question {
  border-right: 1px solid #a8a8a8;
}
.info--question {
  margin: 18px 0;
}
.impressive--answers {
  padding-top: 10px;
}
</style>
