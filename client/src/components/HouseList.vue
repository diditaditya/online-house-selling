<template lang="html">
  <div>
    <div class="">
      <div v-for="(house, index) in houses" class="">
        <md-layout md-gutter="16">
          <md-layout md-flex-small="33" class="showCase">
            <img :src="house.imgUrl" alt="house image" class="thumbnail">
          </md-layout>
          <md-layout md-flex-small="33" class="showCase">
            <div class="">
              <span>{{ house.title }}</span><br>
              <span>{{ house.description }}</span><br>
              <span>IDR {{ house.price }}</span><br>
              <span>Contact:</span><br>
              <span>{{ house.contact_person }}</span><br>
              <span>{{ house.phone }}</span><br>
              <span>{{ house.email }}</span>
            </div>
          </md-layout>
          <md-layout md-flex-small="33" class="showCase">
            <test :coordinate="house.coordinate"></test>
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
