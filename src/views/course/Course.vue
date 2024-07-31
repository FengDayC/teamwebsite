<template>
  <div>
    <sub-nav-banner />
    <div class="aboItems">
      <!--<div class="item" v-for="item in itemList" :key="item.id">
    <router-link :to="item.path "><i class="fa fa-search fa-2x"></i></router-link>
    <span>{{ item.title }}</span>
    <span>{{ item.content }}</span>
  </div>-->
    </div>
      <div class="pubCon2">
        <div class="pubTit">
          <h2>2024</h2>
        </div>
        <div v-for="(item, i) in List2024" :key="item.id">
          <div class="teaCon" :class="{ odd: i % 2 != 0 ? false : false }">
            <div class="infoBox">
              <div class="info_text">
                <h3>{{ item.title }}</h3>
                <span>{{ item.name }}</span>
                <p>{{ item.journal }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pubCon2">
        <div class="pubTit">
          <h2>2023</h2>
        </div>
        <div v-for="(item, i) in List2023" :key="item.id">
          <div class="teaCon" :class="{ odd: i % 2 != 0 ? false : false }">
            <div class="infoBox">
              <h3>{{ item.title }}</h3>
              <span>{{ item.name }}</span>
              <p>{{ item.journal }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pubCon2">
        <div class="pubTit">
          <h2>2022</h2>
        </div>
        <div v-for="(item, i) in List2022" :key="item.id">
          <div class="teaCon" :class="{ odd: i % 2 != 0 ? false : false }">
            <div class="infoBox">
              <h3>{{ item.title }}</h3>
              <span>{{ item.name }}</span>
              <p>{{ item.journal }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pubCon2">
        <div class="pubTit">
          <h2>2021</h2>
        </div>
        <div v-for="(item, i) in List2021" :key="item.id">
          <div class="teaCon" :class="{ odd: i % 2 != 0 ? false : false }">
            <div class="infoBox">
              <h3>{{ item.title }}</h3>
              <span>{{ item.name }}</span>
              <p>{{ item.journal }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pubCon2">
        <div class="pubTit">
          <h2>2020</h2>
        </div>
        <div v-for="(item, i) in List2020" :key="item.id">
          <div class="teaCon" :class="{ odd: i % 2 != 0 ? false : false }">
            <div class="infoBox">
              <h3>{{ item.title }}</h3>
              <span>{{ item.name }}</span>
              <p>{{ item.journal }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pubCon2">
        <div class="pubTit">
          <h2>2019</h2>
        </div>
        <div v-for="(item, i) in List2019" :key="item.id">
          <div class="teaCon" :class="{ odd: i % 2 != 0 ? false : false }">
            <div class="infoBox">
              <h3>{{ item.title }}</h3>
              <span>{{ item.name }}</span>
              <p>{{ item.journal }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pubCon2">
        <div class="pubTit">
          <h2>2018</h2>
        </div>
        <div v-for="(item, i) in List2018" :key="item.id">
          <div class="teaCon" :class="{ odd: i % 2 != 0 ? false : false }">
            <div class="infoBox">
              <h3>{{ item.title }}</h3>
              <span>{{ item.name }}</span>
              <p>{{ item.journal }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pubCon2">
        <div class="pubTit">
          <h2>2017</h2>
        </div>
        <div v-for="(item, i) in List2017" :key="item.id">
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
        List2024: [
          {
            title: 'Dynamic ocean inverse modeling based on differentiable rendering',
            name: 'Xueguang Xie, Yang Gao, Fei Hou, Aimin Hao, Hong Qin',
            journal: 'Computational Visual Media'
          },
          {
            title: 'Weakly Supervised Multimodal Affordance Grounding for Egocentric Images',
            name: 'Lingjing Xu, Yang Gao, Wenfeng Song, Aimin Hao',
            journal: 'Proceedings of the AAAI Conference on Artificial Intelligence'
          },
          {
            title: 'Erratum to: Dynamic ocean inverse modeling based on differentiable rendering',
            name: 'Xueguang Xie, Yang Gao, Fei Hou, Aimin Hao, Hong Qin',
            journal: 'Computational Visual Media'
          },
          {
            title: 'Multimodal Physiological Analysis of Impact of Emotion on Cognitive Control in VR',
            name: 'Ming Li, Junjun Pan, Yu Li, Yang Gao, Hong Qin, Yang Shen',
            journal: 'IEEE Transactions on Visualization and Computer Graphics'
          },
          {
            title: 'Fluid Inverse Volumetric Modeling and Applications from Surface Motion',
            name: 'Xueguang Xie, Yang Gao, Fei Hou, Tianwei Cheng, Aimin Hao, Hong Qin',
            journal: 'IEEE Transactions on Visualization and Computer Graphics'
          },
          {
            title: 'State of the Art in Efficient Translucent Material Rendering with BSSRDF',
            name: 'Shiyu Liang, Yang Gao, Chonghao Hu, Peng Zhou, Aimin Hao, Lili Wang, Hong Qin',
            journal: 'Computer Graphics Forum'
          },
        ],
        List2023: [
          
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
            title: 'UPSR: a Unified Proxy Skeleton Retargeting Method for Heterogeneous Avatar Animation',
            name: 'W Song, X Zhang, Y Gao, Y Luo, H Wang, X Wang, X Hou',
            journal: '2023 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW)'
          },
          {
            title: 'A Unified Particle-Based Solver for Non-Newtonian Behaviors Simulation',
            name: 'C Li, Y Gao, J He, T Cheng, S Li, A Hao, H Qin',
            journal: 'IEEE Transactions on Visualization and Computer Graphics'
          },
          {
            title: 'Multimodal Physiological Analysis of Cognition and the Correlations with Emotion in VR',
            name: 'Y Shen, M Li, Y Li, Y Gao, J Pan',
            journal: '2023 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct)'
          },
          {
            title: 'PhyVR: Physics-based Multi-material and Free-hand Interaction in VR',
            name: 'H Deng, J Li, Y Gao, X Liang, H Wu, A Hao',
            journal: '2023 IEEE International Symposium on Mixed and Augmented Reality (ISMAR)'
          },
          {
            title: 'Dual Temporal Transformers for Fine-Grained Dangerous Action Recognition',
            name: 'W Song, X Jin, Y Ding, Y Gao, X Hou',
            journal: '2023 IEEE International Conference on Image Processing (ICIP)'
          },
          {
            title: 'Interactive Virtual Ankle Movement Controlled by Wrist sEMG Improves Motor Imagery: An Exploratory Study',
            name: 'Y Xiao, H Bai, Y Gao, B Hu, J Zheng, XE Cai, J Rao, X Li, A Hao',
            journal: 'IEEE Transactions on Visualization and Computer Graphics'
          },
          {
            title: 'VR-based Vector Watercolor Painting System',
            name: 'Y Gao, H Bai, Z Pei, W Song, A Hao',
            journal: '2023 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW)'
          },
          {
            title: 'Subsurface scattering calculation method for translucent material rendering',
            name: 'Y Gao, S Liang, A Hao, H Wu',
            journal: 'US Patent App'
          },
          {
            title: 'State of the Art in Efficient Translucent Material Rendering with BSSRDF',
            name: 'S Liang, Y Gao, C Hu, P Zhou, A Hao, L Wang, H Qin',
            journal: 'Computer Graphics Forum'
          },
        ],
        List2022: [
          {
            title: 'Neurophysiological and subjective analysis of VR emotion induction paradigm',
            name: 'M Li, J Pan, Y Gao, Y Shen, F Luo, J Dai, A Hao, H Qin',
            journal: 'IEEE Transactions on Visualization and Computer Graphics'
          },
          {
            title: 'Real-time expressive avatar animation generation based on monocular videos',
            name: 'Wenfeng Song, Xianfei Wang, Yang Gao, Aimin Hao, Xia Hou',
            journal: '2022 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct)'
          },
          {
            title: 'Analysis of emotional tendency and syntactic properties of VR game reviews',
            name: 'Yang Gao, Anqi Chen, Susan Chi, Guangtao Zhang, Aimin Hao',
            journal: '2022 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW)'
          },
          {
            title: 'Person Re-Identification in Panoramic Views Based on Bayesian Transformers',
            name: 'W Song, X Zhang, Y Ye, Y Gao, Y Guo, A Hao, X Hou',
            journal: '2022 IEEE International Conference on Image Processing (ICIP)'
          },
          {
            title: 'Real-time laparoscopic cholecystectomy simulation using a particle-based physical system',
            name: 'H Wu, F Ye, Y Gao, Y Cong, A Hao',
            journal: 'Complex System Modeling and Simulation'
          },
        ],
        List2021:[
          {
            title: 'The role of virtual reality technology in medical education in the context of emerging medical discipline',
            name: 'GAO Yang, Z Qin-ping, Z Xue-dong, GUO Quan-min, XI Tao',
            journal: 'Journal of Sichuan University (Medical Science Edition)'
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
        ],
        List2020: [
          {
            title: 'Lower limb balance rehabilitation of post-stroke patients using an evaluating and training combined augmented reality system',
            name: 'S Chen, B Hu, Y Gao, Z Liao, J Li, A Hao',
            journal: '2020 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct)'
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
        ],
        List2019: [
          {
            title: 'Real-time simulation of electrocautery procedure using meshfree methods in laparoscopic cholecystectomy',
            name: 'J Pan, Y Yang, Y Gao, H Qin, Y Si',
            journal: 'The Visual Computer'
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
        ],
        List2018: [
          {
            title: 'Location awareness method for spot beam emitters',
            name: 'W Yang, Q Chang, H Li, Y Gao, L Bao',
            journal: 'IET Radar, Sonar & Navigation'
          },
          {
            title: 'Robust and Efficient SPH Simulation for High-speed Fluids with the Dynamic Particle Partitioning Method',
            name: 'Z Zheng, Y Gao, S Li, H Qin, A Hao',
            journal: 'PG (Short Papers and Posters)'
          },
        ],
        List2017: [
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
        ],
        itemList: [
          //导航
          { id: '001', title: 'Physics-based fluid modelling/simulation', path: '/simulation' },
          { id: '002', title: 'VR+ Physiological signal (EEG/EMG)', path: '/signal' },
          { id: '003', title: 'VR + Rehabilitation', path: '/rehabilitation' },
          { id: '004', title: 'Realistic Rendering', path: '/rendering' },
        ],
      };
    },
  };
</script>

<style scoped>

  .aboItems {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 50px 0 10px;
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
  .pubTit {
    padding-top: 0px;
  }
  .pubCon2 h2 {
    font-size: 30px;
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
     .teaCon.infoBox.color {
       flex:1;
     }


    .teaCon .infoBox {
        margin-left:200px;
        width:600px;
        margin-right:60px;
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
        font-size: 25px;
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
