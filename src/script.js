const divUSD = document.getElementById("exchange-rate-usd");
const divEUR = document.getElementById("exchange-rate-eur");
const divJPY = document.getElementById("exchange-rate-jpy");
const divUpdate = document.getElementById("exchange-rate-update");

//fetch("https://api.currencyfreaks.com/latest?apikey=3fb12eb653094ca69e6b7dd7c06b890a&symbols=USD,EUR,JPY&base=GBP")
  //.then(response => response.json())
  //.then(data => console.log(data)
 // }
 // )

 fetch("https://v6.exchangerate-api.com/v6/1e4be685bced6be0ff04f5fc/latest/GBP")
 .then(response => response.json())
 .then(data => {
    divUSD.innerHTML = `1 GBP = ${data.conversion_rates.USD} USD`;
    divEUR.innerHTML = `1 GBP = ${data.conversion_rates.EUR} EUR`;
    divJPY.innerHTML = `1 GBP = ${data.conversion_rates.JPY} JPY`;
    divUpdate.innerHTML = `Rates last updated: ${data.time_last_update_utc}`;
    
 })


  .catch(error => {
    divUSD.innerHTML = "No exchange rate data available at this time.";
    divEUR.innerHTML = "No exchange rate data available at this time.";
    divJPY.innerHTML = "No exchange rate data available at this time.";
  });