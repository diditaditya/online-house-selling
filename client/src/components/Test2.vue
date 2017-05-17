<template lang="html">
  <div id="mapAddHouse">
    <gmap-map
    :center="stateMarker"
    :zoom="18"
    :clickable="true"
    scrollwheel="false"
    style="width: 100%; height: 500px"
    v-on:click="mapClicked"
  >
    <gmap-marker
      :position="stateMarker"
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
  computed: {
    stateMarker() {
      return this.$store.getters.marker;
    }
  },
  data: function() {
    return {
      center: {lat: -6.2372963, lng: 106.7904324}
    }
  },
  methods: {
    mapClicked: function(mouseArgs) {
      let coordinate = {
        lat: mouseArgs.latLng.lat(),
        lng: mouseArgs.latLng.lng()
      };
      this.$store.commit('setMarker', coordinate);
    },
    setMarker: function() {

    }
  }
}
</script>

<style lang="css">

#mapAddHouse {
  text-align: center;
  display: block;
  height: 100%;
  margin: 0 auto;
  padding: 0;
}

</style>
