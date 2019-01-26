<template>
  <div>
    <app-top-nav/>
    <v-layout row>
      <v-flex sm3 order-xs1>
        <app-left-nav/>
      </v-flex>
      <v-flex sm9 order-xs1 class="chat-container">
        <router-view/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import AppTopNav from "./top-nav";
import AppLeftNav from "./left-nav";
export default {
  components: {
    AppTopNav,
    AppLeftNav
  },
  data() {
    return {
      mini: false
    };
  }
};
</script>
