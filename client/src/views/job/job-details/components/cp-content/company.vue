<template>
  <div class="about--company job--border pb_3 pt_3">
    <h4>About company</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda atque, blanditiis consequatur consequuntur eius harum minus mollitia, obcaecati porro quam sed similique sint suscipit unde voluptas voluptatem. Corporis, soluta?</p>
    <h4>Benefits</h4>
    <ul>
      <li> Lorem ipsum dolor sit amet.</li>
      <li> Lorem ipsum dolor sit amet.</li>
      <li> Lorem ipsum dolor sit amet.</li>
      <li> Lorem ipsum dolor sit amet.</li>
      <li> Lorem ipsum dolor sit amet.</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.about--company {
  ul {
    margin: 0;
    padding: 0;
    li {
      display: block;
      &:before {
        content: "-";
      }
    }
  }
}
</style>
