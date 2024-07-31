import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// 跳转之后返回顶部
router.afterEach(() => {
  // chrome
  // document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  // window.pageYOffset = 0 
})


Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
