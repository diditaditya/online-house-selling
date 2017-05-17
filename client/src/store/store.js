import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    houses: [],
    marker : {
      lat: -6.2372963,
      lng: 106.7904324,
    },
    isAddFormShown: false
  },
  getters: {
    houses(state) {
      return state.houses;
    },
    marker(state) {
      return state.marker;
    },
    isAddFormShown(state) {
      return state.isAddFormShown;
    }
  },
  mutations: {
    fillHouseData(state, houses) {
      console.log('store.js mutations fillHouseData');
      state.houses = houses;
    },
    setMarker(state, coordinateObj) {
      state.marker.lng = coordinateObj.lng;
      state.marker.lat = coordinateObj.lat;
    },
    addHouse(state, house) {
      console.log('store.js mutations addHouse');
      state.houses.push(house);
    },
    showAddForm(state) {
      console.log('store.js mutations showAddForm');
      state.isAddFormShown = true;
    },
    closeAddForm(state) {
      state.isAddFormShown = false;
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
    },
    addHouse({commit}, house) {
      console.log(('store.js actions addHouse'));
      let url = 'http://localhost:3000/houses'
      Vue.axios.post(url, house)
        .then((response) => {
          console.log(response.data);
          commit('addHouse', response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
});
