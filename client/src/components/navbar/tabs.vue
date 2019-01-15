<template>
  <div class="content--tabs">
    <v-tabs show-arrows>

      <v-tab class=".nav--link" v-for="(item,index) in items" :key="index" :href="'#tab-' + item.url" >
        {{ item.name }} <span v-if="item.qty>0" class="badge badge_light">212</span>
      </v-tab>
    </v-tabs>

  </div>
</template>
<script>
  export default {
    props: ['items'],
  };

</script>
<style lang="scss">
  .content--tabs {
    max-height:36px;
    div{
      height:36px;
    }
    .badge {
      margin-left: 10px;
      display: inline-block;
      top: -1px;
      line-height:15px !important;
      max-height: 30px !important;
      color: #776ab0;
      background-color: #f8f9fa;
      border-radius: 32px;
      padding: 0px 15px;
      border: 1px solid #a8a8a8;
    }

    .v-tabs__div>a:hover:not(.v-tabs__item--active) {
      color: #776ab0 !important;
    }

    .v-tabs__item {
      font-size: 15px !important;
      font-weight: 600 !important;
      color: #a8a8a8 !important;
      padding: 4px 20px;
      line-height: 29px;
      text-transform: none;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: -0.3px;
    }

    .v-tabs__item--active {
      background: #776ab0 !important;
      color: #fff !important;
      display: block !important;
      text-align: center;
      border-radius: 36px !important;
    }
  }

</style>
