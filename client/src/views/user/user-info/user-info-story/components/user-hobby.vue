<template>
  <div class="pl_md_2 pr_md_2 position_relative">
    <div class="user--hobby text_center">
      <h3>Sở thích của bạn là gì ?</h3>
      <div class="user--hobby-detail d_flex w_60 m_auto align_items_center">
        <icon-base icon-name="read" width="100" height="100" viewBox="0 0 120 120"
        ><icon-read
        /></icon-base>
        <div class="hobby--destination text_left ml_3">
          Thêm một vài thông tin cần thiết đi nào ...!!!
        </div>
      </div>
      <div class="user--hobby-add position_absolute">
        <button>Add Info</button>
      </div>
      <div class="user--hobby-mobile text_center">
        <button>Add Info</button>
      </div>
    </div>
  </div>
</template>
<script>
import IconBase from "@/components/icons/IconBase";
import IconRead from "@/components/icons/rank/IconRead";
export default {
  components: {
    IconBase,
    IconRead
  }
};
</script>
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
.user--hobby-mobile {
  display: none;
}
@media (max-width: 767px) {
  .user--hobby-add {
    display: none;
  }
  .user--hobby-mobile {
    display: none;
    button {
      padding: 8px 35px;
      background: #776ab0;
      border-radius: 3px;
      color: #fff;
      outline: 0;
    }
  }
  .user--hobby {
    &:hover {
      .user--hobby-add {
        display: none;
      }
      .user--hobby-mobile {
        display: block;
        padding-bottom: 1em;
        transition: all 2s;
        &:focus {
          background: #ff6700;
        }
      }
    }
  }
}
</style>
