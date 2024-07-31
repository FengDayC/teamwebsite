<template>
  <div class="homeBanner">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pictures: [
          {
            img: '/static/img/banner/team1.jpg'
          },
          {
            img: '/static/img/banner/team2.jpg'
          }
        ]
      }
    }
  };
</script>

<style>
  .homeBanner {
    background-image: url('../../../assets/banner.png');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: auto;
    width: 100%;
    height: 880px;
    z-index: 8;
    position: relative;
  }
  .el-carousel {
    top: 20%;
    width: 80%;
    left:10%;
    height: 100%;
    z-index: 8;
    position: relative;
  }
    .el-carousel img {
      width: 80%;
      height: 200%;
      object-fit: contain;
      left: 10%;
      position: relative;
    }

    .homeBanner h1 {
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      font-size: 70px;
      color: #b09c70;
      text-align: center;
    }
.homeBanner h6 {
  position: absolute; 
  left: 50%;
  bottom: 80px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 28px;
  font-weight: 400;
  color: #f5f5f5;
  text-align: center;
}
</style>
