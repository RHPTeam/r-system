<template>
    <div class="aside--item t_name">
      <a href="#">
        <input type="radio" name="" id="item--check">
        <label for="item--check">Lorem Ipsum is simply dummy text of the printing and typesetting industry?</label>
      </a>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.aside--item {
  padding: 0 1em 0.8em 2.8em;
  display: block;
  position: relative;
  cursor: pointer;
  a {
    cursor: pointer;
    color: #0077dd;
    input {
      display: none;
    }
    label {
      display: inline-block;
      border-bottom: 1px solid #e4e4e4;
      padding-bottom: 2em;
    }
    label:before {
      position: absolute;
      content: "";
      width: 20px;
      height: 20px;
      border: 1px solid #e4e4e4;
      border-radius: 50%;
      background: #fff;
      top: 0;
      left: -2px;
    }
  }
}
</style>
