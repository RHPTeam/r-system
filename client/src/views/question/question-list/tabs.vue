<template>
    <div class="content--tabs">
        <ul class="nav nav--pills">
            <li class="nav--item">
                <a class="nav--link active" href="#">Iteresting</a>
            </li>
            <li class="nav--item">
                <a class="nav--link" href="#">Featurre <span class="num">212</span> </a>
            </li>
            <li class="nav--item">
                <a class="nav--link" href="#">Hot</a>
            </li>
            <li class="nav--item">
                <a class="nav--link" href="#">Week</a>
            </li>
            <li class="nav--item">
                <a class="nav--link" href="#">Month</a>
            </li>
            <li class="nav--item">
                <a class="nav--link" href="#">Chưa trả lời</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.content--tabs {
  .nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    width: 100%;
  }
  .nav--item {
    text-align: center;
    margin-right: 9px;
    cursor: pointer;
  }
  .nav--link.active {
    background: #776ab0;
    color: #fff;
  }
  .nav--link {
    padding: 10px 31px;
    display: block;
    border-radius: 36px;
    color: #a8a8a8;
    font-weight: 600;
    text-decoration: none;
  }
}
@media (min-width: 1200px) {
  .content--tabs {
    .nav--link {
      padding: 10px 20px;
    }
  }
}
</style>
