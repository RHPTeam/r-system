<template>
    <div class="ct--main">
        <div class="main">
            <side-bar/>
            <home-page/>
        </div>
    </div>
</template>
<script>
import SideBar from "@/components/sidebar/sidebar-left"
import HomePage from "@/views/question/post-question/homepage"
export default {
  components: {
    SideBar,
    HomePage
  }
};
</script>

<style lang="scss">
.ct--main {
    font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.36;
    letter-spacing: -.1px;
}
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
}
a {
    text-decoration: none;
    &:hover,&:active,&:focus {
        text-decoration: none;
    }
}
.main {
    width: 100%;
    max-width: 1920px;
    height: 100%;
    max-height: 596px;
    background: #fff;
    position: relative;
}
</style>

