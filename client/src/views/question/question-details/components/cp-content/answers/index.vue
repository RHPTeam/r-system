<template>
  <div class="impressive--answers">
    <div class="answers--header">
      <app-header/>
    </div>
    <div class="answers--content">
      <app-content/>
    </div>
    <div class="answers--info d_flex">
      <app-actions/>
      <app-who/>
    </div>
    <div class="answers--footer">
      <app-comments/>
      <app-form/>
      <app-note/>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/header";
import AppContent from "./components/content";
import AppActions from "./components/actions";
import AppWho from "./components/who";
import AppComments from "./components/comments";
import AppForm from "./components/form";
import AppNote from "./components/note";
import AnwserService from "@/services/modules/answer.service";

export default {
  components: {
    AppHeader,
    AppContent,
    AppActions,
    AppWho,
    AppComments,
    AppForm,
    AppNote
  },
  computed: {
    anwser(){
      return this.$store.getters.anwser;
    }
  },
  async created() {
     await AnwserService.getOne("5c40db2dc30d5d0f3fecd6da").then((res)=>{
       this.$store.dispatch("setAnwser",res.data.data);
     })
  },

};
</script>
