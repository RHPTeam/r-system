<template>
  <div class="info--question-user justify_content_end d_flex ml_auto">
        <div class="user--level">
            <button type="submit">
                <icon-base icon-name="up" width="25" height="25" viewBox="0 0 400 400"><icon-up /></icon-base>
            </button>
            <div class="level">23</div>
            <button type="submit">
                <icon-base icon-name="down" width="25" height="25" viewBox="0 0 400 400"><icon-down /></icon-base>
            </button>
        </div>
        <div class="user--info justify_content_start">
            <div class="t_normal">asked Aug 4'17 at 6.07</div>
            <div class="user--info-account d_flex">
                <img src="http://webresizer.com/images2/bird1_after.jpg" alt="anh" width="44" height="40" />
                <div class="info--account">
                    <p class="user--name t_name">toangat960</p>
                    <p><span>2,818</span> <span class="gold">Gold</span></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import IconBase from "@/components/icons/IconBase";
import IconUp from "@/components/icons/IconUp";
import IconDown from "@/components/icons/IconDown";
export default {
  components: {
    IconBase,
    IconUp,
    IconDown
  }
};
</script>

<style lang="scss" scoped>
.info--question-user {
  .user--level {
    margin: auto;
    button {
      svg {
        color: #a8a8a8;
      }
    }
    .level {
      font-weight: 500;
      color: #242729;
      margin-bottom: 5px;
    }
  }
  .user--info {
    padding: 5px 10px;
    border-radius: 5px;
    background: #e1ecf4;
    .user--info-account {
      img {
        // width: 45px;
        // height: 40px;
        margin-right: 5px;
        cursor: pointer;
      }
      .info--account {
        p {
          margin-bottom: 5px;
          .gold {
            position: relative;
            margin-left: 1.8em;
          }
          .gold:before {
            content: "";
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: #f2da41;
            position: absolute;
            top: 0.2em;
            left: -1.3em;
          }
        }
      }
    }
  }
}
</style>
