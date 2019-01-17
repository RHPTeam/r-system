<template>
  <div class="content--head ct_f">
    <div class="d_flex align_items_center justify_content_center justify_content_md_start">
      <h2 class="title--tags">
        Tabs
      </h2>
    </div>
    <div class="nav--tags r">
      <div class="input--fill c_md_4 c_lg_3 c_sm_12 c_xs_12">
        <icon-base class="icon--search" icon-name="search" viewBox="0 0 65 65">
          <icon-search />
        </icon-base>
        <input  placeholder="Fillter by tag name">
      </div>
      <div class="tab--fill o_md_4 o_lg_6 c_lg_3 c_md_4 c_sm_12 c_xs_12">
        <app-tabs :items="items" />
      </div>
    </div>
  </div>
</template>
<script>
import AppTabs from "@/components/navbar/tabs";
import IconBase from "@/components/icons/IconBase";
import IconSearch from "@/components/icons/IconSearch";
export default {
  data() {
    return {
      items: [
        {
          name: "Popular",
          url: "popular"
        },
        {
          name: "Name",
          url: "name"
        },
        {
          name: "New",
          url: "new"
        }
      ]
    };
  },
  components: {
    AppTabs,
    IconSearch,
    IconBase
  }
};
</script>
<style lang="scss" scoped>
.content--head {
  padding: 0px 2%;
  padding-top: 50px;
  .nav--tags {
    .input--fill {
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
        width: 100%;
        border: 1px solid #999999;
        border-radius: 5px;
      }
    }
  }

  .title--tags {
    margin-bottom: 32px;
    width: 54px;
    height: 35px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.35;
    letter-spacing: 0.6px;
    text-align: left;
    color: #999999;
  }
}

@media (max-width: 767px) {
  .content--head {
    padding: 0px 15px;
    padding-top:50px;
    .nav--tags {
      .input--fill {
        margin-bottom: 10px;

        .icon--search {
          width: 25px;
          height: 20px;
          top: 15px;
          left: 20px;
          color: #999999;
        }

        input {
          padding: 9px 0px;
          padding-left: 30px !important;
          height: 75%;
        }
      }
    }
  }
}
</style>
