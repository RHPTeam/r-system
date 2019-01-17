<template>
  <div class="note--question">
    <div class="note--italic">
      <p class="t_normal">By clicking &quot;Post Your Answer&quot;, you acknowledge that you have read our updated <a href="#">terms of service, privacy policy</a> and <a href="#">cookie policy</a>, and that your continued use of the
        website is subject to these policies.</p>
    </div>
    <div class="note--final">
      <p>
        Not the answer you're looking for? Browse other questions tagged
        <a href="#" class="note--final-item t_name">python</a>
        <a href="#" class="note--final-item t_name">javascript</a>
        or
        <a href="#">ask your own question</a>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.note--italic {
  font-size: 13px;
  font-style: italic;
  line-height: 1.31;
  margin-bottom: 25px;
}
.note--final {
  p {
    a.note--final-item.t_name {
      padding: 6px 12px;
      border-radius: 5px;
      margin-right: 10px;
      background: #e1ecf4;
    }
  }
}
</style>
