<template>
  <div class="page--wrapper">
    <div class="page--content d_flex">
      <div class="r">
        <div class="c_md_8 c_12 main">
          <app-info />
          <app-content />
          <!-- <home-page/> -->
          <!-- <app-paginate /> -->
        </div>
        <div class="c_md_4 c_12">
          <app-article/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppContent from "@/views/question/post-question/content"
import AppInfo from "@/components/top/question"
import AppArticle from '@/components/article/question'

// import AppContent from "./user-list/content";
export default {
  components: {
    AppInfo,
    AppArticle,
    AppContent,
  }
};
</script>
<style lang="scss">
.t_default {
    color: #000;
}
.t_name {
    color: #0077dd;
}
.t_link {
    color: #39739d;
}
.t_option {
    color: #a8a8a8;
}
.t_normal {
    color: #6a737c;
}
.t_lg {
    font-size: 16px;
}
.t_md {
    font-size: 14px;
}
.m_0 {
    margin: 0 !important;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.bg_similar {
    background: #fff7e5;
}
h3 {
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 1.34;
    letter-spacing: -0.2px;
    color: #000000;
    cursor: pointer;
}
a {
    color: #0077dd;
    text-decoration: none;
    cursor: pointer;
    &:hover,&:active,&:focus {
        text-decoration: none;
    }
}
.ct--main {
    font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.36;
    letter-spacing: -.1px;
}
.page--wrapper {
  background-color: #fff;
  display: block;
  margin-left: 250px;
  padding-top: 64px;
  position: relative;
  transition: 0.2s ease-in;
}
.page--content {
  background-color: #fafafa;
  .main {
    background-color: #fff;
    width: 100%;
  }
}

/*RESPONSIVE MENU LEFT-BAR*/
// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
}

// Medium devices (tablets, 768px and up)

@media (max-width: 768px) {
  .page--wrapper {
    margin-left: 0;
    .page--content {
      flex-direction: column;
    }
  }
}
@media (min-width: 768px) {
  .page--wrapper {
    margin-left: 70px;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .page--wrapper {
    margin-left: 250px;
  }
}
</style>

