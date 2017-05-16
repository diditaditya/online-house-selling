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
          <label>Coordinate</label>
          <md-input v-model="coordinate" placeholder="Coordinate"></md-input>
        </md-input-container>
        <test2></test2>
      </form>
    </div>
  </div>
</template>

<script>

import Test2 from './Test2';

export default {
  name: 'addHouse',
  data: function() {
    return {
      title: '',
      description: '',
      price: '',
      address: '',
      imgUrl: '',
      contact_person: '',
      phone: '',
      email: '',
      coordinate: ''
    }
  },
  components: { Test2 }
}
</script>

<style lang="css">
* {
  /*border: 1px solid grey;*/
}
</style>
