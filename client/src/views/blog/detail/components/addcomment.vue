<template>
  <div class="addcomment">
    <input type="text" name="" class="" placeholder="Nhập nội dung bình luận...">
    <!-- <span class="narbar--search-border"></span> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.addcomment {
  background-color: #fff;
  padding: 30px 55px;
  font-size: 32px;

  input {
    padding: 10px;
    display: block;
    width: 100%;
    outline: none;
    border: none;
    transition: all 0.5s ease;
    border-bottom: 2px solid #707070;

    &:focus {
      border-color: #776ab0;
    }

    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #707070;
    }

    ::-moz-placeholder {
      /* Firefox 19+ */
      color: #707070;
    }

    :-ms-input-placeholder {
      /* IE 10+ */
      color: #707070;
    }

    :-moz-placeholder {
      /* Firefox 18- */
      color: #707070;
    }
  }
}
</style>
