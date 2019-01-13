<template>
  <div class="content--head">
    <div class="h_200 d_flex align_items_center justify_content_center justify_content_md_start">
      <h3>Welcome back with RHP Team</h3>
    </div>
    <h4>How to load scss on vuejs</h4>
  </div>
</template>
<script>
export default {
  components: {
  }
};
</script>
<style lang="scss" scoped>
.content--head {
  border-bottom: 1px solid #e4e4e4;
  padding: 20px;
  h3 {
  }
  .head--under {
    > label {
      font-size: 120px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.33;
      letter-spacing: -2.2px;
      text-align: left;
      color: #f5f5f5;
    }
  }
}
.h_200 {
  height: 200px;
}
</style>

<style lang="scss" scoped>
@media (max-width: 767px) {
  .content--head {
    h3 {
      font-size: 1.5rem;
    }
  }
}
</style>
