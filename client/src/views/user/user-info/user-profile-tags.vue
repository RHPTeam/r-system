<template>
    <div class="card tags">
        <div class="card_body">
            <h5 class="card_title font_weight_bold">
                Top Tags <span class="tags--count"> (889)</span>
            </h5>
            <div class="tags--content">
                <div class="ct_f">
                    <div class="r">
                        <div class="c_sm_12 c_md_12 c_lg_12 c_xl_12 p_0">
                            <div class="tag tags--first d_flex justify_content_between align_items_center">
                                <div class="tag--name">pandas</div>
                                <div class="d_flex justify_content_end align_items_center">
                                    <div class="tag--info"><span class="tag--type">SCORE</span>26,743</div>
                                    <div class="tag--info"><span class="tag--type">POSTS</span>12,743</div>
                                    <div class="tag--info"><span class="tag--type">POSTS %</span>98</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="r">
                        <div class="c_sm_6 c_md_6 c_lg_6 c_xl_6 p_0 pr_5px">
                            <div class="tag tags--second d_flex justify_content_between align_items_center">
                                <div class="tag--name">python</div>
                                <div class="d_flex justify_content_end align_items_center">
                                    <div class="tag--info"><span class="tag--type">SCORE</span>26,743</div>
                                    <div class="tag--info"><span class="tag--type">POSTS</span>12,743</div>
                                </div>
                            </div>
                        </div>
                        <div class="c_sm_6 c_md_6 c_lg_6 c_xl_6 p_0 pl_5px">
                            <div class="tag tags--second d_flex justify_content_between align_items_center">
                                <div class="tag--name">python</div>
                                <div class="d_flex justify_content_end align_items_center">
                                    <div class="tag--info"><span class="tag--type">SCORE</span>26,743</div>
                                    <div class="tag--info"><span class="tag--type">POSTS</span>12,743</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="r">
                        <div class="c_sm_4 c_md_4 c_lg_4 c_xl_4 p_0 pr_5px">
                            <div class="tag tags--third d_flex justify_content_between align_items_center">
                                <div class="tag--name">python-3x</div>
                                <div class="">
                                    <div class="tag--info d_block"><span class="tag--type">SCORE</span>26,743</div>
                                    <div class="tag--info d_block"><span class="tag--type">POSTS</span>12,743</div>
                                </div>
                            </div>
                        </div>
                        <div class="c_sm_4 c_md_4 c_lg_4 c_xl_4 p_0 pr_5px pl_5px">
                            <div class="tag tags--third d_flex justify_content_between align_items_center">
                                <div class="tag--name">python-3x</div>
                                <div class="">
                                    <div class="tag--info d_block"><span class="tag--type">SCORE</span>26,743</div>
                                    <div class="tag--info d_block"><span class="tag--type">POSTS</span>12,743</div>
                                </div>
                            </div>
                        </div>
                        <div class="c_sm_4 c_md_4 c_lg_4 c_xl_4 p_0 pl_5px">
                            <div class="tag tags--third d_flex justify_content_between align_items_center">
                                <div class="tag--name">python-3x</div>
                                <div class="">
                                    <div class="tag--info d_block"><span class="tag--type">SCORE</span>26,743</div>
                                    <div class="tag--info d_block"><span class="tag--type">POSTS</span>12,743</div>
                                </div>
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
.tags {
  color: #242729;
  .card_title {
    font-size: 16px;
  }
  .tags--count {
    font-weight: 600;
    color: #a8a8a8;
  }
  .tags--content {
    border-top: 1px solid #e4e4e4;
    .r {
      margin-top: 10px;
    }
    .tag {
      border-radius: 3px;
      background-color: #fafafb;
      padding: 0 7.5px;
      .tag--name {
        border-radius: 3px;
        background-color: #e1ecf4;
        font-weight: 600;
        letter-spacing: 0.2px;
        color: #39739d;
        padding: 0 7.5px;
        white-space: nowrap;
      }
      .tag--type {
        color: #9199a1;
        font-weight: 600;
        margin-right: 5px;
      }
      .tag--info {
        margin-left: 15px;
        font-weight: 600;
      }
    }
  }
}
.tags--first {
  height: 51px;
  font-size: 20px;
  .tag--name {
    height: 35px;
    line-height: 35px;
  }
  .tag--type {
    font-size: 14px;
  }
}
.tags--second {
  height: 48px;
  font-size: 15px;
  .tag--name {
    height: 28px;
    line-height: 28px;
  }
  .tag--type {
    font-size: 11px;
  }
}
.tags--third {
  height: 45px;
  font-size: 12px;
  .tag--name {
    height: 23px;
    line-height: 23px;
  }
  .tag--type {
    font-size: 12px;
  }
}
.pl_5px {
  padding-left: 5px !important;
}
.pr_5px {
  padding-right: 5px !important;
}
</style>
