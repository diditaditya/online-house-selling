import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    houses: []
  },
  getters: {
    houses(state) {
      return state.houses;
    }
  },
  mutations: {
    fillHouseData(state, houses) {
      console.log('store.js mutations fillHouseData');
      state.houses = houses;
    }
  },
  actions: {
    fetchHouses({commit}) {
      console.log('store.js actions fetchHouses');
      let url = 'http://localhost:3000/houses';
      Vue.axios.get(url)
        .then((response) => {
          commit('fillHouseData', response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
});
