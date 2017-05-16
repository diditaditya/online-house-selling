<template lang="html">
  <div class="">
    <gmap-map
    :center="center"
    :zoom="5"
    scrollwheel="false"
    style="width: 250px; height: 250px"
  >
    <gmap-marker
      :position="markers.position[0]"
      :clickable="true"
      :draggable="false"
      <!-- @click="center=markers.position[0]" -->
    ></gmap-marker>
  </gmap-map>
  </div>
</template>

<script>

// import * as VueGoogleMaps from 'vue2-google-maps';
// import Vue from 'vue';
//
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyAZWSDAJkBjHDdaKe7tPnqT6WKxOzcLUAE'
//   }
// });

export default {
  name: 'gmaps',
  data: function () {
        return {
          center: {lat: -6.2372963, lng: 106.7904324},
          markers: [{position: {lat: -6.2372963, lng: -6.2372963}}]
        }
      }
}
</script>

<style lang="css">
</style>
