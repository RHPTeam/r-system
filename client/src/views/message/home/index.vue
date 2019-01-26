<template>
  <div>
    <v-layout row>
      <v-flex class="scrollable" sm3 order-xs1>
        <app-left/>
      </v-flex>
      <v-flex sm6 order-xs1 class="chat-container">
        <app-content/>
      </v-flex>
      <v-flex sm3 order-xs1>
        <app-right/>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import AppLeft from "./left-bar";
import AppContent from "./content";
import AppRight from "./right-bar";
export default {
  components: {
    AppLeft,
    AppContent,
    AppRight
  }
};
</script>
<style lang="scss" scoped>
.scrollable {
  overflow-y: scroll;
  height: 100vh;
  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #5a5eb9;
    border-radius: 3px;
  }
}
</style>
