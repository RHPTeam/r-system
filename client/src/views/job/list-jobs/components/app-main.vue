<template>
  <div class="ct">
    <div class="position_relative job--items p_5">
      <div class="job--title mt_2">
        <h4>Development Engineer (Server-side) - Working in Japan</h4>
        <span class="position_absolute">18 gio truoc</span>
      </div>
      <div class="job--of-company mt_1"><span>Microsoft - Silicon Valley</span></div>
      <div class="job--offer mt_1"><span>500$ - 1000$</span></div>
      <div class="job--tags mt_4">
        <a href="#">Javascript</a>
        <a href="#">Vuejs</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.job--items {
  border-bottom: 1px solid #e4e4e4;
  .job--title {
    h4 {
      line-height: 1.31;
      color: #0077dd;
    }
    span {
      top: 3.8rem;
      right: 1rem;
      z-index: +2;
    }
  }
  .job--of-company {
    line-height: 1.36;
    letter-spacing: -0.2px;
    color: #000000;
  }
  .job--offer {
    font-weight: 300;
    font-style: italic;
    font-stretch: normal;
    line-height: 1.4;
    letter-spacing: -0.2px;
    color: #ff7011;
  }
  .job--tags {
    a {
      padding: 8px 15px;
      border: 1px solid #e4e4e4;
      border-radius: 28px;
      color: #a8a8a8;
      margin-right: 10px;
      text-decoration: none;
    }
  }
}
</style>
