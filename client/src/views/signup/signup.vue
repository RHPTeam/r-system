<template>
  <div class="rhp">
    <div class="wrap">
      <div class="wrap--login">
        <form class="login--form validate--form" @submit.prevent="submit">
					<span class="login--form-title">
						Join our here!!!
					</span>
          <div class="wrap--input validate--input">
            <input class="form_control" type="text" name="email" placeholder="Display Name">
          </div>
          <div class="wrap--input validate--input">
            <input class="form_control" type="text" name="email" placeholder="Email ">
          </div>
          <div class="wrap--input validate--input">
            <input class="form_control" type="password" name="pass" placeholder="Password">
          </div>
          <div class="wrap--input validate--input">
            <input class="form_control" type="password" name="pass" placeholder="Confirm Password">
          </div>
          <div class="login--form-btn">
            <button type="submit" class="form--btn">
              Sign Up
            </button>
          </div>
          <div class="signup text-center p-t-46 p-b-20">
            <a href="/signin" class="txt2">
              Have your account! Sign In here
            </a>
          </div>
          <div class="login-form-social flex-c-m">
            <a href="#" class="login-form-social-item flex-c-m bg1 m-r-5">
              <!--<i class="fa fa-facebook-f" aria-hidden="true"></i>-->
            </a>
            <a href="#" class="login-form-social-item flex-c-m bg2 m-r-5">
              <!--<i class="fa fa-twitter" aria-hidden="true"></i>-->
            </a>
          </div>
        </form>
        <div class="bg">
          <img :src="`${base}images/bg/bg-01.jpg`" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      base: process.env.BASE_URL
    };
  },
  methods: {
    submit() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "signup";
</style>
