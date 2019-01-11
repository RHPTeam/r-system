<template>
  <div class="r">
    <!-- <sideMenu /> -->
    <main class="c_md_6">
      <navBar class="r"/> 
      <section class="r">
        <inputer class="c_md_6" />
        <outputer class="c_md_6" />
      </section>
    </main>
  </div>
</template>

<script>
// import sideMenu from '@/components/libraries/markdown/sideMenu.vue'
import navBar from '@/components/libraries/markdown/navBar.vue'
import inputer from '@/components/libraries/markdown/inputer.vue'
import outputer from '@/components/libraries/markdown/outputer.vue'

export default {
  components: {
    navBar,
    inputer,
    outputer
  },
  mounted () {
    this.$store.dispatch('loadCache')
  },
  computed: {
    showMenu () {
      return this.$store.state.showMenu
    }
  }
}
</script>

<style lang="scss">
    @import "@/assets/css/font-awesome.scss";
    @import "@/assets/css/atom-one-dark.scss";
    @import "@/assets/css/markdown.scss";
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: Microsoft Yahei, "PingHei", "Helvetica Neue", "Helvetica", "STHeitiSC-Light", "Arial", sans-serif;
    height: 100%;
    overflow: hidden;
    background-color: #e0e0e0;
  }
  .app {
    position: relative;
    left: -220px;
    height: 100%;
    transition: all ease .5s;
    &.show-menu {
      left: 0;
      main {
        section {
          padding-right: 230px;
        }
      }
    }
    main {
      margin-left: 220px;
      width: 100%;
      height: 100%;
      background-color: #e0e0e0;
      section {
        box-sizing: border-box;
        height: 100%;
        padding: 10px;
        padding-bottom: 55px;
        display: flex;
        justify-content: center;
        transition: all ease .5s;
      }
    }
  }

  *::-webkit-scrollbar {
      display: block;
      width: 5px;
      background: #FAFAFA;
  }
  *::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: #E0E0E0;
  }
  *::-webkit-scrollbar-thumb:hover {
      background: #BDBDBD;
  }
</style>
