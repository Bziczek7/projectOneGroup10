const div = document.getElementById("exchange-rate-usd");

fetch("https://api.exchangerate-api.com/v4/latest/GBP")
  .then(response => response.json())
  .then(data => {
    div.innerHTML = `1 GBP = ${data.rates.USD} USD`;
  })
  .catch(error => {
    div.innerHTML = "Unable to retrieve exchange rate at this time.";
  });