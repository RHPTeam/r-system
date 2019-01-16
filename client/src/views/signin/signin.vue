<template>
  <div class="rhp">
    <div class="wrap">
      <div class="wrap--login">
        <form class="login--form validate--form" @submit.prevent="submit">
					<span class="login--form-title">
						Login to continue
					</span>
          <div class="wrap--input validate--input">
            <input class="form_control" type="text" name="email" placeholder="Email or Username">
          </div>
          <div class="wrap--input validate--input">
            <input class="form_control" type="password" name="pass" placeholder="Password">
          </div>
          <div class="other d_flex justify_content_between align_items_center">
            <div class="contact-form-checkbox">
              <input class="input-checkbox" id="ckb1" type="checkbox" name="remember-me">
              <label class="label--checkbox" for="ckb1">
                Remember me
              </label>
            </div>
            <div>
              <a href="#" class="txt1">
                Forgot Password?
              </a>
            </div>
          </div>
          <div class="login--form-btn">
            <button type="submit" class="form--btn">
              Login
            </button>
          </div>
          <div class="signup text-center p-t-46 p-b-20">
						<a href="/signup" class="txt2">
							or sign up here
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
@import "signin";
</style>
