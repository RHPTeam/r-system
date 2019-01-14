<template>
  <div class="level card">
    <div class="card_body">
      <div class="ct_f">
        <div class="r p_n1">
          <div class="c_12 c_sm_4 c_md_4 c_xl_4 p_1">
            <div class="level--info d_flex justify_content_between flex_column">
              <div class="level--info-top">
                <div class="card_title mb_2">THỐNG KÊ CẤP BẬC</div>
                <div class="level--number">~12.3m</div>
                <div class="card_text">mọi người tìm hiểu</div>
              </div>
              <div class="level--info-bottom mt_3">
                  <div class="level--question mb_1">
                    <icon-base icon-name="pencil" width="14" height="14" viewBox="0 0 58 58"><icon-pencil /></icon-base> 7.865 câu hỏi tham gia tháng này
                  </div>
                  <div class="level--assess info--opacity mb_1">
                    <icon-base icon-name="clap" width="14" height="14" viewBox="0 0 25 25"><icon-clap /></icon-base> 157 đánh giá hữu ích bài viết
                  </div>
                  <div class="level--honor info--opacity mb_1">
                    <icon-base icon-name="caret-arrow-up" width="14" height="14" viewBox="0 0 320 320"><icon-caret-arrow-up /></icon-base> 238 điểm vinh danh tăng - tháng
                  </div>
              </div>
            </div>
          </div>
          <div class="c_12 c_sm_6 c_md_6 c_xl_6 p_1">
            <rchart type="line" width="100%" :options="options" :series="series"></rchart>
          </div>
          <div class="c_12 c_sm_2 c_md_2 c_xl_2 p_1 text_center">
            <div class="level--icon text_center pt_3 mt_n1"><icon-base icon-name="m2" width="120" height="120" viewBox="0 0 510 510"><icon-m2/></icon-base></div>
            <h4 class="level--name text_center font_weight_bold">Master 2</h4>
            <div class="level--score text_center">
                <icon-base icon-name="star-gold" viewBox="0 0 515 515"><icon-star-gold /></icon-base>
                1,583
                <icon-base icon-name="star-gold" viewBox="0 0 515 515"><icon-star-gold /></icon-base>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconPencil from "@/components/icons/IconPencil";
import IconClap from "@/components/icons/IconClap";
import IconCaretArrowUp from "@/components/icons/IconCaretArrowUp";
import IconStarGold from "@/components/icons/IconStarGold";
import IconM2 from "@/components/icons/rank/IconM2";
export default {
  data() {
    return {
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
  components: {
    IconBase,
    IconStarGold,
    IconM2,
    IconPencil,
    IconClap,
    IconCaretArrowUp
  }
};
</script>

<style scoped lang="scss">
.level {
  .card_title {
    font-size: 11px;
    font-weight: 600;
  }
  .card_text {
    font-size: 12px;
    font-weight: 500;
  }
  .level--number {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.18;
    letter-spacing: 0.2px;
    color: #242729;
  }
  .level--name {
    font-size: 24px;
  }
  .level--score {
    font-size: 20px;
    font-weight: 500;
  }
}
.level--info-bottom {
  font-size: 11px;
  font-weight: 600;
  line-height: 1.82;
  letter-spacing: 0.1px;
  color: #3b4045;
}
.info--opacity {
  opacity: 0.6;
}
</style>
