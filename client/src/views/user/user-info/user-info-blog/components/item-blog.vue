<template>
  <div class="item r flex_column">
    <div class="item--left ">
      <a href="#" class="blog--name">{{blog.title}}</a>
      <div class="item--time">
        <i>
          <icon-base icon-name="clock-history" viewBox="0 0 500 500">
            <icon-clock-history/>
          </icon-base>
        </i>
        18 giờ trước
      </div>

    </div>
    <div class="item--right ">
      <div class="d_flex align_items_center">
        <div class="blog--tabs  ">
          <span class="tab--name ">javascript</span>
          <span class="tab--name "> vuejs </span>
        </div>
        <div class="item--action">
          <button class="button action--view">
            <icon-base icon-name="eye" viewBox="0 0 480 520">
              <icon-eye/>
            </icon-base>
          </button>
          <button class="button action--edit">
            <icon-base icon-name="pen" viewBox="0 0 9.374 9.328">
              <icon-pen/>
            </icon-base>
          </button>
          <button class="button action--delete" @click="deleteBlog(index)">
            <icon-base icon-name="pen" viewBox="0 0 486.4 486.4">
              <icon-delete/>
            </icon-base>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogService from "@/services//modules/blog.service";

import IconBase from "@/components/icons/IconBase";
import IconClockHistory from "@/components/icons/IconClockHistory";
import IconEye from "@/components/icons/IconEye";
import IconPen from "@/components/icons/IconPen";
import IconDelete from "@/components/icons/IconDelete";

export default {
  props: ["blog", "index"],
  components: {
    IconBase,
    IconClockHistory,
    IconEye,
    IconPen,
    IconDelete
  },

  methods: {
    deleteBlog(index) {
      // Xoa phan tu tren server
      BlogService.delete(this.blog._id);

      // Xoa phan tu trong store
      this.$store.dispatch("deleteBlog", index);
    }
  }
};
</script>

<style scoped lang="scss">
@import "list-blog.scss";

@media (max-width: 450px) {
  .item--action {
    button {
      margin-bottom: 10px;
    }
  }
}
</style>
