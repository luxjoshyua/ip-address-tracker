const { map } = require("jquery");

import { apiKey } from "../apikey/index";
// console.log(apiKey);

loadMapsJSAPI();
function runApp() {
  console.log("Maps JS API loaded");
  const map = displayMap();
}

function loadMapsJSAPI() {
  const googleMapsAPIKey = apiKey;
  const googleMapsAPIURI = `https://maps.googleapis.com/maps/api/js?key=${googleMapsAPIKey}&callback=runApp`;
  const script = document.createElement("script");

  script.src = googleMapsAPIURI;
  script.defer = true;
  script.async = true;

  window.runApp = runApp;
  document.head.appendChild(script);
}

function displayMap() {
  const mapOptions = {
    center: { lat: -33.860664, lng: 151.208138 },
    zoom: 14,
  };
  const mapDiv = document.getElementById("map");
  return new google.maps.Map(mapDiv, mapOptions);
}
