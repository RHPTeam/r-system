<template>
  <div class="impressive--question">
    <div class="question--content">
      <app-tag/>
      <app-content/>
    </div>
    <div class="question--info d_flex">
      <app-actions/>
      <app-who/>
    </div>
    <div class="question--footer">
      <app-comments/>
    </div>
  </div>
</template>

<script>
import AppTag from "./components/tags";
import AppContent from "./components/content";
import AppActions from "./components/actions";
import AppWho from "./components/who";
import AppComments from "./components/comments";
export default {
  components: {
    AppTag,
    AppContent,
    AppActions,
    AppWho,
    AppComments
  }
};
</script>
