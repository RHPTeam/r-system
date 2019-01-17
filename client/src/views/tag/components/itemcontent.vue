<template>
  <div class="tag--list r">
    <div v-for="(item,index) in items" :key="index" class="tag c_lg_3 c_md_4 c_sm_4 c_xs_6">
      <div class="top r">
        <span class="tag--name">{{item.name}}</span>
        <span class="tag--qty">x{{item.qty}}</span>
      </div>
      <div class="tag--detail r">
        <p>{{item.detail}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["items"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scope>
.tag--list {
  box-sizing: border-box;
  padding: 0px 0px 0px 8%;

  .tag {
    margin-top: 30px;
    padding-left: 0px !important;
    box-sizing: border-box;
    padding-right: 100px;
    .top {
      margin-bottom: 20px;

      .tag--name {
        padding: 8px 5px;
        color: black;
        border-radius: 2px;
        background-color: #dddfe2;
        margin-right: 5px;
        border: 1px solid #dddfe2;
      }

      .tag--qty {
        color: #9999;
        padding: 8px 5px;
      }
    }

    .tag--qty {
      color: #9999;
      padding: 8px 5px;
    }
  }
}

.tag--detail p {
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: left;
  color: #707070;
}
</style>
