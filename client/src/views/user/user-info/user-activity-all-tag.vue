<template>
  <div class="tag">
    <div class="tag--head pb_1 mb_3">
      <div class="tag--title">Thẻ <span class="tag--title-number">(51,302)</span></div>
    </div>
    <div class="tag--content ct_f p_0">
    <div class="r">
      <div class="tag--item c_12 c_sm_6 c_md_6 c_xl_6 mb_3">
        <span class="tag--item-score">59k</span>
        <span class="tag--item-name ml_1 mr_1">sql</span>
        <span class="tag--item-posts">x 43103</span>
      </div>
      <div class="tag--item c_12 c_sm_6 c_md_6 c_xl_6 mb_3">
        <span class="tag--item-score">59k</span>
        <span class="tag--item-name ml_1 mr_1">sql</span>
        <span class="tag--item-posts">x 43103</span>
      </div>
      <div class="tag--item c_12 c_sm_6 c_md_6 c_xl_6 mb_3">
        <span class="tag--item-score">59k</span>
        <span class="tag--item-name ml_1 mr_1">sql</span>
        <span class="tag--item-posts">x 43103</span>
      </div>
    </div>
  </div>
    <div class="tag--more mt_4">
      <span>Xem thêm &#8594;</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.tag--head {
  border-bottom: 1px solid #e9ebee;
  .tag--title {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.24;
    letter-spacing: 0.2px;
    color: #0077dd;
    .tag--title-number {
      color: #9199a1;
    }
  }
}
.tag--content {
  .tag--item {
    letter-spacing: 0.1px;
    font-weight: 600;
    .tag--item-score {
      font-size: 13px;
    }
    .tag--item-name {
      font-size: 12px;
      border-radius: 3px;
      background-color: #e1ecf4;
      color: #39739d;
      padding: 4.5px 6px;
    }
    .tag--item-posts {
      font-size: 11px;
      color: #a8a8a8;
    }
  }
}
.tag--more {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.23;
  letter-spacing: 0.1px;
  color: #0077dd;
  cursor: pointer;
}
</style>
