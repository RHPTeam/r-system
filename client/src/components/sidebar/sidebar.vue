<template>
  <aside class="left--sidebar" :class="{ active: statusMenu }">
    <nav class="sidebar--nav">
      <ul id="sidebarnav" class="in">
        <router-link
          tag="li"
          class="sidebar--item"
          active-class="active"
          exact
          :to="{ name: 'question-list' }"
        >
          <a class="sidebar--link link--effect"
            ><icon-base icon-name="question" viewBox="0 0 500 500"
              ><icon-question
            /></icon-base>
            <span class="sidebar--item-text pt_2">QUESTION</span></a
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
            <span class="sidebar--item-text pt_2">JOBS</span></a
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
            <span class="sidebar--item-text pt_2">DOCUMENTATIONS</span>
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
            <span class="sidebar--item-text pt_2">TAGS</span></a
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
            <span class="sidebar--item-text pt_2">USERS</span></a
          >
        </router-link>
        <router-link
          tag="li"
          class="sidebar--item"
          active-class="active"
          :to="'/users'"
          ><a class="sidebar--link link--effect">
            <icon-base icon-name="star-circle" viewBox="0 0 500 500"
              ><icon-star-circle
            /></icon-base>
            <span class="sidebar--item-text pt_2">RANKS</span></a
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
            <span class="sidebar--item-text pt_2">ASK QUESTIONS</span></a
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
            <span class="sidebar--item-text pt_2">INBOX</span>
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
import IconStarCircle from "../icons/IconStarCircle";
export default {
  components: {
    IconBase,
    IconQuestion,
    IconJobs,
    IconDocs,
    IconTags,
    IconUser,
    IconAsk,
    IconInbox,
    IconStarCircle
  },
  computed: {
    statusMenu() {
      return this.$store.getters.statusMenu;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "sidebar";
</style>
