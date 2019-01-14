<template>
  <ul class="site_nav">
    <li class="item" v-for="(nav,key) in arNav" v-bind:key="key">
      <router-link tag="a" :to="{name: nav.router_name}">{{nav.content}}</router-link>
      <ul class="sub">
        <li class="sub_item" v-for="(child,key) in nav.children" v-bind:key="key">
          <router-link tag="a" :to="{name: child.router_name}">
            <i class="material-icons">subdirectory_arrow_right</i>
            {{child.content}}
          </router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["arNav"]
};
</script>

<style scoped lang="scss">
@import "menu-lega";
</style>
