<template>
  <div class="content--head ct_fl ">
    <div class="d_flex align_items_center justify_content_center justify_content_md_start">
      <app-breadcrumb />
      <div class="ml_auto ask--question">
        <button class="btn--question">Ask question</button>
      </div>

    </div>
    <app-tabs :items="items" />
  </div>
</template>
<script>
  import AppTabs from "@/components/navbar/tabs";
  import AppContent from "./itemcontent";
  import AppBreadcrumb from "@/components/breadcrumb/breadcrumb";
  export default {
    data() {
      return {
        items: [{
            name: "Intersting",
            url: "intersting"
          },
          {
            name: "Feature",
            url: "feature",
            qty: 212
          },
          {
            name: "Hot",
            url: "Week"
          },
          {
            name: "Month",
            url: "questioners"
          },

        ]
      }
    },
    components: {
      AppTabs,
      AppBreadcrumb
    }
  };

</script>
<style lang="scss" scoped>
  .content--head {
    padding: 0px 15px !important;
  }

  @media (max-width: 767px) {
    .content--head {
      h3 {
        font-size: 1.5rem;
      }
    }
  }

  .ask--question {


    .btn--question {
      &:hover{
        opacity: 0.8;
      }
      transition:all 0.5s ease;
      width: 126px;
      height: 36px;
      border-radius: 5px;
      background-color: #776ab0;
      color: white;
      padding: 10px 21px;
      width: 100%;
      height: 100%;
      text-align: center;
      display: block !important;
      font-size: 14px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.36;
      letter-spacing: -0.3px;
      text-align: left;
      color: #f5f5f5;
    }
  }

</style>
