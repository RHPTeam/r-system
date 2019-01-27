<template>
  <div class="content--tabs">
    <v-tabs show-arrows>

      <v-tab class=".nav--link" v-for="(item,index) in items" :key="index" :href="'#tab-' + item.url" @click="setCurrentTab(item)" >
        {{ item.name }} <span v-if="item.qty>0" class="badge badge_light">212</span>
      </v-tab>
    </v-tabs>

  </div>
</template>
<script>
export default {
  props: ["items"]
};
</script>
<style lang="scss">
@import "tabs";
</style>
