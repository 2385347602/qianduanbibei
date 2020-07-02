/*
路由懒加载:
  1. 使用 import 函数: 被引入的模块单独打包(生成一个单独的打包文件)
  2. 配置的component是: 返回import()得到的模块的函数, 只有当请求对应的path, 才会执行此函数, 从后台获取对应的包
好处:
  减小首屏需要加载的js
 */


const Home = () => import('../components/home');
const product = () => import('../components/product');
const rescue = () => import('../components/rescue');


export default [
  {
    path:"/home",
    component:Home,
    meta: {
      showFooter:true,
      showHeader:true
    }
  },
  {
    path:'/product',
    component:product,
  },
  {
    path:'/rescue',
    component:rescue
  },



  {
    path:'/',
    redirect: '/home'
  }
]
