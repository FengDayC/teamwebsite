<template>
  <div class="header">
    <div class="navBar" :class="{ open: isOpenMenu }">
      <div class="nav_logo"><router-link to="/">Virtual Intelligence and Graphical Animation Laboratory （VIGA Lab）</router-link></div>
      <div class="nav_menu">
        <router-link
          v-for="item in navMenuList"
          :key="item.id"
          :to="item.path"
          @click.native="isOpenMenu = !isOpenMenu"
          >{{ item.itmeName }}</router-link
        >
      </div>
      <div class="burger" @click="isOpenMenu = !isOpenMenu">
        <i v-if="!isOpenMenu" class="fa fa-navicon fa-2x"></i>
        <i v-else class="fa fa-close fa-2x"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navMenuList: [
        //导航
        { id: '001', path: '/home', itmeName: 'Home' },
        { id: '003', path: '/publication', itmeName: 'Publication' },
        { id: '004', path: '/member', itmeName: 'Member' },
        { id: '005', path: '/news', itmeName: 'News' },
      ],
      isOpenMenu: false, //小屏幕下是否显示菜单
    };
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 80px;
  background-color: rgba(100, 149, 237, 1);
  position: absolute;
  z-index: 99;
}
.navBar {
  max-width: 1500px;
  height: 80px;
  margin: auto;
  padding: 0 20px;
  color: #ffffff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 200;
  top: 0;
  left: 0;
}
.nav_logo a {
  color: #ffffff;
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
}
.nav_menu a {
  color: #ffffff;
  text-decoration: none;
  margin: 0 24px;
  font-size:18px;
}
.nav_menu a:hover {
  font-weight: bold;
}
.burger {
  display: none;
}

@media screen and (max-width: 960px) {
  .nav_menu {
    display: none;
  }
  .burger {
    display: block;
    cursor: pointer;
    z-index: 20;
  }
  .burger .fa-close {
    color: #ffffff;
  }

  .navBar.open .nav_menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: right;
    position: absolute;
    right: 0;
    top: 80px;
    width: 50vw;
    background-color: #2b2b2b;
    /* opacity: 0; */
    -webkit-animation: slideDown 0.5s ease-out 0s 1 normal forwards;
    animation: slideDown 0.5s ease-out 0s 1 normal forwards;
  }
  .navBar.open .nav_menu a {
    color: #fff;
    margin: 0;
    padding: 16px 20px;
    border-bottom: 1px solid #343434;
  }

  .navBar.open .nav_logo {
    color: #aaaaaa;
    z-index: 20;
  }
  .navBar.open .burger div {
    background-color: #aaaaaa;
  }
  /* 导航列表 */
  @-webkit-keyframes slideDown {
    from {
      right: -55%;
      opacity: 0;
    }
    to {
      right: 0;
      opacity: 1;
    }
  }
  @keyframes slideDown {
    from {
      right: -55%;
      opacity: 0;
    }
    to {
      right: 0;
      opacity: 1;
    }
  }
}
</style>
