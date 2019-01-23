<template>
  <div class="about--company job--border pb_3 pt_3">
    <h4>About company</h4>
    <p>{{job[0].infoCompany}}</p>
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
<script>
export default {
  props: ["job"]
};
</script>
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
