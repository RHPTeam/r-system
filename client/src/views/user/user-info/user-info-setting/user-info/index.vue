<template>
  <div class="card form">
    <div class="card_body">
      <h5 class="card_title font_weight_bold">Chỉnh sửa thông tin người dùng</h5>
      <div class="loading" v-if="!user"></div>
      <div v-else class="form--content pt_2">
        <app-alert :type="type" :message="message" />
        <form @submit.prevent="submit">
          <div class="form_group">
            <label for="username">Tên hiển thị</label>
            <input type="text" class="form_control" id="username" v-model="user.nameDisplay" placeholder="Nhập tên">
          </div>
          <div class="form_group">
            <label for="address">Địa chỉ</label>
            <input type="text" class="form_control" id="address" v-model="user.location" placeholder="Nhập địa chỉ">
          </div>
          <div class="form_group">
            <label for="slogan">Câu nói yêu thích của bạn là gì?</label>
            <input type="text" class="form_control" id="slogan" v-model="user.title" placeholder="Nhập câu nói yêu thích của bạn">
          </div>
          <div class="form_group">
            <label for="about">Giới thiệu</label>
            <textarea class="form_control" id="about" v-model="user.about"></textarea>
          </div>
          <div class="live--preview position_relative mb_3">
            <span class="live--preview-tag position_absolute">live preview</span>
            <div class="live--preview-content" v-text="user.about"></div>
          </div>
          <div class="form_group form--social">
            <label>Mạng xã hội</label>
            <div class="loading" v-if="!user.social"></div>
            <div class="form_row" v-else>
              <div class="c c_12 c_sm_4 c_md_12 c_xl_4 mb_3 position_relative">
                <icon-base class="position_absolute form--social-icon" icon-name="link" viewBox="0 0 58 58"><icon-link /></icon-base>
                <input type="text" class="form_control" placeholder="" v-model="user.social.website">
              </div>
              <div class="c c_12 c_sm_4 c_md_12 c_xl_4 mb_3 position_relative">
                <icon-base class="position_absolute form--social-icon" icon-name="twitter" viewBox="0 0 600 600"><icon-twitter /></icon-base>
                <input type="text" class="form_control" placeholder="" v-model="user.social.twitter">
              </div>
              <div class="c c_12 c_sm_4 c_md_12 c_xl_4 mb_3 position_relative">
                <icon-base class="position_absolute form--social-icon" icon-name="github" viewBox="0 0 470 470"><icon-github /></icon-base>
                <input type="text" class="form_control" placeholder="" v-model="user.social.github">
              </div>
            </div>
          </div>
          <div class="form_group">
            <label>Hiện tại bạn đang</label>
            <div class="loading" v-if="!user.career"></div>
            <div class="form_row" v-else>
              <div class="c c_12 c_sm_6 c_md_12 c_xl_5 mb_3">
                <div class="btn_group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn_outline_secondary" :class="{ selected: user.career.type == 'work' }" @click.prevent="user.career.type = 'work'">Làm việc</button>
                  <button type="button" class="btn btn_outline_secondary" :class="{ selected: user.career.type == 'study' }" @click.prevent="user.career.type = 'study'">Học tập</button>
                  <button type="button" class="btn btn_outline_secondary" :class="{ selected: user.career.type == 'program' }" @click.prevent="user.career.type = 'program'">Lập trình</button>
                </div>
              </div>
              <div class="c c_12 c_sm_6 c_md_12 c_xl_7 mb_3">
                <input type="text" class="form_control" placeholder="Điều muốn nói" v-model="user.career.content">
              </div>
            </div>
          </div>
          <div class="form_group">
            <label for="private-name">Tên thật <span class="text--support">(không hiển thị công khai)</span></label>
            <input type="text" value="Ho Thi Chinh" class="form_control" id="private-name" v-model="user.name">
          </div>
          <div class="form--btn pt_3">
            <button class="btn form--btn-save" type="submit">Lưu</button>
            <button class="btn form--btn-cancel" type="button">Hủy bỏ</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconLink from "@/components/icons/IconLink";
import IconTwitter from "@/components/icons/IconTwitter";
import IconGithub from "@/components/icons/IconGithub";
import AppAlert from "@/components/shared/alert";

export default {
  data() {
    return {
      message: "",
      type: ""
    };
  },
  computed: {
    user() {
      return this.$store.getters.userInfo;
    }
  },
  methods: {
    async submit() {
      await this.$store.dispatch("updateUserInfo", this.user);
      if (this.$store.getters.statusNotification == 'success') {
        this.type = "alert_success";
        this.message = "Cập nhật dữ liệu thành công!";
        setTimeout(() => {
          this.type = '';
          this.message = '';
        }, 3000)
      }
    }
  },
  components: {
    AppAlert,
    IconBase,
    IconLink,
    IconTwitter,
    IconGithub
  }
};
</script>

<style scoped lang="scss">
@import "index";
</style>
