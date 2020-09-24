const apiURL =
  //   "https://geo.ipify.org/api/v1?apiKey=at_9fxMB8QI2Vb3sMOfEWzwKyFaWsr4n&ipAddress=8.8.8.8";
  "https://geo.ipify.org/api/v1?apiKey=at_9fxMB8QI2Vb3sMOfEWzwKyFaWsr4n";

let data = [];
console.log("loading");
function queryIP(apiURL) {
  fetch(apiURL)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      // check api is pulling expected data
      //   console.log("This is what res looks like", res);
      data = res;
      setLocation(res);
      //   searchFunction(res);
    })
    .catch((error) => {
      console.log("Here is our error catching", error);
    });
}

// call my apiLoad function on page load
window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  queryIP(apiURL);
});

const setLocation = (data) => {
  //   console.log(data);
  //   ip
  const ip = document.getElementById("ip");
  ip.innerHTML = `${data.ip}`;
  //   location
  const location = document.getElementById("location");
  location.innerHTML = `${data.location.city}, ${data.location.region}`;
  //   timezone
  const timezone = document.getElementById("timezone");
  timezone.innerHTML = `${data.location.timezone}`;
  //   isp
  const isp = document.getElementById("isp");
  isp.innerHTML = `${data.isp}`;
};

const searchField = document.getElementById("search-field");
const searchBtn = document.getElementById("search-btn");

// check if there are 9 characters, 4 full stops in between, then run the function, otherwise break

// searchField.addEventListener("keyup", (e) => {
//   const searchString = e.target.value.toLowerCase();
//   console.log(searchString);

//   if (searchString.length >= 5) {
//     queryIP(apiURL + "&ipAddress=" + searchString);
//   }
// });
searchBtn.addEventListener("click", (e) => {
  const searchString = e.target.value.toLowerCase();

  console.log("click", e);
  //   console.log(searchString);
  queryIP(apiURL + "&ipAddress=" + searchString);
});

// separate function to validate the entered strings, match to ip

function validateIpString() {}
