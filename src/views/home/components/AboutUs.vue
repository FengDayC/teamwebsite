<template>
  <section class="pubCon">
    <div class="pubTit">
      <h2>ABOUT US</h2>
      <h3></h3>
    </div>
    <!-- 内容区域 -->
    <div class="aboCon">
      <article class="lt">{{ about_cont }}</article>
      <div class="rt">
        <el-carousel height="210px">
          <el-carousel-item v-for="item in pictures" :key="item">
            <h3><img :src="item.img" alt="" /></h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- 分类区域 -->
    <div class="aboItems">
      <div class="item" v-for="item in itemList" :key="item.id">
        <router-link :to="item.path "><i class="fa fa-search fa-2x"></i></router-link>
        <span>{{ item.title }}</span>
        <span>{{ item.content }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      about_cont:
        'VIGA Lab, under the leadership of Associate Professor Gao Yang（高阳）, is a key component of the National Key Laboratory of Virtual Reality Technology and Systems at Beihang University. We specialize in cutting-edge research in virtual modeling, physical simulation, and artificial intelligence, with applications spanning animation, medicine, and human-computer interaction (HCI). Our commitment extends to the development of innovative technologies based on our foundational research.',
      itemList: [
        //导航
        { id: '001', title: 'Physics-based fluid modelling/simulation', path: '/publication' },
        { id: '002', title: 'VR+ Physiological signal (EEG/EMG)', path: '/publication'},
        { id: '003', title: 'VR + Rehabilitation', path: '/publication' },
        { id: '004', title: 'Realistic Rendering', path: '/publication'},
      ],
      pictures: [
        {
          img: '/static/img/banner/team1.jpg'
        },
        {
          img: '/static/img/banner/team2.jpg'
        },
        {
          img: '/static/img/banner/banner1.jpg'
        },
        {
          img: '/static/img/banner/TVCG_LM2022.png'
        },
        {
          img: '/static/img/banner/ISMAR21-Z.png'
        },
      ]
    };
  },
};
</script>

<style scoped>
  .el-carousel{
      width: 100%;
  }
  .el-carousel img {
    width: 80%;
    height: 200px;
    left: 10%;
    position: relative;
  }
.aboCon {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center; /*垂直居中*/
}
.aboCon .lt {
  width: 50%;
  color: #aaaaaa;
  padding: 40px;
  line-height: 25px;
  text-align: justify;
}
.aboCon .rt {
  width: 100%;
  position: relative;
}

.aboCon .btn {
  background-color: #b09c70;
  color: #ffffff;
  text-align: center; 
  font-size: 14px;
  position: absolute;
  bottom: 70px;
  left: -62px;
  cursor: pointer;
  padding: 8px 40px;
  transition: 0.2s;
}
.aboCon .btn:hover {
  background-color: #CEB989; 
}
.aboItems {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 30px 0;
}
.aboItems .item {
  padding: 20px 20px;
  width: 25%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-align: center;
}
.aboItems .item i {
  color: #b09c70;
}
.aboItems .item span:nth-child(2) {
  color: #333333;
  font-weight: bold;
  line-height: 50px;
  display: inline-block;
}

.aboItems .item span:nth-child(3) {
  color: #aaaaaa;
  line-height: 25px;
  display: inline-block;
}

/* 小于768 */
@media (max-width: 768px) {
  .aboCon {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }
  .aboCon .lt {
    width: 90%;
    padding: 0px;
  }
  .aboCon .rt {
    padding-top: 20px;
    padding-bottom: 50px;
    width: 90%;
  }
  .aboCon .rt img {
    width: 100%;
  }
  .aboCon .rt .boxLine {
    width: 90%;
    right: 5%;
    top: 0px;
  }
  .aboCon .btn {
    bottom: 35px;
    left: 30px;
  }
  .aboItems {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 30px 0;
  }
  .aboItems .item {
    width: 50%;
  }
}
</style>

