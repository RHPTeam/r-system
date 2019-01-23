<template>
  <div class="postother ct p_0">
    <div class="r">
      <div class="c_md_4">
        <div class="item">
          <div class="item--title h3">A Recap of Frontend Development in 2018</div>
          <div class="author d_flex justify_content_start align_items_center">
            <div class="author--avatar position_relative">
              <img class="position_absolute" src="http://www.igeacps.it/app/uploads/2018/05/profile_uni_user.png">
            </div>
            <div class="author--info">
              <span class="author--info-name">Lukas Gisder-Dubé</span>
            </div>
          </div>
          <div class="item--reactive d_flex justify_content_end align_items_center">
            <div class="item--reactive-clap d_flex align_items_center">
              <span>10</span>
              <icon-base icon-name="clap" width="36" height="36" viewBox="0 0 25 25">
                <icon-clap/>
              </icon-base>
            </div>
            <div class="item--reactive-comment d_flex align_items_center pl_3">
              <span>8</span>
              <icon-base icon-name="comment" width="35" height="35" viewBox="0 0 560 560">
                <icon-comment/>
              </icon-base>
            </div>
          </div>
        </div>
      </div>
      <div class="c_md_4">
        <div class="item">
          <div class="item--title h3">A Recap of Frontend Development in 2018</div>
          <div class="author d_flex justify_content_start align_items_center">
            <div class="author--avatar position_relative">
              <img class="position_absolute" src="http://www.igeacps.it/app/uploads/2018/05/profile_uni_user.png">
            </div>
            <div class="author--info">
              <span class="author--info-name">Lukas Gisder-Dubé</span>
            </div>
          </div>
          <div class="item--reactive d_flex justify_content_end align_items_center">
            <div class="item--reactive-clap d_flex align_items_center">
              <span>10</span>
              <icon-base icon-name="clap" width="36" height="36" viewBox="0 0 25 25">
                <icon-clap/>
              </icon-base>
            </div>
            <div class="item--reactive-comment d_flex align_items_center pl_3">
              <span>8</span>
              <icon-base icon-name="comment" width="35" height="35" viewBox="0 0 560 560">
                <icon-comment/>
              </icon-base>
            </div>
          </div>
        </div>
      </div>
      <div class="c_md_4">
        <div class="item">
          <div class="item--title h3">A Recap of Frontend Development in 2018</div>
          <div class="author d_flex justify_content_start align_items_center">
            <div class="author--avatar position_relative">
              <img class="position_absolute" src="http://www.igeacps.it/app/uploads/2018/05/profile_uni_user.png">
            </div>
            <div class="author--info">
              <span class="author--info-name">Lukas Gisder-Dubé</span>
            </div>
          </div>
          <div class="item--reactive d_flex justify_content_end align_items_center">
            <div class="item--reactive-clap d_flex align_items_center">
              <span>10</span>
              <icon-base icon-name="clap" width="36" height="36" viewBox="0 0 25 25">
                <icon-clap/>
              </icon-base>
            </div>
            <div class="item--reactive-comment d_flex align_items_center pl_3">
              <span>8</span>
              <icon-base icon-name="comment" width="35" height="35" viewBox="0 0 560 560">
                <icon-comment/>
              </icon-base>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconClap from "@/components/icons/IconClap.vue";
import IconComment from "@/components/icons/IconComment.vue";

export default {
  components: {
    IconBase,
    IconClap,
    IconComment
  }
};
</script>

<style scoped lang="scss">
.postother {
  margin-top: 12px;

  .r {
    padding: 0 10px;

    .c_md_4 {
      padding-left: 5px;
      padding-right: 5px;
    }
  }
}

.item {
  background-color: #ffffff;
  padding: 18px 32px;

  .item--title {
    color: #707070;
  }

  .item--reactive {
    color: #707070;

    span {
      font-size: 20px;
      padding-top: 5px;
      margin-right: 5px;
    }
  }
}

.author {
  margin-top: 20px;
  margin-bottom: 50px;

  .author--avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 30px;

    &:before {
      content: "";
      display: block;
      padding-top: 100%;
    }

    img {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: auto;
    }
  }

  .author--info {
    font-size: 20px;
    color: #707070;
  }
}
</style>
