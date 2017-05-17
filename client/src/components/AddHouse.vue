<template lang="html">
  <div class="">
    <h1>Add House</h1>
    <div class="">
      <form novalidate @submit.stop.prevent="submit" style="margin-left: 25%; margin-right: 25%">
        <md-input-container>
          <label>Title</label>
          <md-input v-model="title" placeholder="Title"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Description</label>
          <md-input v-model="description" placeholder="Description"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Price (IDR)</label>
          <md-input v-model="price" placeholder="Price"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Address</label>
          <md-input v-model="address" placeholder="Address"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Image URL</label>
          <md-input v-model="imgUrl" placeholder="Image URL"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Contact Person</label>
          <md-input v-model="contact_person" placeholder="Name"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Phone</label>
          <md-input v-model="phone" placeholder="Phone Number"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Email (Optional)</label>
          <md-input v-model="email" placeholder="Email Address"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Location (Mark the map below)</label>
          <md-input :value="marker.lat+','+marker.lng" placeholder="Coordinate" style="color: grey"></md-input>
        </md-input-container>
        <test2></test2>
        <router-link to='/'><md-button v-on:click.native="closeAddForm" class="md-raised md-primary">Cancel</md-button></router-link>
        <md-button v-on:click.native="addHouse" class="md-raised md-primary" type="button">Post a New House Ad</md-button>
      </form>
    </div>
  </div>
</template>

<script>

import Test2 from './Test2';

export default {
  name: 'addHouse',
  computed: {
    marker() {
      return this.$store.getters.marker;
    }
  },
  data: function() {
    return {
      title: '',
      description: '',
      price: '',
      address: '',
      imgUrl: '',
      contact_person: '',
      phone: '',
      email: ''
    }
  },
  components: { Test2 },
  methods: {
    addHouse() {
      console.log('addhouse.vue methods addhouse');
      let house = {
        title: this.title,
        description: this.description,
        price: this.price,
        address: this.address,
        imgUrl: this.imgUrl,
        contact_person: this.contact_person,
        phone: this.phone,
        email: this.email,
        coordinate: `${this.marker.lat},${this.marker.lng}`
      };
      this.$store.dispatch('addHouse', house);
      this.closeAddForm();
      this.$router.push('/');
    },
    closeAddForm() {
      console.log('addhouse.vue methods closeAddForm');
      this.$store.commit('closeAddForm');
    }
  },
  mounted: function() {
    this.$store.commit('showAddForm');
  }
}
</script>

<style lang="css">
* {
  /*border: 1px solid grey;*/
}
</style>
