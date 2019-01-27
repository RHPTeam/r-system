<template>
  <div class="content">
    <div class="no_g">
      <div class="r">
        <div class="c_md_9 c_12">
          <div class="card card--user-story">
            <div class="card_body">
              <user-info/>
              <user-about/>
              <user-frame/>
              <user-hobby/>
            </div>
          </div>
        </div>
        <div class="c_md_3 c_12 pl_md_2">
          <story-aside/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserInfo from "./components/user-info";
import UserAbout from "./components/user-about";
import UserFrame from "./components/user-frame";
import UserHobby from "./components/user-hobby";
import StoryAside from "./components/story-aside";
export default {
  components: {
    UserInfo,
    UserAbout,
    UserFrame,
    UserHobby,
    StoryAside
  }
};
</script>
<style lang="scss" scoped>
.content {
  padding: 20px;
}
</style>
