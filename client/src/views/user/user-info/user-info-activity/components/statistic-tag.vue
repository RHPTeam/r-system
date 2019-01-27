<template>
  <div class="tag card">
    <div class="card_body">
      <div class="card_title mb_0">THỐNG KÊ THẺ</div>
      <div class="tag--statistic pt_1 m_n1 d_flex align_items_center justify_content_start flex_row flex_wrap">
        <div class="tag--item alert alert_danger m_1">javaScript (310)</div>
        <div class="tag--item alert alert_warning m_1">php (105)</div>
        <div class="tag--item alert alert_secondary m_1">vertica (400)</div>
      </div>
      <div class="tag--other">
        <div class="ct m_0">
          <div class="r p_n1">
            <div class="c_12 c_sm_6 c_md_6 c_xl_6 p_1 mt_3">
              <div class="card_text mb_1">Thẻ mới nhất</div>
              <div class="tag--item tag--new position_relative alert alert_secondary d_inline_block mb_0">node.js</div>
            </div>
            <div class="c_12 c_sm_6 c_md_6 c_xl_6 p_1 mt_3">
              <div class="card_text mb_1">Thẻ xu thế</div>
              <div class="tag--trend position_relative">
                <div class="tag--trend-ratio position_absolute">50/100</div>
                <div class="tag--trend-name text_center position_absolute">blockchain</div>
                <div class="tag--trend-background position_absolute"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.tag {
  height: 100%;
  .card_title {
    font-size: 11px;
    font-weight: 600;
  }
  .card_text {
    font-size: 12px;
    font-weight: 500;
  }
  .tag--item {
    font-size: 12px;
    font-weight: 500;
    padding: 3px 10px;
    &.tag--new {
      color: #fff;
      background-color: #2f3337;
      padding-left: 20px;
      &:before {
        content: "";
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #fff;
        top: 50%;
        left: 6px;
        transform: translateY(-50%);
      }
    }
  }
}
.tag--trend {
  font-weight: 500;
  border-radius: 3px;
  border: 1px solid #eff0f1;
  padding: 1.5px 10px 1.5px 20px;
  height: 26px;
  .tag--trend-ratio {
    font-size: 11px;
    right: 0;
    top: -3px;
    transform: translateY(-100%);
  }
  .tag--trend-name {
    z-index: 2;
    width: 100%;
  }
  .tag--trend-background {
    background-color: #d6d9dc;
    width: 50%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
  }
  &:before {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #9199a1;
    top: 50%;
    left: 6px;
    transform: translateY(-50%);
    z-index: 2;
  }
}
</style>
