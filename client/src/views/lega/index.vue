<template>
    <div class="ct_fl" >
        <app-top-bar/>
        <div class="r wrapper">
            <div class="c_lg_3 c_md_4 c_xs_12 c_sm_12">
                <app-site-menu :arNav="arNav"/>
            </div>
            <div class="c_lg_9 c_md_8 c_xs_12 c_sm_12">
                <router-view />
            </div>
           
        </div>
    </div>
</template>

<script>
import AppSiteMenu from "@/components/sidebar/menu-lega";
import AppTopBar from "@/components/navbar/header";
export default {
  components: {
    AppSiteMenu,
    AppTopBar
  },
  data() {
    return {
      arNav: [
        {
          router_name: "lega-public",
          content: "Public Network Terms of Service",
          children: []
        },
        {
          router_name: "lega-private",
          content: "Private Network Terms of Service",
          children: []
        },
        {
          router_name: "lega-privacy",
          content: "Privacy Policy",
          children: []
        },
        {
          router_name: "due-start",
          content: "Data Security and Due Process",
          children: [
            {
              router_name: "due-data-security",
              content: "Data Security Overview",
              children: []
            },
            {
              router_name: "due-data-subjects",
              content: "Data Subjects (You)",
              children: []
            },
            {
              router_name: "due-data-controllers",
              content: "Data Controllers (Customers)",
              children: []
            },
            {
              router_name: "due-data-processors",
              content: "Data Processors (Vendors)",
              children: []
            }
          ]
        },

        {
          router_name: "lega-cookie",
          content: "Cookie Policy",
          children: []
        },
        {
          router_name: "lega-contact",
          content: "Contact",
          children: []
        }
      ]
    };
  }
};
</script>

<style  lang="scss">
.wrapper {
  font-size: 1.15384615rem !important;
  padding: 30px 5%;

  .gs32 > .grid,
  .gs32 > .grid--cell {
    margin: 16px;
  }

  .fw-bold {
    font-weight: 700 !important;
  }

  .lh-sm {
    line-height: 1.15384615 !important;
  }

  .mb32 {
    margin-bottom: 32px !important;
  }

  a {
    color: #07c;
    text-decoration: none;
  }

  a:hover {
    color: darkblue;
  }

  .my4 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }

  .lh-lg {
    color: #3b4045 !important;
    line-height: 1.61538462 !important;
  }

  .fs-body2 {
    font-size: 1.15384615rem !important;
  }

  > ul {
    margin-left: 30px;
    margin-bottom: 1em;
  }
}
</style>
