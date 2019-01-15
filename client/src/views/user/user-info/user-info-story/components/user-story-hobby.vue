<template>
  <div class="pl_md_2 pr_md_2 position_relative">
    <div class="user--hobby text_center">
      <h3>Có xem JAV giống Toản không ?</h3>
      <div class="user--hobby-detail d_flex w_60 m_auto align_items_center">
        <img src="http://thuthuat123.com/uploads/2018/01/27/anh-dai-dien-dep-nhat-39_093007.jpg" width="100"
             height="100" alt="">
        <div class="hobby--destination text_left ml_3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
      <div class="user--hobby-add position_absolute">
        <button>Add Info</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .w_60 {
    width: 60%;
  }

  .user--hobby {
    padding-top: 2em;

    h3 {
      margin-bottom: 2em;
    }

    &:hover {
      background: #f4f8fb;
      .user--hobby-add {
        display: block;
      }
    }
  }

  .user--hobby-add {
    top: 1.5em;
    right: 1em;
    z-index: +9;
    display: none;

    button {
      padding: 8px 35px;
      background: #776ab0;
      border-radius: 3px;
      color: #fff;
      outline: 0;
    }
  }
</style>
