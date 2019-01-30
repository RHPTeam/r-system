<template>
  <div class="page--wrapper">
    <div class="page--content d_flex">
      <div class="main">
        <app-info/>
        <app-content :posts="posts"/>
      </div>
      <app-user-job/>
    </div>
  </div>
</template>

<script>
  import PostService from '@/services/modules/post.service'

  import AppInfo from './components/info'
  import AppContent from './components/content'
  import AppUserJob from '@/components/user/user-jobs'

  export default {
    components: {
      AppInfo,
      AppContent,
      AppUserJob
    },
    computed: {
      posts () {
        return this.$store.getters.posts;
      }
    },
    async mounted () {
      await PostService.index().then(res => {
        this.$store.dispatch('getAllPosts', res.data.data)
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "./../../../assets/scss/rhelp/main-content";
  @import "index";
</style>
