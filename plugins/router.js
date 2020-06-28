import {
  getToken
} from '../utils/auth'
import NProgress from 'nprogress'

export default ({
  app
}) => {


  //全局路由守卫，跳转新页面时滚动条回到顶部
  app.router.beforeEach((to, from, next) => {

    // 每次切换页面时，调用进度条
    NProgress.start();

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    next()
  })

  app.router.afterEach(() => {
    // 在即将进入新的页面组件前，关闭掉进度条
    NProgress.done()
  })
}
