<template lang="html">
  <div id="map">
    <gmap-map
    :center="center"
    :zoom="18"
    :clickable="true"
    scrollwheel="false"
    style="width: 500px; height: 300px"
    v-on:click="mapClicked"
  >
    <gmap-marker
      :position="center"
      :clickable="true"
      :draggable="true"
      @g-click="center"
    ></gmap-marker>
  </gmap-map>
  </div>
</template>

<script>

export default {
  name: 'test2',
  data: function() {
    return {
      center: {lat: -6.2372963, lng: 106.7904324},
      markers: [{position: {lat: -6.2372963, lng: -6.2372963}}]
    }
  },
  methods: {
    mapClicked: function(mouseArgs) {
      // alert('clicked');
      console.log('map clicked', mouseArgs);
      console.log(mouseArgs.latLng.lat());
      console.log(mouseArgs.latLng.lng());
    }
  }
}
</script>

<style lang="css">
</style>
