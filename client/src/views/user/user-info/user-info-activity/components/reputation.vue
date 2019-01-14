<template>
  <div class="reputation card">
    <div class="card_body">
      <div class="ct_f">
        <div class="r p_n1">
          <div class="c_12 c_sm_6 c_md_6 c_xl_6 p_1">
            <div class="card_title mb_0">ĐIỂM VINH DANH</div>
            <div class="reputation--score">762,038</div>
            <div class="reputation--level text_primary">đứng #1 tháng 01</div>
            <div class="card_text mt_3">Thẻ tag thảo luận nhiều nhất</div>
            <div class="reputation--tag mt_1 position_relative alert alert_secondary d_inline_block">vertica</div>
          </div>
          <div class="c_12 c_sm_6 c_md_6 c_xl_6 p_1">
            <rchart type="line" width="100%" :options="options" :series="series"></rchart>
          </div>
        </div>
      </div>
      <div class="reputation--target mt_3">
        <div class="card_text">Mục tiêu tuần này</div>
        <div class="reputation--progress position_relative mt_4">
          <div class="reputation--progress-ratio position_absolute">70/100 điểm</div>
          <div class="reputation--progress-value position_absolute bg_success"></div>
          <div class="reputation--progress-background position_absolute"></div>
        </div>
        <div class="reputation--progress position_relative mt_4">
          <div class="reputation--progress-ratio position_absolute">50/20 trả lời</div>
          <div class="reputation--progress-value position_absolute bg_success"></div>
          <div class="reputation--progress-background position_absolute"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        chart: {
          id: "reputation-chart",
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
  }
};
</script>

<style scoped lang="scss">
.reputation {
  .card_title {
    font-size: 11px;
    font-weight: 600;
  }
  .card_text {
    font-size: 12px;
    font-weight: 500;
  }
  .reputation--score {
    font-size: 27px;
    font-weight: 500;
    line-height: 1.26;
    letter-spacing: 0.3px;
  }
  .reputation--level {
    font-size: 11px;
    font-weight: 500;
  }
  .reputation--tag {
    padding: 4px 6px 4px 16px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: 0.1px;
    color: #535a60;
    &:before {
      content: "";
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #5fba7d;
      top: 50%;
      left: 6px;
      transform: translateY(-50%);
    }
  }
}
.reputation--progress {
  height: 4px;
  border-radius: 2px;
  .reputation--progress-ratio {
    font-size: 11px;
    right: 0;
    top: 0;
    transform: translateY(-100%);
  }
  .reputation--progress-value {
    z-index: 2;
    width: 80%;
    height: 100%;
    border-radius: 2px;
  }
  .reputation--progress-background {
    background-color: #d6d9dc;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 2px;
  }
}
</style>
