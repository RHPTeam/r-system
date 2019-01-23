<template>
  <div class="content--head ct m_0">
    <div class="d_flex align_items_center justify_content_center justify_content_md_start">
      <app-breadcrumb/>
    </div>
    <div class="r">
      <div class="head--search c_12 c_sm_12 c_md_5 c_xl_5">
        <icon-base class="icon--search" icon-name="search" viewBox="0 0 65 65">
          <icon-search />
        </icon-base>
        <input  placeholder="Fillter by tag name">
      </div>
      <div class="c_12 c_sm_12 c_md_7 c_xl_7 align_items_end">
        <app-tabs :items="items"/>
      </div>
    </div>
  </div>
</template>
<script>
import IconBase from "@/components/icons/IconBase";
import IconSearch from "@/components/icons/IconSearch";
import AppTabs from "@/components/navbar/tabs";
import AppBreadcrumb from "@/components/breadcrumb/breadcrumb";
export default {
  data() {
    return {
      items: [
        {
          name: "All",
          url: "all"
        },
        {
          name: "New",
          url: "new_job"
        },
        {
          name: "Salary",
          url: "salary"
        }
      ]
    };
  },
  components: {
    IconBase,
    IconSearch,
    AppTabs,
    AppBreadcrumb
  }
};
</script>
<style lang="scss" scoped>
.content--head {
  border-bottom: 1px solid #e4e4e4;
  padding-bottom: 10px;
}
.head--search {
  padding-top: 10px;
  position: relative;
  .icon--search {
    width: 25px;
    height: 25px;
    top: 19px;
    left: 26px;
    position: absolute;
    color: #999999;
  }

  input {
    outline: none;
    padding: 9px 0px;
    padding-left: 40px !important;
    width: 80%;
    border: 1px solid #999999;
    border-radius: 5px;
  }
}

@media (max-width: 767px) {
  .content--head {
    h3 {
      font-size: 1.5rem;
    }
    .head--search {
      margin-bottom: 1em;
    }
  }
}
</style>
