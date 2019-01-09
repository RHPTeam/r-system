<template>
    <div class="top_bar">
       <div class="logo_left">
           <img src="../../assets/logo.png"/>
       </div>
       <div class="profile">
           <a href="#">  
                <i class="material-icons arrow">
                    keyboard_arrow_down
                </i>
           </a>
       </div>
        <img class="circle" src="../../assets/logo.png"/>
       
       <div class="clr"></div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.top_bar {
  width: 100%;
  background: #776ab0;
  height: 70px;
  padding: 10px 5%;
  margin-bottom: 30px;
  .logo_left img {
    max-height: 50px;
    max-width: 250px;
    float: left;
  }
  .circle {
    max-height: 50px;
    border: 1px solid white;
    border-radius: 50%;
    float: right;
  }
  .profile {
    float: right;

    .arrow {
      font-size: 55px;
      color: white;
    }
  }
  .clr {
    clear: both;
  }
}
</style>
