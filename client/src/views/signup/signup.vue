<template>
  <div class="rhp">
    <div class="wrap">
      <div class="wrap--login">
        <form class="login--form validate--form" @submit.prevent="submit">
					<span class="login--form-title">
						Join our here!!!
					</span>
          <app-alert :message="message" :type="type" />
          <div class="wrap--input validate--input"
               :class="{ errors: statusClassError.userid, passed: statusClassPassed.userid }">
            <input class="form_control" type="text" name="userid" placeholder="Username" v-model="user.userid">
            <span class="error--text">{{ errorText.userid }}</span>
          </div>
          <div class="wrap--input validate--input"
               :class="{ errors: statusClassError.nameDisplay, passed: statusClassPassed.nameDisplay }">
            <input class="form_control" type="text" name="email" placeholder="Display Name" v-model="user.nameDisplay">
            <span class="error--text">{{ errorText.nameDisplay }}</span>
          </div>
          <div class="wrap--input validate--input"
               :class="{ errors: statusClassError.email, passed: statusClassPassed.email }">
            <input class="form_control" type="text" name="email" placeholder="Email " v-model="user.email">
            <span class="error--text">{{ errorText.email }}</span>
          </div>
          <div class="wrap--input validate--input"
               :class="{ errors: statusClassError.password, passed: statusClassPassed.password }">
            <input class="form_control" type="password" name="pass" placeholder="Password" v-model="user.password">
            <span class="error--text">{{ errorText.password }}</span>
          </div>
          <div class="wrap--input validate--input"
               :class="{ errors: statusClassError.rPassword, passed: statusClassPassed.rPassword }">
            <input class="form_control" type="password" name="pass" placeholder="Confirm Password"
                   v-model="user.rPassword">
            <span class="error--text">{{ errorText.rPassword }}</span>
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
  import AppAlert from '@/components/shared/alert';
  import UserService from '@/services/modules/user.service';
  export default {
    data() {
      return {
        base: process.env.BASE_URL,
        user: {
          userid: '',
          nameDisplay: '',
          email: '',
          password: '',
          rPassword: ''
        },
        statusFinnishForm: false,
        errorText: {
          userid: '',
          nameDisplay: '',
          email: '',
          password: '',
          rPassword: ''
        },
        statusClassError: {
          userid: false,
          nameDisplay: false,
          email: false,
          password: false,
          rPassword: false
        },
        statusClassPassed: {
          userid: false,
          nameDisplay: false,
          email: false,
          password: false,
          rPassword: false
        },
        message: '',
        type: ''
      };
    },
    methods: {
      async submit() {
        if (!this.statusClassPassed.userid || !this.statusClassPassed.nameDisplay || !this.statusClassPassed.email || !this.statusClassPassed.password || !this.statusClassPassed.rPassword) {
          this.message = 'Có lỗi xảy ra trong quá trình đăng ký. Thử lại!';
          this.type = "alert_danger";
          setTimeout(() => {
            this.message = '';
            this.type = '';
          }, 3000);
        }
        const userObj = {
          userid: this.user.userid,
          nameDisplay: this.user.nameDisplay,
          email: this.user.email,
          password: this.user.password
        };
        await this.$store.dispatch('signUp', userObj);
        this.$router.push('/')
      }
    },
    watch: {
      'user.userid'(value) {
        this.errorText.userid = '(*) Tài khoản phải ít nhất 6 kí tự và nhiều nhất 50 kí tự!';
        this.statusClassError.userid = true;
        this.statusClassPassed.userid = false;
        if (value.length > 5 && value.length < 50) {
          this.errorText.userid = '';
          this.statusClassError.userid = false;
          this.statusClassPassed.userid = true;
        } else if (value.length === 0) {
          this.errorText.userid = '';
          this.statusClassError.userid = false;
          this.statusClassPassed.userid = false;
        }
      },
      'user.nameDisplay'(value) {
        this.errorText.nameDisplay = '(*) Tên hiển thị phải ít nhất 6 kí tự!';
        this.statusClassError.nameDisplay = true;
        this.statusClassPassed.nameDisplay = false;
        if (value.length > 5) {
          this.errorText.nameDisplay = '';
          this.statusClassError.nameDisplay = false;
          this.statusClassPassed.nameDisplay = true;
        } else if (value.length === 0) {
          this.errorText.nameDisplay = '';
          this.statusClassError.nameDisplay = false;
          this.statusClassPassed.nameDisplay = false;
        }
      },
      'user.email'(value) {
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.errorText.email = '(*) Email không khả dụng cho định dạng!';
        this.statusClassError.email = true;
        this.statusClassPassed.email = false;
        if (regexEmail.test(value.toLowerCase())) {
          this.errorText.email = '';
          this.statusClassError.email = false;
          this.statusClassPassed.email = true;
        } else if (value.length === 0) {
          this.errorText.email = '';
          this.statusClassError.email = false;
          this.statusClassPassed.email = false;
        }
      },
      'user.password'(value) {
        this.errorText.password = '(*) Mật khẩu nằm trong khoảng 6-20 kí tự!';
        this.statusClassError.password = true;
        this.statusClassPassed.password = false;
        if (value.length > 5 && value.length < 20) {
          this.errorText.password = '';
          this.statusClassError.password = false;
          this.statusClassPassed.password = true;
        } else if (value.length === 0) {
          this.errorText.password = '';
          this.statusClassError.password = false;
          this.statusClassPassed.password = false;
        }
      },
      'user.rPassword'(value) {
        this.errorText.rPassword = '(*) Mật khẩu không trùng nhau!';
        this.statusClassError.rPassword = true;
        this.statusClassPassed.rPassword = false;
        if (value === this.user.password) {
          this.errorText.rPassword = '';
          this.statusClassError.rPassword = false;
          this.statusClassPassed.rPassword = true;
        } else if (value.length === 0) {
          this.errorText.rPassword = '';
          this.statusClassError.rPassword = false;
          this.statusClassPassed.rPassword = false;
        }
      }
    },
    components: {
      AppAlert
    },
  };
</script>

<style lang="scss" scoped>
  @import "signup";
</style>
