<template>
    <div class="card level">
        <div class="card_body">
            <h5 class="card_title font_weight_bold">
                <icon-base icon-name="chevron" viewBox="0 0 500 500"><icon-chevron /></icon-base>
                Cấp độ người dùng
            </h5>
            <p class="card_text text_center mb_0">Cấp độ người dùng là điểm thể hiện trình độ, tần suất hoạt động của người dùng.</p>
            <div class="level--icon text_center"><icon-base icon-name="m2" width="120" height="120" viewBox="0 0 510 510"><icon-m2/></icon-base></div>
            <h4 class="level--name text_center font_weight_bold">Master 2</h4>
            <div class="level--score text_center">
                <icon-base icon-name="star-gold" viewBox="0 0 515 515"><icon-star-gold /></icon-base>
                1,583
                <icon-base icon-name="star-gold" viewBox="0 0 515 515"><icon-star-gold /></icon-base>
            </div>
        </div>
    </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconChevron from "@/components/icons/IconChevron";
import IconStarGold from "@/components/icons/IconStarGold";
import IconM2 from "@/components/icons/rank/IconM2";
export default {
  components: {
    IconBase,
    IconChevron,
    IconStarGold,
    IconM2
  }
};
</script>

<style scoped lang="scss">
.level {
  color: #242729;
  .card_title {
    font-size: 16px;
  }
  .card_text {
    font-size: 12px;
    font-weight: 500;
    padding-bottom: 10px;
  }
  .level--icon {
    padding-top: 10px;
    border-top: 1px solid #e4e4e4;
  }
  .level--name {
    font-size: 24px;
  }
  .level--score {
    font-size: 20px;
    font-weight: 500;
  }
}
</style>
