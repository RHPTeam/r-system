<template>
    <div class="answers--head d_flex">
        <h3 class="text_left">1 Answers</h3>
        <ul class="answers--filter text_right">
            <li class="t_normal">newest</li>
            <li class="t_normal">oldest</li>
            <li class="t_normal filter--active">votes</li>
        </ul>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.answers--head {
  border-bottom: 1px solid #e4e4e4;
  h3 {
    width: 50%;
  }
  .answers--filter {
    width: 50%;
    li {
      position: relative;
      display: inline-block;
      padding: 12px;
      border: 1px solid transparent;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      &:before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: transparent;
      }
      &.filter--active {
        font-weight: 500;
        border-color: #e4e4e4;
        border-bottom-color: transparent;
        cursor: default;
        &:before {
          background: #776ab0;
        }
      }
    }
  }
  .answers--sources {
    padding-top: 19px;
  }
}
</style>
