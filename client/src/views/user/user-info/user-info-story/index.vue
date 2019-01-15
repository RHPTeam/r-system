<template>
  <div class="content">
    <div class="no_g">
      <div class="r">
        <div class="c_md_9 c_12">
          <div class="card card--user-story">
            <div class="card_body">
              <user-story-info/>
              <user-story-about/>
              <user-story-frame/>
              <user-story-hobby/>
            </div>
          </div>
        </div>
        <div class="c_md_3 c_12 pl_md_2">
          <user-story-aside/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserStoryInfo from "./components/user-story-info"
import UserStoryAbout from "./components/user-story-about"
import UserStoryFrame from "./components/user-story-frame"
import UserStoryHobby from "./components/user-story-hobby"
import UserStoryAside from "./components/user-story-aside"
export default {
  components: {
    UserStoryInfo,
    UserStoryAbout,
    UserStoryFrame,
    UserStoryHobby,
    UserStoryAside
  }
}
</script>
<style lang="scss" scoped>
.content {
  padding: 20px;
}
</style>
