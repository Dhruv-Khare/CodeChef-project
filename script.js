// Api key: CG - HhbUi8uSb9PZHjsBc6mfrkbS

// https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd"

let bitcoin = document.getElementById("bitcoin");
let dogecoin = document.getElementById("dogecoin");
let ethereum = document.getElementById("ethereum");

// var setting = {
//     "async" : true,
//     "scrossDomain" : true,
//     "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
//     "method" : "GET",
//     "headers" : {}
// }

// $.ajax(setting).done(function (response) {
//     bitcoin.innerHTML = response.bitcoin.usd;
//     dogecoin.innerHTML = response.dogecoin.usd;
//     ethereum.innerHTML = response.ethereum.usd;
// })

const apiURL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";

//Using async & await

async function getCost(url) {
  let data = await fetch(url);
  let response = await data.json();
  bitcoin.innerHTML = response.bitcoin.usd;
  dogecoin.innerHTML = response.dogecoin.usd;
  ethereum.innerHTML = response.ethereum.usd;
}

getCost(apiURL);
var icon = document.getElementById("icon");
var container = document.getElementsByClassName("container");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "Images/sunny.png";

    for (var i = 0; i < container.length; i++) {
      container[i].style.background = url("Images/light.png");
    }
  } else {
    icon.src = "Images/crescent-moon.png";

    for (var i = 0; i < container.length; i++) {
      container[i].style.background = url("Images/background.png");
    }
  }
};