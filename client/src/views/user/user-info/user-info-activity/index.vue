<template>
  <div class="content">
    <div class="ct_f pb_0 pl_2 pr_2 pt_2">
      <div class="r">
        <div class="c_12 c_sm_12 c_md_6 c_xl_6 pl_2 pr_2 mb_3">
          <app-user-reputation/>
        </div>
        <div class="c_12 c_sm_12 c_md_6 c_xl_6 pl_2 pr_2 mb_3">
          <app-user-statistic-tag/>
        </div>
        <div class="c_12 c_sm_12 c_md_12 c_xl_12 pl_2 pr_2">
          <app-user-level/>
        </div>
      </div>
    </div>
    <div class="card mt_3">
      <div class="card_body">
          <v-tabs show-arrows class="filter--list mb_3">
            <v-tabs-slider color="#776ab0"></v-tabs-slider>
          <v-tab class="position_relative" v-for="(item,index) in items" :key="index" :href="'#tab-' + item.url">
            {{ item.name }}
          </v-tab>
        </v-tabs>
        <app-user-summary/>
      </div>
    </div>
  </div>
</template>
<script>
import AppUserReputation from "./components/reputation";
import AppUserStatisticTag from "./components/statistic-tag";
import AppUserLevel from "./components/level";
import AppUserSummary from "./components/sumary";

export default {
  data() {
    return {
      items: [
        {
          name: "Tổng hợp",
          url: "tonghop"
        },
        {
          name: "Câu hỏi",
          url: "cauhoi"
        },
        {
          name: "Trả lời",
          url: "traloi"
        },
        {
          name: "Thẻ",
          url: "the"
        },
        {
          name: "Vinh danh",
          url: "vinhdanh"
        },
        {
          name: "Tất cả hành động",
          url: "all"
        }
      ]
    };
  },
  components: {
    AppUserReputation,
    AppUserStatisticTag,
    AppUserLevel,
    AppUserSummary
  }
};
</script>

<style lang="scss">
.filter--list {
  list-style-type: none;
  border-bottom: 1px solid #e9ebee;
}
.v-tabs__container {
  height: auto !important;
}
.v-tabs__item--active,
.v-tabs__div > a:hover:not(.v-tabs__item--active) {
  color: #3b4045 !important;
}
.v-tabs__div {
  padding-bottom: 0.5em !important;
  margin-right: 5px !important;
}
.v-tabs__item {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.23;
  letter-spacing: 0.1px;
  color: #9199a1 !important;
  transition: all 0.5s ease;
  cursor: pointer;
  text-transform: none;
  text-decoration: none !important;
  padding: 0 5px !important;
}
</style>
