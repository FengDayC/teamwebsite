<template>
  <div>
    <sub-nav-banner />
    <div class="pubCon2">
      <div class="pubTit">
        <!--<h2>导师团队</h2>
        <h3>Faculty</h3>-->
      </div>
      <div v-for="(item, i) in workList" :key="item.id">
        <div class="teaCon" :class="{ odd: i % 2 != 0 ? false : false }">
          <div class="infoBox">
            <h3>{{ item.title }}</h3>
            <span>{{ item.name }}</span>
            <p>{{ item.journal }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SubNavBanner from '@/components/banner/SubNavBanner';
  import scrollRevealMixin from '@/mixin/scrollRevealMixin.js';
  export default {
    components: { SubNavBanner },
    mixins: [scrollRevealMixin],
    data() {
      return {
        workList: [
          {
            title: 'Interactive Virtual Ankle Movement Controlled by Wrist sEMG Improves Motor Imagery: An Exploratory Study',
            name: 'Y Xiao, H Bai, Y Gao, B Hu, J Zheng, XE Cai, J Rao, X Li, A Hao',
            journal: 'IEEE Transactions on Visualization and Computer Graphics'
          },
          {
            title: 'Research on the usability of hand motor function training based on VR system',
            name: 'Y Gao, Y Zhai, M Hao, L Wang, A Hao',
            journal: '2021 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct)'
          },
          {
            title: 'Analysis and Validation for Kinematic and Physiological Data of VR Training System',
            name: 'Shuwei Chen, Ben Hu, Yang Gao, Yang Liu, Zhiping Liao, Jianhua Li, Aimin Hao',
            journal: '2021 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct)'
          },
          {
            title: 'Lower limb balance rehabilitation of post-stroke patients using an evaluating and training combined augmented reality system',
            name: 'S Chen, B Hu, Y Gao, Z Liao, J Li, A Hao',
            journal: '2020 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct)'
          }
        ]
      };
    },
  };
</script>

<style scoped>
  .pubTit {
    margin-top: 0px;
  }

  .teaCon {
    max-width: 2000px;
    margin: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-bottom: 30px;
  }
    /* 循环下标是奇数css */
    .teaCon.odd {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
    }

      .teaCon.odd .infoBox h3 {
        text-align: right;
      }

      .teaCon.odd .infoBox span {
        text-align: right;
      }


    .teaCon .imgBox {
      width: 750px;
      height: 213px;
      position: relative;
      margin-left:60px;
    }


      .teaCon .imgBox img {
        width: 714px;
        height: 213px;
        position: absolute;
        top: 25px;
        left: 5px;
        z-index: 9;
      }

    .teaCon .infoBox {
      margin-left: 200px;
      width: 600px;
      margin-right: 60px;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      /*padding: 20px;*/
    }

      .teaCon .infoBox h3 {
        font-size: 30px;
      }

      .teaCon .infoBox span {
        color: #b09c70;
        padding: 5px 0 10px;
        font-size: 20px;
      }

      .teaCon .infoBox p {
        color: #aaaaaa;
        text-align: justify;
        line-height: 25px;
        font-size:20px;
      }

  /* 小于768 */
  @media (max-width: 768px) {
    .teaCon {
      max-width: 768px;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      margin-bottom: 10px;
    }
      /* 循环下标是奇数css */
      .teaCon.odd {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
      }

        .teaCon.odd .infoBox h3 {
          text-align: center;
        }

        .teaCon.odd .infoBox span {
          text-align: center;
        }

        .teaCon.odd .line {
          display: none;
        }

      .teaCon .imgBox {
        width: 90%;
        margin: auto;
        height: 368px;
        position: relative;
      }

        .teaCon .imgBox .boxLine {
          position: absolute;
          top: -20px;
          left: -10px;
          width: 90%;
          height: 368px;
        }

        .teaCon .imgBox img {
          width: 100%;
          height: 368px;
          position: absolute;
          top: 0;
          left: 0px;
          z-index: 9;
        }

      .teaCon .infoBox h3 {
        text-align: center;
      }

      .teaCon .infoBox span {
        text-align: center;
      }

      .teaCon .imgBox .line {
        display: none;
      }
  }
</style>
