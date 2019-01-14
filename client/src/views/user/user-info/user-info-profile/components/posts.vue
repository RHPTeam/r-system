<template>
    <div class="card posts">
        <div class="card_body">
            <div class="d_flex justify_content_between align_items_center">
                <h5 class="card_title font_weight_bold">
                    Top Posts <span class="posts--count"> (889)</span>
                </h5>
                <div class="posts--filter d_flex justify_content_end align_items_center">
                    <ul class="posts--filter-list d_flex justify_content_start align_items_center pl_0 mb_0 pr_2">
                        <li class="position_relative active">Tất cả</li>
                        <li class="position_relative">Câu hỏi</li>
                        <li class="position_relative">Trả lời</li>
                    </ul>
                    <ul class="posts--filter-list d_flex justify_content_start align_items_center pl_2 mb_0">
                        <li class="position_relative active">Bình chọn</li>
                        <li class="position_relative">Mới nhất</li>
                    </ul>
                </div>
            </div>
            <div class="posts--content">
              <div class="posts--item d_flex justify_content_start align_items_center">
                <div class="posts--item-count mr_2 bg_success">80</div>
                <div class="posts--item-title mr_2">Count unique values with pandas per groups</div>
                <div class="posts--item-time ml_auto">20 - 10 - 2019</div>
                <div class="posts--item-see ml_2"><icon-base class="history--list-icon" icon-name="eye" width="22" height="22" viewBox="0 0 480 520"><icon-eye /></icon-base></div>
              </div>
              <div class="posts--item d_flex justify_content_start align_items_center">
                <div class="posts--item-count mr_2 bg_success">80</div>
                <div class="posts--item-title mr_2">Count unique values with pandas per groups</div>
                <div class="posts--item-time ml_auto">20 - 10 - 2019</div>
                <div class="posts--item-see ml_2"><icon-base class="history--list-icon" icon-name="eye" width="22" height="22" viewBox="0 0 480 520"><icon-eye /></icon-base></div>
              </div>
              <div class="posts--item d_flex justify_content_start align_items_center">
                <div class="posts--item-count mr_2 bg_success">80</div>
                <div class="posts--item-title mr_2">Count unique values with pandas per groups</div>
                <div class="posts--item-time ml_auto">20 - 10 - 2019</div>
                <div class="posts--item-see ml_2"><icon-base class="history--list-icon" icon-name="eye" width="22" height="22" viewBox="0 0 480 520"><icon-eye /></icon-base></div>
              </div>
            </div>
            <div class="text_right mt_3">
              <span class="posts--more">
                Xem tất cả <span class="position_relative">câu hỏi</span> và <span class="position_relative">trả lời</span>
              </span>
            </div>
        </div>
    </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconEye from "@/components/icons/IconEye";
export default {
  components: {
    IconBase,
    IconEye
  }
};
</script>

<style scoped lang="scss">
.posts {
  color: #242729;
  .card_title {
    font-size: 16px;
  }
  .posts--count {
    font-weight: 600;
    color: #a8a8a8;
  }
  .posts--content {
    border-top: 1px solid #e4e4e4;
  }
}
.posts--filter {
  .posts--filter-list {
    list-style-type: none;
    border-left: 2px solid #3b4045;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.23;
    letter-spacing: 0.1px;
    color: #9199a1;
    &:first-child {
      border-left: none;
    }
    li {
      margin: 0 5px;
      padding-left: 2.5px;
      padding-right: 2.5px;
      transition: all 0.5s ease;
      cursor: pointer;
      &:after {
        content: "";
        position: absolute;
        bottom: -9px;
        left: 0;
        width: 0;
        background-color: #776ab0;
        height: 2px;
        transition: all 0.4s ease;
      }
      &.active,
      &:hover {
        color: #3b4045;
        &:after {
          width: 100%;
        }
      }
    }
  }
}
.posts--item {
  border-bottom: 1px solid #e4e4e4;
  min-height: 48px;
  font-weight: 600;
  .posts--item-count {
    border-radius: 3px;
    height: 24px;
    min-width: 36px;
    text-align: center;
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
    line-height: 24px;
  }
  .posts--item-title {
    font-size: 15px;
    line-height: 1.6;
    letter-spacing: 0.2px;
    color: #0077dd;
  }
  .posts--item-time {
    font-size: 13px;
    line-height: 1.85;
    letter-spacing: 0.1px;
    color: #9199a1;
    min-width: 85px;
  }
  .posts--item-see {
    color: #776ab0;
    width: 18px;
    padding-top: 5px;
  }
}
.posts--more {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1px;
  color: #9199a1;
  border-bottom: 1.5px solid #9199a1;
  padding-bottom: 2px;
  span {
    color: #0077dd;
    cursor: pointer;
    &:after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      background-color: #0077dd;
      height: 1.5px;
    }
  }
}
</style>
