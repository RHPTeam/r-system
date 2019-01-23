<template>
  <div class="content">
    <div class="ct_f p_0 p_md_2">
      <div class="r">
        <div class="c_12 c_sm_12 c_md_6 c_xl_6 pl_md_2 pr_md_2">
          <app-blog-list/>
        </div>
        <div class="c_12 c_sm_12 c_md_6 c_xl_6 pl_md_2 pr_md_2">
          <app-blog-form/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBlogList from "./components/list";
import AppBlogForm from "./components/form";
export default {
  components: {
    AppBlogList,
    AppBlogForm
  }
};
</script>

<style scoped lang="scss">
</style>
