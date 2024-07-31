<template>
  <div class="pubBg homeNews">
    <section class="pubCon">
      <div class="pubTit">
        <h2>NEWS</h2>
        <h3></h3>
      </div>
      <div class="news">
        <div class="new" v-for="item in newList" :key="item.id">
          <p class="new-tit">{{ item.title }}</p>
          <p class="new-info">
            {{ item.content }}
          </p>
          <p class="new-date">{{ item.date }}</p>
        </div>
      </div>
      <div>
      </div>
      <div class="news" style="margin-top:50px;">
        <div class="new" v-for="item in newList2" :key="item.id">
          <p class="new-tit">{{ item.title }}</p>
          <p class="new-info">
            {{ item.content }}
          </p>
          <p class="new-date">{{ item.date }}</p>
        </div>
      </div>
      <!--<div class="news" style="margin-top:50px;">
        <div class="new" v-for="item in newList2" :key="item.id">
          <p class="new-tit">{{ item.title }}</p>
          <p class="new-info">
            {{ item.info }}
          </p>
          <p class="new-date">{{ item.date }}</p>
        </div>
      </div>-->
      <router-link to="/news"><div class="moreBtn">MORE</div></router-link>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newList: [
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
      ],
      newList2: [
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
      ],
    };
  },
};
</script>

<style scoped>
.pubCon {
  padding-bottom: 50px;
}
.news {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.new {
  width: 30%;
  border-right: 1px solid #DDDDDD; 
  padding: 0 40px;
}
.new:last-child {
  border-right: none;
}

.new .new-tit {
  font-size: 16px;
  line-height: 50px;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.new .new-info {
  font-size: 14px;
  color: #aaaaaa;
  text-align: left;
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
  line-height: 23px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  /* -moz-text-overflow: ellipsis; */
  overflow: hidden;
  text-align: justify;
  height: 74px;
}
.new .new-date {
  font-size: 12px;
  color: #aaaaaa;
  line-height: 30px;
}

.moreBtn {
  width: 133px; 
  padding: 10px 0;
  border: 1px solid;
  border-color: #b09c70;
  color: #b09c70;
  text-align: center; 
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  margin: 50px auto 0 auto;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.moreBtn:hover {
  background-color: #b09c70;
  color: #f5f5f5;
}

/* 小于768 */
@media (max-width: 768px) {
  .new {
    width: 90%;
    border-right: none;
    padding: 0;
  }
}
</style>
