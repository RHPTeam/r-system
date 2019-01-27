<template>
  <div class="r">
    <div class="c_md_4 c_sm_6 c_12" v-for="user in users" :key="user._id">
      <div class="user--item">
        <div class="card_body">
          <div class="d_flex">
            <div class="user--avatar">
              <img
                src="https://i.pinimg.com/originals/94/dd/57/94dd573e4b4de604ea7f33548da99fd6.jpg"
                alt="avatar-user"
                width="100"
              />
            </div>
            <div class="user--info">
              <router-link tag="h3" :to="{ name: 'user-info-profile', params: { userId: user._id } }">{{ user.nameDisplay }}</router-link>
              <p class="text--info text--country"></p>
              <p class="text--info text--counts">1,014</p>
              <div class="info--tag">
                <a href="#" class="text--info tag--item">Javascript</a>
                <a href="#" class="text--info tag--item">Python</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import UserService from "@/services/modules/user.service";

export default {
  computed: {
    users() {
      return this.$store.getters.users;
    }
  },
  async created() {
    await UserService.index().then(res => {
      this.$store.dispatch("index", res.data.data);
    });
  }
};
</script>

<style lang="scss" scoped>
@import "item";
</style>
