<template>
  <div class="r">
    {{ usersRes }}
    <div class="c_md_4 c_sm_6 c_12" v-for="user in users">
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
              <h3>{{ user.name }}</h3>
              <p class="text--info text--country">{{ user.email }}</p>
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
        return this.$store.getters.users
      }
    },
    async created() {
      await UserService.index().then((res) => {
        this.$store.dispatch("index", res.data.data)
      })
    }
  };
</script>

<style lang="scss" scoped>
  .user--item {
    margin: 0 0 0 5px;
  }

  .card_body {
    padding-left: 0;

    .user--avatar {
      width: 100px;

      img {
        cursor: pointer;
      }
    }

    .user--info {
      margin-left: 5px;
      overflow: hidden;

      h3 {
        color: #0077dd;
        font-size: 18px;
        font-weight: 600;
        margin: 0;
        cursor: pointer;
      }

      p {
        margin: 0;
      }

      p.text--counts {
        color: #707070;
        font-weight: 600;
        letter-spacing: -0.3px;
      }

      .text--country {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
</style>
