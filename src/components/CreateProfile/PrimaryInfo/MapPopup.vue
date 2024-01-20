<template>
  <MainPopup
    :visible="visible"
    @close="emits('close')"
  >
    <div style="display: none">
      <input
          id="pac-input"
          class="controls"
          type="text"
          placeholder="Enter a location"
      />
    </div>
    <div id="map" style="width: 700px;height:500px;"></div>
    <div id="infowindow-content">
      <span id="place-name" class="title"></span><br />
      <strong>Place ID:</strong> <span id="place-id"></span><br />
      <span id="place-address"></span>
    </div>
    <button class="complete btn blue-btn" @click="setPlace">
      Применить
    </button>
  </MainPopup>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import {Loader} from "@googlemaps/js-api-loader";
import MainPopup from "@/components/common/MainPopup.vue";

defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
})

const emits = defineEmits([
    'close',
    'setPlace',
])

const coords = reactive({})
const placeName = ref('')

function setPlace() {
  emits('setPlace', { placeName, coords })
}

onMounted(() => {
  let map;
  const center = { lat: 41.90476224706472, lng: 12.49822074385094 };
  const zoom = 14;
  const url = "https://maps.googleapis.com/maps/api/staticmap";
  const loader = new Loader({
    apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    version: "weekly",
    libraries: ["places"],
  });

  const wrapper = document.getElementById("map");

  wrapper.style.backgroundImage = `url(${url}?center=${center.lat},${center.lng}&zoom=${zoom}&scale=2&size=${wrapper.clientWidth}x${wrapper.clientHeight}&key=${process.env.VUE_APP_GOOGLE_MAPS_API_KEY})`;
  loader.load().then(() => {

    map = new google.maps.Map(document.getElementById("map"), {// eslint-disable-line
      center,
      zoom,
    });
    const input = document.getElementById("pac-input");
    // Specify just the place data fields that you need.
    const autocomplete = new google.maps.places.Autocomplete(input, {// eslint-disable-line
      fields: ["place_id", "geometry", "formatted_address", "name"],
    });

    autocomplete.bindTo("bounds", map);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);// eslint-disable-line

    const infowindow = new google.maps.InfoWindow();// eslint-disable-line
    const infowindowContent = document.getElementById("infowindow-content");

    infowindow.setContent(infowindowContent);

    const marker = new google.maps.Marker({ map: map });// eslint-disable-line

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
    autocomplete.addListener("place_changed", () => {
      infowindow.close();

      const place = autocomplete.getPlace();

      if (!place.geometry || !place.geometry.location) {
        return;
      }

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      marker.setPlace({
        placeId: place.place_id,
        location: place.geometry.location,
      });
      placeName.value = place.formatted_address;
      coords.value = {
        lat: place.geometry.location.lat(),
        ing: place.geometry.location.lng(),
      };
      marker.setVisible(true);
      infowindowContent.children.namedItem("place-name").textContent = place.name;
      infowindowContent.children.namedItem("place-id").textContent = place.place_id;
      infowindowContent.children.namedItem("place-address").textContent = place.formatted_address;
      infowindow.open(map, marker);
    });
  });
})
</script>

<style scoped>
#map {
  height: 100%;
}
.controls {
  background-color: #fff;
  border-radius: 2px;
  border: 1px solid transparent;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  height: 29px;
  margin-left: 17px;
  margin-top: 10px;
  outline: none;
  padding: 0 11px 0 13px;
  text-overflow: ellipsis;
  width: 400px;
}

.controls:focus {
  border-color: #4d90fe;
}

.title {
  font-weight: bold;
}

.complete {
  margin-top: 10px;
}

#infowindow-content {
  display: none;
}

#map #infowindow-content {
  display: inline;
}
</style>