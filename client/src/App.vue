<template>
  <div id="app">
    <router-view></router-view>
    <router-link to='/addHouse' v-if="isAddFormShown === false" v-on:click.native="showAddForm"><md-button class="md-raised md-primary">Add House for Sale</md-button></router-link>
    <houseList v-if="!isAddFormShown" ></houseList>
  </div>
</template>

<script>
import HouseList from './components/HouseList';
import AddHouse from './components/AddHouse';
import Test from './components/Test';
import GMap from './components/GMap';

export default {
  name: 'app',
  computed: {
    isAddFormShown() {
      return this.$store.getters.isAddFormShown;
    }
  },
  data: function() {
    return {}
  },
  components: {
    HouseList, AddHouse, Test, GMap
  },
  methods: {
    fetchHouses() {
      console.log('app.vue methods fetchHouses');
      this.$store.dispatch('fetchHouses');
    },
    showAddForm() {
      console.log('app.vue methods showAddForm');
      this.$store.commit('showAddForm');
      this.$router.push('/addHouse');
    },
    closeAddForm() {
      console.log('app.vue methods closeAddForm');
      this.$store.commit('closeAddForm');
    }
  },
  created: function() {
    console.log('app.vue created');
    this.fetchHouses();
    this.closeAddForm();
  },
  mounted: function() {
    this.closeAddForm();
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
