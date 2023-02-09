const divUSD = document.getElementById("exchange-rate-usd");
const divEUR = document.getElementById("exchange-rate-eur");
const divJPY = document.getElementById("exchange-rate-jpy");
const divUpdate = document.getElementById("exchange-rate-update");
let firstCurr = document.getElementById("firstCurr");
let secondCurr = document.getElementById("secondCurr");
let amountCurr = document.getElementById("amountCurr");
let exchangeButton = document.getElementById("exchangeButton");
const APIKey = "1e4be685bced6be0ff04f5fc";
let displayCurrency = document.getElementById("displayCurrency");
let historyButton = document.getElementById("historyButton");
let clearButton = document.getElementById("clearButton");
let searchIndex = 0;
let historyString = "";


let transaction = {
  base: '',
  quote: '',
  amount: 0,
  exchangeAmount: 0
};

let transactionHistory = [];
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



  exchangeButton.addEventListener("click", function() {

    transaction.base = firstCurr.value;
    transaction.quote = secondCurr.value;
    transaction.amount = amountCurr.value;
    console.log(transaction)
    fetch(`https://v6.exchangerate-api.com/v6/${APIKey}/pair/${transaction.base}/${transaction.quote}/${transaction.amount}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      transaction.exchangeAmount = data.conversion_result;
      transactionHistory.push(transaction);

  
      render();
    })
    .catch(error => {
      transaction.exchangeAmount = "No exchange rate data available at this time.";
      
    });




  });


clearButton.addEventListener("click",  function() {
  displayCurrency.innerText = "";
})

historyButton.addEventListener("click",  function() {
  renderHistory();
})
  function render(){
    historyString = `<div><p> Curently ${transaction.amount} of ${transaction.base} is equal to ${transaction.exchangeAmount} of ${transaction.quote} </p></div> `
    // displayCurrency.prepend(historyString);
    displayCurrency.innerHTML+=historyString;
    localStorage.setItem(searchIndex, historyString);
    searchIndex++;
  }

  function renderHistory(){
    for(let i = localStorage.length; i > 0; i--){
      // displayCurrency.prepend(localStorage.getItem(i))
      displayCurrency.innerHTML+=localStorage.getItem(i);
    }
      // transactionHistory[i].transaction.amount 
  }

  
