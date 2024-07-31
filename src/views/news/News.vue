<template>
  <div>
    <sub-nav-banner />
    <div class="pubCon newsCon">
      <div class="pubTit">
        <h2>NEWS</h2> 
        <h3></h3>
      </div>
      <div class="box" v-for="item in newsList" :key="item.id">
        <a 
          ><h3>{{ item.title }}</h3></a
        >
        <p>{{ item.content }}</p>
        <div class="bottom">
          <span>{{ item.data }}</span>
        </div>
      </div>
      <div class="page">
        <a class="upPage" href="###">上一页</a>
        <a href="">1</a>
        <a class="nextPage" href="###">下一页</a>
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
      newsList: [
        {
          title: 'Conference Invitation',
          data: '2024-03',
          content:
            'Pro. Gao will serve as a reviewer of ISMAR 2024.',
        },
        {
          title: 'Conference Invitation',
          data: '2024-02',
          content:
            'Pro. Gao will serve as a program committee of CCF CAD/CG 2024.',
        },
        {
          title: 'Paper Publication',
          data: '2024-01',
          content:
            'One paper is accepted to CVPR, Pro. Gao serves as the main contributor.',
        },
        {
          title: 'Paper Publication',
          data: '2024-01',
          content:
            'One paper about AI+simulation is accepted to TVCG (Xueguang Xie).',
        },
        {
          title: 'Membership change',
          data: '2024-01',
          content:
            'Zhuo Chen has defended his master dissertation and graduated.',
        },
        {
          title: 'Paper Publication',
          data: '2023-12',
          content:
            'A survey about rendering technique is accepted to CGF (Shiyu Liang).',
        },
        {
          title: 'Membership change',
          data: '2023-12',
          content:
            'Xueguang Xie has defended her doctoral dissertation and becomes the FIRST PhD graduate from VIGA Lab.',
        },
        {
          title: 'Paper Publication',
          data: '2023-12',
          content:
            'Two works are accepted to VR 2024, one TVCG journal paper (Ming Li) and one poster (Kexin Wang).',
        },
        {
          title: 'Paper Publication',
          data: '2023-12',
          content:
            'One paper about AI+simulation is accepted to TVCG (Chunlei Li).',
        },
        {
          title: 'Paper Publication',
          data: '2023-12',
          content:
            'One paper about AI+interaction is accepted to AAAI (Lingjing Xu).',
        },
        {
          title: 'Paper Publication',
          data: '2023-09',
          content:
            'Pro. Gao will serve as a program committee of IEEE VR 2024.',
        },
        {
          title: 'Paper Publication',
          data: '2023-07',
          content:
            'One paper about VR rehabilitation is accepted to TVCG (Hongming Bai).',
        },
        {
          title: 'Paper Publication',
          data: '2023-04',
          content:
            'One paper about AI+simulation is accepted to TVCG (Jin Li).',
        },
      ],
    };
  },
};
</script>

<style scoped>
.newsCon {
  max-width: 950px;
  margin: auto;
}
.newsCon .box {
  border-bottom: 1px solid #f5f5f5;
  width: 90%;
  margin: auto auto 20px auto;
}
.newsCon .box a {
  text-decoration: none;
}
.newsCon .box a:hover {
  text-decoration: underline;
  color: #333333;
}
.newsCon .box h3 {
  color: #333333;
  font-size: 24px;
  padding: 8px 0px;
}
.newsCon .box p {
  font-size: 17px;
  line-height: 24px;
  color: #aaaaaa;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.newsCon .box .bottom {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 10px 0 0px;
  color: #aaaaaa;
  font-size: 12px;
}
.newsCon .page {
  padding: 0 0 80px;
  text-align: center;
}
.newsCon .page a {
  border: 1px solid #aaaaaa;
  padding: 8px 15px;
  border-radius: 3px;
  color: #aaaaaa;
  text-decoration: none;
}
</style>
