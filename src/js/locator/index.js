const apiURL =
  //   "https://geo.ipify.org/api/v1?apiKey=at_9fxMB8QI2Vb3sMOfEWzwKyFaWsr4n&ipAddress=8.8.8.8";
  "https://geo.ipify.org/api/v1?apiKey=at_9fxMB8QI2Vb3sMOfEWzwKyFaWsr4n";

let data = [];

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

// 45.250.160.81
// 85.214.132.117

const searchField = document.getElementById("search-field");
const searchBtn = document.getElementById("search-btn");

searchField.addEventListener("keyup", (e) => {
  const searchString = e.target.value;
  console.log(searchString);

  const regexIP = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  if (regexIP.test(searchString)) {
    console.log("valid ip entered");
    queryIP(apiURL + "&ipAddress=" + searchString);
  } else {
    console.log("invalid ip entered");
  }
});

searchBtn.addEventListener("click", (e) => {
  //   if the entered string is correct, run the function
  //   if (validateIpString()) {
  //     queryIP(apiURL + "&ipAddress=" + searchString);
  //   }
});
