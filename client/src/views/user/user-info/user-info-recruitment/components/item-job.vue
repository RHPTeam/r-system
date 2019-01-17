<template>
  <div class="item r">
    <div class="item--right c">
      <h3 class="job--name">Microsoft - Silicon Valley</h3>
      <div class="job--salary">
        <h4>500.000$ - 1.000.000$</h4>
      </div>
      <div class="job--tabs">
        <span class="tab--name">
          javascript
        </span>
        <span class="tab--name">
          javascript
        </span>
      </div>
    </div>
    <div class="item--left c">
      <p class="item--time">
        <i>
          <icon-base icon-name="clock-history" viewBox="0 0 500 500">
            <icon-clock-history />
          </icon-base>
        </i>
        18 giờ trước
      </p>
      <div class="item--action">
        <button class="button action--view">
          <icon-base icon-name="eye" viewBox="0 0 480 520">
            <icon-eye />
          </icon-base>
        </button>
        <button class="button action--edit">
          <icon-base icon-name="pen" viewBox="0 0 9.374 9.328">
            <icon-pen />
          </icon-base>
        </button>
        <button class="button action--delete">
          <icon-base icon-name="pen" viewBox="0 0 486.4 486.4">
            <icon-delete />
          </icon-base>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import IconBase from "@/components/icons/IconBase";
  import IconClockHistory from "@/components/icons/IconClockHistory";
  import IconEye from "@/components/icons/IconEye";
  import IconPen from "@/components/icons/IconPen";
  import IconDelete from "@/components/icons/IconDelete";
  export default {
    components: {
      IconBase,
      IconClockHistory,
      IconEye,
      IconPen,
      IconDelete
    }
  }
</script>

<style scoped lang="scss">
  @import "list-job.scss";
</style>
