import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/register/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '仪表盘', icon: 'dashboard' }
    }]
  }
]
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/info',
    name: 'info',
    component: Layout,
    meta: { title: '平台简介', icon: 'table' },
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/info/index'),
        meta: { title: '平台简介', icon: 'table' }
      }
    ]
  },
  {
    path: '/realTime',
    component: Layout,
    redirect: 'noRedirect',
    meta: { title: '实时数据', icon: '文件夹' },
    children: [
      {
        path: '/virusDetection',
        name: 'virusDetection',
        component: () => import('@/views/realTime/virusDetection/index'),
        meta: { title: '活动轨迹', icon: 'table' }
      },
      {
        path: '/hospital',
        name: 'hospital',
        component: () => import('@/views/realTime/hospital/index'),
        meta: { title: '定点医院', icon: 'table' }
      },
      {
        path: '/expressway',
        name: 'expressway',
        component: () => import('@/views/realTime/expressway/index'),
        meta: { title: '高速路况', icon: 'table' }
      },
      {
        path: '/thermodynamic',
        name: 'thermodynamic',
        component: () => import('@/views/realTime/thermodynamic/index'),
        meta: { title: '热力图', icon: 'table' }
      }
    ]
  },
  {
    path: '/assess',
    name: 'assess',
    component: Layout,
    meta: { title: '健康评估', icon: 'table' },
    children: [
      {
        path: '/assessIndex',
        name: 'assessIndex',
        component: () => import('@/views/assess/index'),
        meta: { title: '健康评估', icon: 'table' }
      }
    ]
  },
  {
    path: '/inform',
    name: 'inform',
    component: Layout,
    meta: { title: '防疫通知', icon: 'table' },
    children: [
      {
        path: '/enter',
        name: 'informEnter',
        component: () => import('@/views/inform/enter/index'),
        meta: { title: '信息录入', icon: 'table' }
      },
      {
        path: '/sms',
        name: 'informSms',
        component: () => import('@/views/inform/sms/index'),
        meta: { title: '短信通知', icon: 'table' }
      }
    ]
  },
  {
    path: '/model',
    name: 'model',
    component: Layout,
    meta: { title: '模型预测', icon: 'table' },
    children: [
      {
        path: '/modelIndex',
        name: 'modelIndex',
        component: () => import('@/views/model/index'),
        meta: { title: '模型预测', icon: 'table' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
