import Vue from 'vue'
import Router from 'vue-router'
import home from "@/views/home/Home"
import about from "@/views/about/About"
import course from "@/views/course/Course"
import simulation from "@/views/course/Simulation"
import signal from "@/views/course/Signal"
import rehabilitation from "@/views/course/Rehabilitation"
import rendering from "@/views/course/Rendering"
import teacher from "@/views/teacher/Teacher"
import news from "@/views/news/News"
import contact from "@/views/contact/Contact"
import notFind from "@/components/404/NotFind"

Vue.use(Router)

// const home = () => import('@/views/home/Home')
// const about = () => import('@/views/about/About')
// const course = () => import('@/views/course/Course')
// const teacher = () => import('@/views/teacher/Teacher')
// const news = () => import('@/views/news/News')
// const contact = () => import('@/views/contact/Contact')

const routes = [
  { path: '', redirect: "/home" },
  { path: '/home', component: home, meta: { title: '首页' } },
  { path: '/about', component: about, meta: { title: '关于我们' } },
  { path: '/publication', component: course, meta: { title: 'publication' } },
  { path: '/simulation', component: simulation, meta: { title: 'Physics-based fluid modelling/simulation' } },
  { path: '/signal', component: signal, meta: { title: 'VR+ Physiological signal (EEG/EMG)' } },
  { path: '/rehabilitation', component: rehabilitation, meta: { title: 'VR + Rehabilitation' } },
  { path: '/rendering', component: rendering, meta: { title: 'Realistic Rendering' } },
  { path: '/member', component: teacher, meta: { title: 'member' } },
  { path: '/news', component: news, meta: { title: 'news' } },
  { path: '/contact', component: contact, meta: { title: '联系我们' } },
  { path: '*', component: notFind, meta: { title: '404' } },
]

const router = new Router({
  routes,
  // mode: 'history'
})

export default router
