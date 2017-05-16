<template lang="html">
  <div id="map">
    <gmap-map
    :center="center"
    :zoom="18"
    scrollwheel="false"
    style="width: 500px; height: 300px"
  >
    <gmap-marker
      :position="center"
    ></gmap-marker>
  </gmap-map>
  </div>
</template>

<script>

let map;

export default {
  name: 'test',
  data: function() {
    return {
      center: {lat: -6.2372963, lng: 106.7904324},
      markers: [{position: {lat: -6.2372963, lng: -6.2372963}}]
    }
  },
  methods: {
    // initMap() {
    //   let self = this;
    //   new google.maps.Map(document.getElementById('map'),{
    //     center: {lat: -6.2372963, lng: 106.7904324},
    //     zoom: 8
    //   });
    // }
  }
}
</script>

<style lang="css">

#map {
  height: 100%;
  margin: 0;
  padding: 0;
}

</style>
