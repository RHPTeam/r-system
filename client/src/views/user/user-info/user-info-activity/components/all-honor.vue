<template>
  <div class="honor">
    <div class="honor--head position_relative d_flex justify_content_between align_items_center pb_1 mb_3">
      <div class="honor--title"><span class="honor--title-number">51,30</span> Vinh danh</div>
      <a class="dropdown--expand d_block d_sm_none" @click.prevent="showDropdown = !showDropdown"><icon-base icon-name="more" viewBox="0 0 20 10"><icon-more /></icon-base></a>
      <ul :class="{ show: showDropdown }" class="dropdown--collapse dropdown--list d_flex justify_content_start align_items_center pl_0 mb_0">
        <li v-for="(tab, index) in tabs" v-bind:key="index" v-bind:class="['position_relative', { active: current_tab === tab.tab_name }]" @click="currentTab(index)">{{tab.name}}</li>
      </ul>
    </div>
    <div v-if="current_tab === 'time'">
      <div class="honor--content">
        <v-expansion-panel>
          <v-expansion-panel-content
            v-for="(item,i) in 2"
            :key="i"
            expand-icon="mdi-menu-down"
          >
            <div slot="header" class="item--header d_flex justify_content_start align_items_center">
              <div class="item--header-number pr_2">148</div>
              <icon-base width="12" height="12" icon-name="caret-arrow-up" viewBox="0 0 320 320"><icon-caret-arrow-up /></icon-base>
              <div class="item--header-day pl_2">today</div>
            </div>
            <v-card class="pl_3 pr_3 pt_1 pb_2">
              <div class="item item--upvote d_flex flex_column flex_md_row justify_content_start align_items_start pt_2 pb_2">
                <div class="d_flex justify_content_start align_items_center mr_3">
                  <div class="item--count"><span>+10</span></div>
                  <div class="item--time text_nowrap">1 hour ago</div>
                  <div class="item--type">upvote</div>
                </div>
                <div class="item--title mt_1 mt_md_0">Loop through several values to fill NaNs in Pandas Dataframe</div>
              </div>
              <div class="item item--downvote d_flex flex_column flex_md_row justify_content_start align_items_start pt_2 pb_2">
                <div class="d_flex justify_content_start align_items_center mr_3">
                  <div class="item--count"><span>-10</span></div>
                  <div class="item--time text_nowrap">2 hour ago</div>
                  <div class="item--type">downvote</div>
                </div>
                <div class="item--title mt_1 mt_md_0">Loop through several values to fill NaNs in Pandas Dataframe</div>
              </div>
              <div class="item item--accept d_flex flex_column flex_md_row justify_content_start align_items_start pt_2 pb_2">
                <div class="d_flex justify_content_start align_items_center mr_3">
                  <div class="item--count"><span>+2</span></div>
                  <div class="item--time text_nowrap">2 hour ago</div>
                  <div class="item--type">accept</div>
                </div>
                <div class="item--title mt_1 mt_md_0">Loop through several values to fill NaNs in Pandas Dataframe</div>
              </div>
              <div class="item item--removed d_flex flex_column flex_md_row justify_content_start align_items_start pt_2 pb_2">
                <div class="d_flex justify_content_start align_items_center mr_3">
                  <div class="item--count"><span>+10</span></div>
                  <div class="item--time text_nowrap">2 hour ago</div>
                  <div class="item--type">removed</div>
                </div>

                <div class="item--title mt_1 mt_md_0">Loop through several values to fill NaNs in Pandas Dataframe</div>
              </div>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </div>
      <div class="text_right">
        <app-pagination/>
      </div>
    </div>
    <div v-if="current_tab === 'graph'">
      <rchart type="bar" width="100%" :options="options" :series="series"></rchart>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconMore from "@/components/icons/IconMore";
import IconCaretArrowUp from "@/components/icons/IconCaretArrowUp";
import AppPagination from "./pagination";
export default {
  data() {
    return {
      showDropdown: false,
      current_tab: "time",
      tabs: [
        {
          name: "thời gian",
          tab_name: "time"
        },
        {
          name: "biểu đồ",
          tab_name: "graph"
        }
      ],

      options: {
        chart: {
          id: "level-chart",
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"]
        }
      },
      series: [
        {
          name: "Điểm vinh danh",
          data: [30, 40, 45, 50]
        }
      ]
    };
  },
  methods: {
    currentTab: function(index) {
      this.current_tab = this.tabs[index].tab_name;
    }
  },
  components: {
    IconBase,
    IconMore,
    IconCaretArrowUp,
    AppPagination
  }
};
</script>

<style scoped lang="scss">
@import "tab";
.honor--head {
  border-bottom: 1px solid #e9ebee;
  .honor--title {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.24;
    letter-spacing: 0.2px;
    color: #0077dd;
    .honor--title-number {
      color: #9199a1;
    }
  }
}
.honor--content {
  .honor--item {
    letter-spacing: 0.1px;
    font-weight: 600;
    .honor--item-score {
      font-size: 13px;
    }
    .honor--item-name {
      font-size: 12px;
      border-radius: 3px;
      background-color: #e1ecf4;
      color: #39739d;
      padding: 4.5px 6px;
    }
    .honor--item-posts {
      font-size: 11px;
      color: #a8a8a8;
    }
  }
}

.item--header {
  color: #9199a1;
  .item--header-number {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.24;
    letter-spacing: 0.2px;
    color: #28a745;
  }
  svg {
    color: #9199a1;
    transform: rotateX(3.142rad);
  }
  .item--header-day {
    font-size: 12px;
  }
}

.item {
  font-size: 13px;
  font-weight: 500;
  border-bottom: 1px solid #e9ebee;
  &:last-child {
    border-bottom: 0;
  }
  .item--count {
    width: 45px;
  }
  .item--time {
    color: #a8a8a8;
    font-weight: 600;
    width: 80px;
  }
  .item--type {
    color: #3b4045;
    width: 64px;
  }
  .item--title {
    font-size: 15px;
    line-height: 1.24;
    letter-spacing: 0.2px;
    color: #0077dd;
    width: 100%;
  }

  &.item--upvote {
    .item--count {
      span {
        color: #28a745;
      }
    }
  }
  &.item--downvote {
    .item--count {
      span {
        color: #dc3545;
      }
    }
  }
  &.item--removed,
  &.item--accept {
    .item--count {
      span {
        background-color: #28a745;
        border-radius: 3px;
        color: #fff;
        font-size: 11px;
        padding: 2px 5px;
      }
    }
  }
  &.item--accept {
    .item--count {
      span {
        background-color: #28a745;
      }
    }
  }
  &.item--removed {
    .item--count {
      span {
        background-color: #dc3545;
      }
    }
  }
}
</style>
<style lang="scss">
.v-expansion-panel {
  box-shadow: none;
}
.v-expansion-panel__header {
  padding: 2.5px 20px;
}
.v-card.theme--light.v-sheet {
  background-color: #f5f5f5;
  border-top: 1px solid #e9ebee;
}
</style>
