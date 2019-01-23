<template>
  <div class="item r flex_column">
    <div class="item--left ">
      <router-link tag="a" class="blog--name" :to="{ name: 'post', params: { blogId: blog._id }}">{{blog.title}}</router-link>
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
          <router-link class="button action--view" tag="button" :to="{ name: 'post', params: { blogId: blog._id }}">
            <icon-base icon-name="eye" viewBox="0 0 480 520">
              <icon-eye/>
            </icon-base>
          </router-link>
          <button class="button action--edit" @click="editBlog(blog._id)">
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
    },
    async editBlog(blogId) {
      const res = await BlogService.show(blogId);
      const formChange = {
        title: "Chỉnh sửa bài viết",
        button: "Cập nhật"
      };
      this.$store.dispatch("formChange", formChange);
      this.$store.dispatch("showBlog", res.data.data);
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
