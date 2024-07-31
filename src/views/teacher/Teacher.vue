<template>
  <div>
    <sub-nav-banner />
    <div class="pubCon">
      <div class="pubTit">
        <h2>Faculty</h2>
        <h3></h3>
      </div>
      <div v-for="(item, i) in teacherList" :key="item.id">
        <div class="teaCon" :class="{ odd: i % 2 != 0 ? false : false }">
          <div class="imgBox">
            <div class="boxLine"></div>
            <img :src="item.img" alt="" />
          </div>
          <div class="infoBox">
            <h3>{{ item.name }}</h3>
            <span>{{ item.job }}</span>
            <span>{{ item.lab }}</span>
            <span>{{ item.place }}</span>
            <span>{{ item.email }}</span>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="pubCon">
      <div class="pubTit">
        <h2>Postdoc</h2>
        <h3></h3>
      </div>
      <div v-for="(item, i) in PostdocList" :key="item.id">
        <div class="teaCon" :class="{ odd: i % 2 != 0 ? false : false }">
          <div class="imgBox">
            <div class="boxLine"></div>
            <img :src="item.img" alt="" />
          </div>
          <div class="infoBox">
            <h3>{{ item.name }}</h3>
            <span>{{ item.job }}</span>
            <span>{{ item.lab }}</span>
            <span>{{ item.place }}</span>
            <span>{{ item.email }}</span>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="pubCon">
      <div class="pubTit">
        <h2>Ph.D. Students</h2>
        <h3></h3>
        <div v-for="item in doctors">
          <el-row :gutter="5">
            <div v-for="i in item.list">
              <el-col :span="3">
                <img :src="i.img" alt="" />
              </el-col>
              <el-col :span="3">
                <h2>{{ i.name }}</h2>
                <h2>{{ i.name2 }}</h2>
                <div class="desc">
                  <span>{{ i.desc }}</span>
                </div>
                <div class="emial">
                  <p>{{ i.email }}</p>
                </div>
              </el-col>
            </div>
          </el-row>
        </div>
      </div>
    </div>
    <div class="pubCon">
      <div class="pubTit">
        <h2>Master Students</h2>
        <h3></h3>
        <div v-for="item in masters">
          <el-row :gutter="5">
            <div v-for="i in item.list">
              <el-col :span="3">
                <img :src="i.img" alt="" />
              </el-col>
              <el-col :span="3">
                <h2>{{ i.name }}</h2>
                <h2>{{ i.name2 }}</h2>
                <div class="desc">
                  <span>{{ i.desc }}</span>
                </div>
                <div class="emial">
                  <p>{{ i.email }}</p>
                </div>
              </el-col>
            </div>
          </el-row>
        </div>
      </div>
    </div>
    <div class="pubCon">
      <div class="pubTit">
        <h2>Intern</h2>
        <h3></h3>
        <div v-for="item in interns">
          <el-row :gutter="5">
            <div v-for="i in item.list">
              <el-col :span="3">
                <img :src="i.img" alt="" />
              </el-col>
              <el-col :span="3">
                <h2>{{ i.name }}</h2>
                <h2>{{ i.name2 }}</h2>
                <div class="desc">
                  <span>{{ i.desc }}</span>
                </div>
                <div class="emial">
                  <p>{{ i.email }}</p>
                </div>
              </el-col>
            </div>
          </el-row>
        </div>
      </div>
    </div>
    <div class="pubCon">
      <div class="pubTit">
        <h2>Alumni</h2>
        <h3></h3>
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="id"
                           label="序号"
                           width="80">
          </el-table-column>
          <el-table-column prop="name"
                           label="姓名"
                           width="180">
          </el-table-column>
          <el-table-column prop="data"
                           label="毕业日期"
                           width="180">
          </el-table-column>
          <el-table-column prop="work"
                           label="就业去向"
                           width="180">
          </el-table-column>
          <el-table-column prop="award"
                           label="获奖情况">
          </el-table-column>
        </el-table>
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
      teacherList: [
        {
          id: '001',
          name: 'Yang Gao(高阳)',
          job: 'Associate Professor',
          lab: 'SKL. VR Technology and Systems',
          place: 'Beihang University',
          email: 'Email: gaoyangvr@buaa.edu.cn',
          img: '/static/img/GY.jpg',
          desc: 'I currently an Associate Professor in computer science at the State Key Laboratory of Virtual Reality Technology and Systems (SKL. VR Technology and Systems) of Beihang University in Beijing. Prior to this, I received a PhD degree from Beihang University in 2019, supervised by Prof. Aimin Hao, and I am in long-term collaboration with Prof. Hong Qin (Stony brook University).',
        }
      ],
      PostdocList: [
        {
          id: '001',
          name: 'Peng Yu(禹鹏)',
          email: 'Email: yupeng@buaa.edu.cn',
          img: '/static/img/YP.png',
          desc: 'https://yupengvr.github.io/.',
        }
      ],
      doctors: [
        {
          list: [
            {
              name: 'Ming Li',
              name2: '(李明)',
              email: 'minglee@buaa.edu.cn',
              img: '/static/img/LM.jpg',
              desc: '北京航空航天大学计算机学院2020级博士生，研究方向为情感计算＋虚拟现实+人脸表情的情绪识别。'
            },
            {
              name: 'Jin Li',
              name2: '(李瑾)',
              email: 'lijin2019@buaa.edu.cn',
              img: '/static/img/LJ.png',
              desc: '北京航空航天大学计算机学院2020级博士研究生，计算机应用技术专业，研究方向为计算机图形学。'
            },
            {
              name: 'Chunlei Li',
              name2: '(李春蕾)',
              email: 'spring@buaa.edu.cn',
              img: '/static/img/LCL.jpg',
              desc: '北京航空航天大学2021级博士研究生，计算机科学与技术专业，研究方向为图形学流体与固体仿真。'
            },
            {
              name: 'Shiyu Liang',
              name2: '(梁仕宇)',
              email: 'shiyuliang@buaa.edu.cn',
              img: '/static/img/LSY.jpg',
              desc: '北京航空航天大学2023级博士研究生，计算机应用技术专业，研究方向为真实感渲染。'
            },
          ]
        },
        {
          list: [
            {
              name: 'Xin Zhao',
              name2: '(赵鑫)',
              email: 'zhaoxin0105@buaa.edu.cn',
              img: '/static/img/ZX.jpg',
              desc: '北京航空航天大学计算机学院2023级博士研究生，计算机应用技术专业，研究方向为医学图像相关的深度学习技术的研究。'
            }
          ]
        }
      ],
      masters: [
        {
          list: [
            {
              name: 'Kexin Wang',
              name2: '(王可欣)',
              email: 'kethinry@buaa.edu.cn',
              img: '/static/img/WKX.jpg',
              desc: '北京航空航天大学计算机学院2021级硕士研究生，计算机技术专业，研究方向为虚拟现实眼动交互方法研究。'
            },
            {
              name: 'Hongming Bai',
              name2: '(白洪铭)',
              email: 'bhm0210@buaa.edu.cn',
              img: '/static/img/BHM.jpg',
              desc: '北京航空航天大学计算机学院2022级硕士研究生，软件工程专业，研究方向为虚拟现实康复医疗。'
            },
            {
              name: 'Qingyue Qu',
              name2: '(曲清越)',
              email: 'quqingyue@foxmail.com',
              img: '/static/img/qqy.jpg',
              desc: '北京航空航天大学计算机学院2022级硕士研究生，计算机技术专业，研究方向为流体仿真。'
            },
            {
              name: 'Anqi Chen',
              name2: '(陈安琪)',
              email: 'chenaq0626@buaa.edu.cn',
              img: '/static/img/CAQ.png',
              desc: '北京航空航天大学中法工程师学院2022级硕士研究生，电子信息专业，研究方向为虚拟现实康复医疗。'
            },
          ]
        },
        {
          list: [
            
            {
              name: 'Zilong Song',
              name2: '(宋子龙)',
              email: 'dyb2306401@buaa.edu.cn',
              img: '/static/img/SZL.jpg',
              desc: '北京航空航天大学计算机学院2023级硕士生，计算机科学与技术专业，研究方向：三维场景重建。'
            },
            {
              name: 'Yangbin Dai',
              name2: '(戴阳彬)',
              email: 'dyb2306401@buaa.edu.cn',
              img: '/static/img/DYB.jpg',
              desc: '北京航空航天大学计算机学院2023级硕士生，计算机科学与技术专业，研究方向：三维场景重建。'
            },
            {
              name: 'Lingjing Xu',
              name2: '(徐灵婧)',
              email: 'xulingjing@buaa.edu.cn',
              img: '/static/img/XLJ.png',
              desc: '北京航空航天大学计算机学院2023级硕士研究生，电子信息专业，研究方向：人物交互。'
            },
            {
              name: 'Dakun Sun',
              name2: '(孙大琨)',
              email: '19373230@buaa.edu.cn',
              img: '/static/img/SDK.png',
              desc: '北京航空航天大学计算机学院2023级硕士研究生，计算机科学与技术专业，研究方向为计算机图形学。'
            },

          ]
        },
        {
          list: [
            {
              name: 'Yuecheng Li',
              name2: '(李岳成)',
              email: 'ycli2023@buaa.edu.cn',
              img: '/static/img/LYC.jpg',
              desc: '北京航空航天大学计算机学院2023级硕士研究生，计算机科学与技术专业，研究方向为虚拟现实及人工智能。'
            },
            {
              name: 'Hang Xu',
              name2: '(许航)',
              email: '20231106@buaa.edu.cn',
              img: '/static/img/XH.jpg',
              desc: '北京航空航天大学计算机学院2024级硕士研究生，计算机技术专业，研究方向为计算机图形学。'
            },

          ]
        }
      ],
      interns: [
        {
          list: [
            {
              name: 'Xiangcheng Zhai',
              name2: '(翟相程)',
              email: '1201004021@cnu.edu.cn',
              img: '/static/img/ZXC.jpg',
              desc: '首都师范大学信息工程学院2020级本科生，人工智能专业，研究方向为循环流体/动画生成研究。'
            },
            {
              name: 'Yingqi Jie',
              name2: '(介应奇)',
              email: 'jiesam39@gmail.com',
              img: '/static/img/JYQ.jpg',
              desc: '北京理工大学计算机学院2021级本科生，软件工程专业，现研究方向为物理感知真实的静态动图的生成。'
            },
            {
              name: 'Zhiyang Ji',
              name2: '(纪致炀)',
              email: 'jiesam39@gmail.com',
              img: '/static/img/JZY.jpg',
              desc: '北京航空航天大学计算机学院2022级本科生，计算机科学与技术专业，研究方向为虚拟现实多物态仿真交互研究。'
            },
          ]
        }
      ],
      tableData: [{
        id: '1',
        name: '翟英男',
        data: '2022.1',
        work: '经纬恒润',
        award: '北航优秀研究生、北航优秀毕业生'
      },
        {
          id: '2',
          name: '陈舒玮',
          data: '2022.1',
          work: '新浪微博',
          award:''
        },
        {
        id: '3',
        name: '胡奔',
        data: '2023.1',
        work: '阿里巴巴',
        award: '北京市优秀毕业生；北航计算机之星；北航三好学生；北航优秀研究生'
      }, {
        id: '4',
        name: '程天伟',
        data: '2023.6',
        work: '交通银行',
        award: ''
      }, {
        id: '5',
        name: '蒋孟贤',
        data: '2023.6',
        work: '字节跳动',
        award: ''
        }, {
          id: '6',
          name: '陈卓',
          data: '2024.1',
          work: '阿里巴巴',
          award: ''
        }, {
          id: '7',
          name: '谢雪光',
          data: '2024.1',
          work: '东北大学',
          award: ''
        }
      ]
    };
  },
};
</script>

<style scoped>
.pubTit {
    margin-top:0px;
}
  .el-row {
    width:100%;
    left: 0%;
    margin-bottom: 20px;
    &:last-child
  }


  .el-col {
    border-radius: 4px;
  }

    .el-col img {
      width: 100%;
      height: 200px;
      position: relative;
    }
    .el-col h2 {
      font-size: 18px;
    }
    .el-col .desc {
      margin-top: 5%;
      width: 90%;
      margin-left: 5%;
    }
    .el-col .emial {
      margin-top: 5%;
      width: 90%;
      margin-left: 5%;
      word-break: break-all;
    }
  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }


.teaCon {
  max-width: 950px;
  margin: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  margin-bottom: 100px;
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
.teaCon.odd .boxLine {
  position: absolute;
  right: 20px;
}
.teaCon.odd .line {
  left: -20px;
}

.teaCon .imgBox {
  width: 350px;
  height: 300px;
  position: relative;
}
.teaCon .imgBox .boxLine {
  width: 220px;
  height: 294px;
  border: 1px solid #b09c70;
}
.teaCon .imgBox .line {
  width: 80px;
  height: 1px;
  background-color: #b09c70;
  position: absolute;
  z-index: 10;
  right: 10px;
  bottom: 70px;
}
.teaCon .imgBox img {
  width: 220px;
  height: 294.4px;
  position: absolute;
  top: 25px;
  left: 25px;
  z-index: 9;
}
.teaCon .infoBox {
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
  padding: 20px;
}

.teaCon .infoBox h3 {
  font-size: 40px; 
}
.teaCon .infoBox span {
  color: #b09c70;
  padding: 5px 0 0px;
  font-size:16px;
}
.teaCon .infoBox p {
  /*color: #aaaaaa;*/
  text-align: justify;
  line-height: 25px;
  font-size:17px;
}

/* 小于768 */
@media (max-width: 768px) {
  .teaCon {
    max-width: 768px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 50px;
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
    left: 10px;
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
