<template>
  <div>
    <sub-nav-banner />
    <div class="pubCon2">
      <div class="pubTit">
        <h2>Physics-based fluid modelling/simulation</h2>
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
            title: 'MPMNet: A Data-Driven MPM Framework for Dynamic Fluid-Solid Interaction',
            name: 'J Li, Y Gao, J Dai, S Li, A Hao, H Qin',
            journal: 'IEEE Transactions on Visualization and Computer Graphics'
          },
          {
            title: 'Real-time Physics-based Interaction in Augmented Reality',
            name: 'J Li, H Deng, Y Gao, A Chen, Z Song, A Hao',
            journal: '2023 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW)'
          },
          {
            title: 'A Unified Particle-Based Solver for Non-Newtonian Behaviors Simulation',
            name: 'C Li, Y Gao, J He, T Cheng, S Li, A Hao, H Qin',
            journal: 'IEEE Transactions on Visualization and Computer Graphics'
          },
          {
            title: 'PhyVR: Physics-based Multi-material and Free-hand Interaction in VR',
            name: 'H Deng, J Li, Y Gao, X Liang, H Wu, A Hao',
            journal: '2023 IEEE International Symposium on Mixed and Augmented Reality (ISMAR)'
          },
          {
            title: 'VR-based Vector Watercolor Painting System',
            name: 'Y Gao, H Bai, Z Pei, W Song, A Hao',
            journal: '2023 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW)'
          },
          {
            title: 'Real-time laparoscopic cholecystectomy simulation using a particle-based physical system',
            name: 'H Wu, F Ye, Y Gao, Y Cong, A Hao',
            journal: 'Complex System Modeling and Simulation'
          },
          {
            title: 'Accelerating liquid simulation with an improved data‐driven method',
            name: 'Y Gao, Q Zhang, S Li, A Hao, H Qin',
            journal: 'Computer Graphics Forum'
          },
          {
            title: 'Dynamic particle partitioning SPH model for high-speed fluids simulation',
            name: 'Y Gao, Z Zheng, J Li, S Li, A Hao, H Qin',
            journal: 'Graphical Models'
          },
          {
            title: 'An efficient FLIP and shape matching coupled method for fluid–solid and two-phase fluid simulations',
            name: 'Y Gao, S Li, H Qin, Y Xu, A Hao',
            journal: 'The Visual Computer'
          },
          {
            title: 'A hybrid method for powdered materials modeling',
            name: 'Y Gao, Y Xu, S Li, A Hao, H Qin',
            journal: 'Proceedings of the 25th ACM Symposium on Virtual Reality Software and Technology'
          },
          {
            title: 'Robust and Efficient SPH Simulation for High-speed Fluids with the Dynamic Particle Partitioning Method',
            name: 'Z Zheng, Y Gao, S Li, H Qin, A Hao',
            journal: 'PG (Short Papers and Posters)' 
          },
          {
            title: 'An efficient heat-based model for solid-liquid-gas phase transition and dynamic interaction',
            name: 'Y Gao, S Li, L Yang, H Qin, A Hao',
            journal: 'Graphical Models'
          },
          {
            title: 'A novel fluid-solid coupling framework integrating flip and shape matching methods',
            name: 'Y Gao, S Li, H Qin, A Hao',
            journal: 'Proceedings of the Computer Graphics International Conference'
          },
        ]
      };
    },
  };
</script>

<style scoped>
  .pubTit {
    margin-top: 0px;
  }
  .pubTit h2{
      font-size: 40px;
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
