<template>
  <div class="footer r">
    <div class="content">
      <div class="logo">
        <img src="@/assets/rhp-home-icon_@1x.svg"/>
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

  export default {

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
