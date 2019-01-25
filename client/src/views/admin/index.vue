<template>
  <div class="main--wrapper">
    <app-top-nav/>
    <app-left-nav/>
    <div class="page--wrapper">
      <div class="page--content d_flex">
        <div class="main">
          <router-view/>
        </div>
      </div>
    </div>
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
