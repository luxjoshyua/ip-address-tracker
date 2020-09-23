const apiURL =
  "https://geo.ipify.org/api/v1?apiKey=at_9fxMB8QI2Vb3sMOfEWzwKyFaWsr4n&ipAddress=8.8.8.8";

let data = [];

fetch(apiURL)
  .then((data) => {
    return data.json();
  })
  .then((res) => {
    // check api is pulling expected data
    // console.log("This is what res looks like", res);
    data = res;
    setLocation(res);
    searchFunction(res);
  })
  .catch((error) => {
    console.log("Here is our error catching", error);
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
  timezone.innerHTML = `${data.domains[0]}`;
  //   isp
  const isp = document.getElementById("isp");
  isp.innerHTML = `${data.isp}`;
};

const searchFunction = (data) => {
  console.log(data);
  const searchField = document.getElementById("search");

  searchField.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);
  });
};
