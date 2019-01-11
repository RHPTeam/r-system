<template>
    <div class="card history">
        <div class="card_body">
            <h5 class="card_title font_weight_bold">
                <icon-base icon-name="info" viewBox="0 0 525 525"><icon-info /></icon-base>
                Thông tin
            </h5>
            <ul class="history--list pl_0 mb_0">
                <li class="history--list-item d_flex justify_content_start align_items_center">
                    <icon-base class="history--list-icon" icon-name="clock-history" viewBox="0 0 500 500"><icon-clock-history /></icon-base>
                    <span>Thành viên 1 năm, 2 tháng</span>
                </li>
                <li class="history--list-item d_flex justify_content_start align_items_center">
                    <icon-base class="history--list-icon" icon-name="eye" width="22" height="22" viewBox="0 0 480 520"><icon-eye /></icon-base>
                    <span>0 lượt xem trang cá nhân</span>
                </li>
                <li class="history--list-item d_flex justify_content_start align_items_center">
                    <icon-base class="history--list-icon" icon-name="clock" viewBox="0 0 100 100"><icon-clock /></icon-base>
                    <span>Lần cuối xem 6 giây</span>
                </li>
                <li class="history--list-item d_flex justify_content_start align_items_center">
                    <icon-base class="history--list-icon" icon-name="calendar" viewBox="0 0 520 520"><icon-calendar /></icon-base>
                    <span>Truy cập 27 ngày liên tiếp</span>
                </li>
            </ul>
        </div>        
    </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconInfo from "@/components/icons/IconInfo";
import IconCalendar from "@/components/icons/IconCalendar";
import IconClock from "@/components/icons/IconClock";
import IconClockHistory from "@/components/icons/IconClockHistory";
import IconEye from "@/components/icons/IconEye";
export default {
  components: {
    IconBase,
    IconInfo,
    IconCalendar,
    IconClock,
    IconClockHistory,
    IconEye
  }
};
</script>

<style scoped lang="scss">
.history {
  color: #242729;
  font-family: Quicksand;
  .card_title {
    font-size: 16px;
  }
  .history--list {
    color: #a8a8a8;
    list-style-type: none;
    .history--list-item {
      margin: 10px 0;
      font-size: 14px;
      font-weight: 500;
    }
    .history--list-icon {
      width: 25px;
      margin-right: 5px;
    }
  }
}
</style>
