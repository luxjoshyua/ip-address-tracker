// const apiURL =
//   "https://geo.ipify.org/api/v1?apiKey=at_9fxMB8QI2Vb3sMOfEWzwKyFaWsr4n&ipAddress=8.8.8.8";
//   "https://geo.ipify.org/api/v1?apiKey=at_9fxMB8QI2Vb3sMOfEWzwKyFaWsr4n";

// let data = [];

// const searchField = document.getElementById("search-field");
// const searchBtn = document.getElementById("search-btn");

// function queryIP(apiURL) {
//   fetch(apiURL)
//     .then((data) => {
//       return data.json();
//     })
//     .then((res) => {
//       // check api is pulling expected data
//       //   console.log("This is what res looks like", res);
//       data = res;
//       console.log(res);
//       setLocation(res);
//       //   searchFunction(res);
//     })
//     .catch((error) => {
//       console.log("Here is our error catching", error);
//     });
// }

// `const setLocation = (data) => {
//   //   console.log(data);
//   //   ip
//   const ip = document.getElementById("ip");
//   ip.innerHTML = `${data.ip}`;
//   //   location
//   const location = document.getElementById("location");
//   location.innerHTML = `${data.location.city}, ${data.location.region}`;
//   //   timezone
//   const timezone = document.getElementById("timezone");
//   timezone.innerHTML = `${data.location.timezone}`;
//   //   isp
//   const isp = document.getElementById("isp");
//   isp.innerHTML = `${data.isp}`;
// };`

// 45.250.160.81
// 85.214.132.117
// http://www.vocus.com.au

// searchField.addEventListener("keyup", (e) => {
//   const searchString = e.target.value;

//   //   regex for ip
//   const regexIP = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

//   // regex for domain
//   const regexDomain = /^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}\.(xn--)?([a-z0-9\-]{1,61}|[a-z0-9-]{1,30}\.[a-z]{2,})$/;

//   if (regexIP.test(searchString)) {
//     console.log("valid ip entered or valid domain entered");
//     // queryIP(apiURL + "&ipAddress=" + searchString);
//   } else {
//     console.log("invalid ip entered");
//   }
// });
