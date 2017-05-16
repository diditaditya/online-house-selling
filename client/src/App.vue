<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <router-link to='/addHouse'><md-button class="md-raised md-primary">Add House for Sale</md-button></router-link>
    <houseList></houseList>
  </div>
</template>

<script>
import HouseList from './components/HouseList';
import AddHouse from './components/AddHouse';
import Test from './components/Test';
import GMap from './components/GMap';

export default {
  name: 'app',
  components: {
    HouseList, AddHouse, Test, GMap
  },
  methods: {
    fetchHouses() {
      console.log('app.vue methods fetchHouses');
      this.$store.dispatch('fetchHouses');
    }
  },
  created: function() {
    console.log('app.vue created');
    this.fetchHouses();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
