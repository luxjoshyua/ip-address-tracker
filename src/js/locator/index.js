import "leaflet";
import locationImg from "../../assets/images/icon-location.svg";

const searchField = document.getElementById("search-field");
const searchBtn = document.getElementById("search-btn");
const resultDataElement = document.getElementById("result-data");

const resultsContainerElement = document.querySelector(".results-container");
let ipAddress;

let lat = 10,
  lng = 1;

// generate map
var mymap = L.map("ipLocation").setView([lat, lng], 5);
// custome pointer icon
const pointer = L.icon({
  //   iconUrl: "../../assets/images/icon-location.svg",
  iconUrl: locationImg,
  iconSize: [30, 36],
  iconAnchor: [15, 18],
});
// url for openstreetmap
const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>';
L.tileLayer(url, { attribution: attribution }).addTo(mymap);

const apiURL = "https://geo.ipify.org/api/v1";
const apiKey = "at_9fxMB8QI2Vb3sMOfEWzwKyFaWsr4n";

document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    searchField.classList.remove("empty-field");
    ipSubmit();
  }
});

searchBtn.addEventListener("click", () => {
  searchField.classList.remove("empty-field");
  ipSubmit();
});

// 49.255.227.193
// http://www.vocus.com.au

const ipSubmit = () => {
  // check if the value isn't empty
  if (searchField.value) {
    ipAddress = searchField.value;

    //   validate IP address
    if (!validateIPAddress(ipAddress)) {
      // if IP Address is invalid
      searchField.classList.add("empty-field");
      searchField.value = "Invalid IP";
      return;
    }

    // get data for given IP
    const response = fetch(`${apiURL}?apiKey=${apiKey}&ipAddress=${ipAddress}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        // generate and display results
        // console.log(response);
        resultDataElement.innerHTML = returnDataList(response);
        resultsContainerElement.classList.add("show");

        // set new latitude and longitude from IP
        lat = response.location.lat;
        lng = response.location.lng;
        updateLatLng(lat, lng);
      });
  } else {
    searchField.classList.add("empty-field");
  }
};

// move pointer to new latitude and longitude
function updateLatLng(x, y) {
  const lat = x,
    lng = y;
  const marker = L.marker([lat, lng], { icon: pointer }).addTo(mymap);
  const latLngs = [marker.getLatLng()];
  const markerBounds = L.latLngBounds(latLngs);
  mymap.fitBounds(markerBounds, {
    paddingTopLeft: [lat, lng],
    maxZoom: 17,
  });
  marker.setLatLng([lat, lng]);
}

// validate IP address
const validateIPAddress = (ipAddress) => {
  const regexIP = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  if (ipAddress.match(regexIP)) {
    return true;
  }
  return false;
};

// generate results
function returnDataList(data) {
  return `
    <div class="results-item">
      <h5 class="heading">ip address</h5>
      <h3 class="result">${data.ip}</h3>
    </div>
    <div class="results-item">
      <h5 class="heading">location</h5>
      <h3 class="result">${data.location.city}, ${data.location.country}, ${data.location.region}</h3>
    </div>
    <div class="results-item">
      <h5 class="heading">timezone</h5>
      <h3 class="result">${data.location.timezone}</h3>
    </div>
    <div class="results-item">
      <h5 class="heading"> isp</h5>
      <h3 class="result">${data.isp}</h3>
    </div>`;
}
