<template>
   <div class="user--item card">
         <div class="card_body">
            <div class="user--avatar">
               <img src="https://i.pinimg.com/originals/94/dd/57/94dd573e4b4de604ea7f33548da99fd6.jpg" alt="avatar-user">
            </div>
            <div class="user--info">
               <h3>Gordon Linoff</h3>
               <p class="text--info text--country">Bratislava, Slovakia, Russia</p>
               <p class="text--info text--counts">1,014</p>
               <div class="info-tag">
                     <a href="#" class="text--info tag--item">Javascript</a>
                     <a href="#" class="text--info tag--item">Python</a>
               </div>
            </div>
         </div>
   </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.user--item {
  width: 307px;
  height: 100px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 53px;
}
.card {
  border: none !important;
  .card_body {
    width: 100%;
    display: flex;
    padding: 0;
    .user--avatar {
      width: 100px;
      img {
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
    }
    .user--info {
      width: 207px;
      margin-left: 9px;
      h3 {
        font-family: SegoeUI;
        color: #0077dd;
        font-size: 18px;
        font-weight: 600;
        margin: 0;
        cursor: pointer;
      }
      p {
        margin: 0;
      }
      p.text--counts {
        color: #707070;
        font-weight: 600;
        letter-spacing: -0.3px;
      }
    }
  }
}
</style>
