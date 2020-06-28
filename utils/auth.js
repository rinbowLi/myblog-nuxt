import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, {
    expires: new Date().getTime() + 24 * 60 * 60 * 1000   //过期时间为一天
  })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
