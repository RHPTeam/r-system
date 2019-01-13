<template>
  <div class="content--tabs">
    <v-tabs show-arrows>

      <v-tab class=".nav--link" v-for="(item,index) in items" :key="index" :href="'#tab-' + item.url">
         {{ item.name }}
      </v-tab>

      <!-- <v-tabs-items>
        <v-tab-item v-for="i in 10" :key="i" :value="'tab-' + i">
          <v-card flat>
            <v-card-text>{{i}}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items> -->
    </v-tabs>
   
  </div>
</template>
<script>
  export default {
      props:['items'],
      data(){
          return{
              
          }
      }
  };

</script>
<style lang="scss">
  

  .content--tabs {
    a:hover{
        text-decoration: none;
        
    }
    .v-tabs__item{
        // font-family: SegoeUI !important;
        font-size: 15px!important;
        font-weight: 600!important;
        color: #a8a8a8 !important;
        padding:10px 20px;
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

    .v-tabs__div {
    //   padding: 10px 31px;
    
     
    }
  }

</style>
