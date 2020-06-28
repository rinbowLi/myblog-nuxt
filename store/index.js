import {
  getToken
} from '../utils/auth'
import VuexPersistence from 'vuex-persist'

const state = () => {
  return {
    keyword: "",
    token: getToken(),
    username: ""
  }
}

const getters ={
  getStateToken(state){
    return state.token
  }
}

const mutations = {
  setKeyword(state, keyword) {
    state.keyword = keyword;
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_USERNAME(state, username) {
    state.username = username
  },
}


export default {
  state,
  mutations,
  getters
}
