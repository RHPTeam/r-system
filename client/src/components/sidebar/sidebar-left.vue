<template>
  <aside class="left--sidebar" :class="{ active: statusMenu }">
    <nav class="sidebar--nav">
      <ul id="sidebarnav" class="in">
        <router-link
          tag="li"
          class="sidebar--item"
          active-class="active"
          exact
          :to="{ name: 'question' }"
        >
          <a class="sidebar--link link--effect"
            ><icon-base icon-name="question" viewBox="0 0 500 500"
              ><icon-question
            /></icon-base>
            <span class="sidebar--item-text">QUESTION</span></a
          >
        </router-link>
        <router-link
          tag="li"
          class="sidebar--item"
          active-class="active"
          :to="{ name: 'job' }"
        >
          <a class="sidebar--link link--effect"
            ><icon-base icon-name="jobs" viewBox="0 0 500 500"
              ><icon-jobs
            /></icon-base>
            <span class="sidebar--item-text">JOBS</span></a
          >
        </router-link>
        <router-link
          tag="li"
          class="sidebar--item"
          active-class="active"
          :to="{ name: 'lega-public-start' }"
        >
          <a class="sidebar--link link--effect"
            ><icon-base icon-name="docs" viewBox="0 0 500 500"
              ><icon-docs
            /></icon-base>
            <span class="sidebar--item-text">DOCUMENTATIONS</span>
            <sup class="new">New</sup></a
          >
        </router-link>
        <router-link
          tag="li"
          class="sidebar--item"
          active-class="active"
          :to="'/users'"
        >
          <a class="sidebar--link link--effect"
            ><icon-base icon-name="tags" viewBox="0 0 60 60"
              ><icon-tags
            /></icon-base>
            <span class="sidebar--item-text">TAGS</span></a
          >
        </router-link>
        <router-link
          tag="li"
          class="sidebar--item"
          active-class="active"
          :to="'/users'"
          ><a class="sidebar--link link--effect">
            <icon-base icon-name="user" viewBox="0 0 60 60"
              ><icon-user
            /></icon-base>
            <span class="sidebar--item-text">USERS</span></a
          >
        </router-link>
        <router-link
          tag="li"
          class="sidebar--item"
          active-class="active"
          :to="'/users'"
          ><a class="sidebar--link link--effect">
            <icon-base icon-name="rank" viewBox="0 0 500 500"
              ><icon-rank
            /></icon-base>
            <span class="sidebar--item-text">RANKS</span></a
          >
        </router-link>
        <router-link
          tag="li"
          class="sidebar--item"
          active-class="active"
          :to="'/users'"
          ><a class="sidebar--link link--effect">
            <icon-base icon-name="ask" viewBox="0 0 500 500"
              ><icon-ask
            /></icon-base>
            <span class="sidebar--item-text">ASK QUESTIONS</span></a
          >
        </router-link>
        <router-link
          tag="li"
          class="sidebar--item"
          active-class="active"
          :to="'/users'"
          ><a class="sidebar--link link--effect">
            <icon-base icon-name="inbox" viewBox="0 0 500 500"
              ><icon-inbox
            /></icon-base>
            <span class="sidebar--item-text">INBOX</span>
            <span class="count">21</span></a
          >
        </router-link>
      </ul>
    </nav>
  </aside>
</template>
<script>
import IconBase from "../icons/IconBase";
import IconQuestion from "../icons/IconQuestion";
import IconJobs from "../icons/IconJobs";
import IconDocs from "../icons/IconDocs";
import IconTags from "../icons/IconTags";
import IconUser from "../icons/IconUser";
import IconAsk from "../icons/IconAsk";
import IconInbox from "../icons/IconInbox";
export default {
  components: {
    IconBase,
    IconQuestion,
    IconJobs,
    IconDocs,
    IconTags,
    IconUser,
    IconAsk,
    IconInbox
  },
  computed: {
    statusMenu() {
      return this.$store.getters.statusMenu;
    }
  }
};
</script>
<style lang="scss" scoped>
.left--sidebar {
  background: #fff;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  font-family: "Quicksand", sans-serif;
  height: 100%;
  padding-top: 64px;
  position: fixed;
  top: 0;
  transition: 0.2s ease-in;
  z-index: 10;
}
.sidebar--nav {
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
    }
    a.sidebar--link {
      align-items: center;
      color: #a8a8a8;
      display: flex;
      line-height: 25px;
      opacity: 0.6;
      padding: 12px 20px;
      text-decoration: none;
      white-space: nowrap;
      vertical-align: middle;
      &:hover,
      &:active {
        opacity: 1;
        color: #000;
      }
    }
    .link--effect {
      cursor: pointer;
      overflow: hidden;
      position: relative;
      transition: all 0.1s ease-out;
      user-select: none;
      will-change: opacity, tranform;
    }
    .sidebar--item-text {
      margin-left: 10px;
    }
    .new {
      color: red;
      padding-left: 5px;
      text-transform: uppercase;
    }
    .count {
      color: red;
      margin-left: auto;
    }
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
  .left--sidebar {
    left: -250px;
    &.active {
      left: 0;
      width: 250px;
    }
  }
}
@media (min-width: 768px) {
  .left--sidebar {
    width: 70px;
    &:hover {
      width: 250px;
      svg {
        width: 18px;
      }
      .sidebar--nav {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }
      .sidebar--item-text,
      .new,
      .count {
        display: block;
      }
    }
    svg {
      width: 70px;
    }
    .sidebar--item-text,
    .new,
    .count {
      display: none;
    }
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .left--sidebar {
    width: 250px;
    svg {
      width: 18px;
    }
    .sidebar--item-text,
    .new,
    .count {
      display: block;
    }
  }
}
</style>
