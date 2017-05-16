<template lang="html">
  <div>
    <div class="">
      <div v-for="(house, index) in houses" class="">
        <md-layout md-gutter="16">
          <md-layout md-flex-small="33" class="showCase">
            <img :src="house.imgUrl" alt="house image" class="thumbnail">
          </md-layout>
          <md-layout md-flex-small="33" class="showCase">
            <h3>{{ house.title }}</h3>
            <p>{{ house.description }}</p>
            <h4>IDR {{ house.price }}</h4>
          </md-layout>
          <md-layout md-flex-small="33" class="showCase">
            <test></test>
          </md-layout>
        </md-layout>
      </div>
    </div>

  </div>
</template>

<script>
import GMap from './GMap';
import Test from './Test';

export default {
  name: 'houseList',
  computed: {
    houses() {
      console.log('houselist.vue computed houses');
      return this.$store.getters.houses;
    }
  },
  components: { GMap, Test }
}
</script>

<style lang="css">

.showCase {
  margin: 1%;
  text-align: left;
  /*border: 1px solid grey;*/
}

.thumbnail {
  margin: 0 auto;
  display: block;
  padding: 5%;
  border-radius: 25%;
  max-width: 300px;
  max-height: 300px;
  width: auto;
  height: auto;
}

</style>
