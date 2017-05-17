<template lang="html">
  <div id="map">
    <gmap-map
    :center="marker"
    :zoom="15"
    scrollwheel="false"
    style="width: 500px; height: 300px"
  >
    <gmap-marker
      :position="marker"
    ></gmap-marker>
  </gmap-map>
  </div>
</template>

<script>

let map;

export default {
  name: 'test',
  props: ['coordinate'],
  data: function() {
    return {
      center: {lat: -6.2372963, lng: 106.7904324},
      marker: {}
    }
  },
  methods: {
    parseCoordinate() {
      let parsedCoor = this.coordinate.split(",");
      this.marker.lat = Number(parsedCoor[0]);
      this.marker.lng = Number(parsedCoor[1]);
    }
  },
  mounted: function() {
    this.parseCoordinate();
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
