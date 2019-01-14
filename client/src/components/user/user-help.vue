<template>
    <div class="card help">
        <div class="card_body position_relative">
            <h5 class="card_title font_weight_bold">Know</h5>
            <p class="help--text">Q&A for work</p>
            <span class="help--icon position_absolute"><icon-base icon-name="idea" width="75" height="75" viewBox="0 0 520 525"><icon-idea /></icon-base></span>
            <button class="btn btn_outline_primary help--btn">Tìm hiểu thêm</button>
        </div>
    </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconIdea from "@/components/icons/IconIdea";
export default {
  components: {
    IconBase,
    IconIdea
  }
};
</script>

<style scoped lang="scss">
.help {
  .card_title {
    font-size: 16px;
    margin-bottom: 5px;
  }
  .help--text {
    font-size: 13px;
    font-weight: 500;
    line-height: 1.23;
    letter-spacing: 0.1px;
  }
  .help--icon {
    right: 0;
    top: 10px;
  }
  .help--btn {
    width: 100%;
  }
}
</style>
