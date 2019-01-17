<template>
  <footer class="footer" :data-theme="currentTheme">
    <div class="ct pl_4 pr_4 pr_sm_0 pl_sm_0 pt_5 pb_5">
      <div class="r">
        <div class="c_12 c_sm_12 c_md_12 c_lg_4 pl_md_3 pr_md_3 pb_1 pb_lg_0 mb_4 mb_lg_0">
          <div class="footer--title mb_3">RHP TEAM</div>
          <div class="footer--slogan mb_3">If not us, Who? If not now, When?</div>
          <router-link
            tag="a"
            to="/"
            class="footer--logo"
          >
            <icon-base width="130" height="55" icon-name="short-logo" viewBox="0 0 130.769 54.954"><icon-short-logo/></icon-base>
          </router-link>
        </div>
        <div class="c_12 c_sm_6 c_md_6 c_lg_4 pl_md_3 pr_md_3 pb_1 pb_lg_0 mb_4 mb_lg_0">
          <div class="footer--title mb_3">CATEGORY</div>
          <div class="ct_f p_0">
            <div class="r">
              <div class="c_6 c_sm_6 c_md_6 pl_md_3 pr_md_3">
                <div class="footer--text mb_1">Javascript</div>
                <div class="footer--text mb_1">Javascript</div>
                <div class="footer--text mb_1">Javascript</div>
                <div class="footer--text mb_1">Javascript</div>
                <div class="footer--text mb_1">Javascript</div>
              </div>
              <div class="c_6 c_sm_6 c_md_6 pl_md_3 pr_md_3">
                <div class="footer--text mb_1">Javascript</div>
                <div class="footer--text mb_1">Javascript</div>
                <div class="footer--text mb_1">Javascript</div>
                <div class="footer--text mb_1">Javascript</div>
                <div class="footer--text mb_1">Javascript</div>
              </div>
            </div>
          </div>
        </div>
        <div class="c_12 c_sm_6 c_md_6 c_lg_4 pl_md_3 pr_md_3 mt_2 mt_lg_0">
          <div class="footer--title mb_3">JOIN OUR DISCORD</div>
          <div class="footer--text mb_3">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
          <div class="footer--btn"><button class="btn">Invited Link</button></div>
        </div>
      </div>
    </div>
    <div class="ct pl_4 pr_4 pr_sm_0 pl_sm_0">
      <div class="footer--copyright pt_4 pb_4">© 2018. Designed by RHP Team.</div>
    </div>

  </footer>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import IconShortLogo from "@/components/icons/IconShortLogo";

export default {
  data() {
    return {};
  },
  computed: {
    currentTheme() {
      return this.$store.getters.themeName;
    }
  },
  components: {
    IconBase,
    IconShortLogo
  }
};
</script>

<style scoped lang="scss">
@import "../blog-scss/footer";
</style>
