<template>
  <div class="footer r">
    <div class="content">
      <div class="logo">
        <icon-base icon-name="logo" width="200px" height="42" viewBox="0 0 222 30">
          <icon-logo />
        </icon-base>
      </div>
      <div class="more">
        <h3>Looking for more</h3>
        <p>
          Browse the complete <a href="#"> list questions </a>, or <a href="#"> popular tags </a>. Help us answer
          unanswered questions.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import IconBase from "@/components/icons/IconBase";
  import IconLogo from "@/components/icons/IconLogo";
  export default {
    components: {
      IconBase,
      IconLogo
    }
  }

</script>

<style scoped lang="scss">
  .footer {

    margin:60px 0px;
    svg {
      color: black;
    }

    .content {
      width: 100%;
    }

    .logo {
      width: 100%;
      display: inline-block;
      text-align: center;
    }

    .more {
      margin: 10px auto;
      max-width: 436px;
      h3,
      p {
        text-align: center;
      }

      h3 {
        font-size: 20px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.35;
        letter-spacing: -0.4px;
        color: #a8a8a8;
      }

      p {
        font-size: 15px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.33;
        letter-spacing: -0.3px;
        color: #a8a8a8;

        a {
          color: #0077dd;
          text-decoration: none;
        }
      }

    }
  }

</style>
