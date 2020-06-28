import {
  getToken
} from '@/utils/auth'
import getCookie from '@/utils/getCookie'

export default function ({
  route,
  req,
  res,
  store,
  redirect
}) {
  debugger
  if (route.meta && route.meta.length > 0 && route.meta[0].needLogin === true) {
    let isClient = process.client;
    let isServer = process.server;
    let redirectURL = '/login';
    var token, path;
    // 在服务端
    if (isServer) {
      // 获取服务端cookie
      let cookies = getCookie.getcookiesInServer(req)
      // 获取当前服务端cookie中是否含有token字段
      token = cookies.token ? cookies.token : ''
    }
    // 在客户端
    if (isClient) {
      // 获取客户端（本地）cookie中的token字段
      token = store.getters.getStateToken;
    }

    // 判断是否获取到token
    // 未获取到，重定向到登陆页面
    console.log(token)
    if (!token) {
      redirect(redirectURL)
    }
  }

}
