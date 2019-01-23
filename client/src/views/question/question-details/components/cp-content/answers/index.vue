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
export default {
  components: {
    AppHeader,
    AppContent,
    AppActions,
    AppWho,
    AppComments,
    AppForm,
    AppNote
  }
};
</script>
