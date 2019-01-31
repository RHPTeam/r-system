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
            <v-tab class="position_relative" v-for="(item,index) in items"
              :key="index" @click="currentTab(index)">
              {{ item.name }}
            </v-tab>
          </v-tabs>
          <keep-alive>
            <component
              v-bind:is="currentTabComponent"
            ></component>
          </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import AppUserReputation from "./components/reputation";
import AppUserStatisticTag from "./components/statistic-tag";
import AppUserLevel from "./components/level";
import AppUserSummary from "./components/sumary";
import AppUserAnswer from "./components/all-answer";
import AppUserQuestion from "./components/all-question";
import AppUserTag from "./components/all-tag";
import AppUserHonor from "./components/all-honor";
import AppUserAllActivity from "./components/all-activity";

export default {
  data() {
    return {
      tab: "user-summary",
      items: [
        {
          name: "Tổng hợp",
          url: "tonghop",
          component_name: "user-summary"
        },
        {
          name: "Trả lời",
          url: "traloi",
          component_name: "user-answer"
        },
        {
          name: "Câu hỏi",
          url: "cauhoi",
          component_name: "user-question"
        },

        {
          name: "Thẻ",
          url: "the",
          component_name: "user-tag"
        },
        {
          name: "Vinh danh",
          url: "vinhdanh",
          component_name: "user-honor"
        },
        {
          name: "Tất cả hành động",
          url: "all",
          component_name: "user-all-activity"
        }
      ]
    };
  },
  methods: {
    currentTab: function(index) {
      this.tab = this.items[index].component_name;
    }
  },
  computed: {
    currentTabComponent: function() {
      return "app-" + this.tab;
    }
  },
  components: {
    AppUserReputation,
    AppUserStatisticTag,
    AppUserLevel,
    AppUserSummary,
    AppUserAnswer,
    AppUserQuestion,
    AppUserTag,
    AppUserHonor,
    AppUserAllActivity
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
