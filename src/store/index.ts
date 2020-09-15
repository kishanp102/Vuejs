import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { VuexPersistence } from 'vuex-persist';

Vue.use(Vuex);
const vuexLocalStorage = new VuexPersistence({
  key: 'state.Test',
  storage: window.localStorage,
});
export default new Vuex.Store({
  state: {
    favourite: [],
  },
  mutations: {


    SET_FAVOURITE_DATA: (state: any, data: any) => {
      state.favourite.push(data);
    },
    REMOVE_FAVOURITE_DATA: (state: any, data: any) => {

      state.favourite = data;
    },
  },
  actions: {
    setFavouriteData({ commit }: any, data: any) {
      commit('SET_FAVOURITE_DATA', data);
    },

    removeFavouriteData({ commit }: any, data: any) {
      console.log(data);

      commit('REMOVE_FAVOURITE_DATA', data);
    },
  },
  modules: {
  },
  plugins: [vuexLocalStorage.plugin],
});
