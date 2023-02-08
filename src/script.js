const divUSD = document.getElementById("exchange-rate-usd");
const divEUR = document.getElementById("exchange-rate-eur");
const divJPY = document.getElementById("exchange-rate-jpy");
const divUpdate = document.getElementById("exchange-rate-update");

// fetch(`https://api.currencyfreaks.com/latest?apikey=3fb12eb653094ca69e6b7dd7c06b890a&symbols=USD,EUR,JPY&base=GBP`)
//   .then(response => response.json())
//   .then(data => console.log(data)
//  );

const newsList = document.querySelector('.latestNews');
function currencyNews() {
  apiKey= `0bS7mxa8qAVf78u0k10ZwEnILvZ4AJelAtGiOzCl`;

  fetch(`https://api.marketaux.com/v1/news/all?symbols=TSLA%2CAMZN%2CMSFT&filter_entities=true&language=en&api_token=${apiKey}`)
.then((response) => {
  return response.json()
}).then((data) =>{
  console.log(data)
  data.data.forEach(data =>{
    let li= document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', data.url);
    a.setAttribute('target', '_blank');
    a.textContent = data.title;
    li.appendChild(a);
    newsList.appendChild(li);

  })
  });
}





  //   .then(response => response.json())
//   .then(data => {
//     console.log(data)

//   let latestNews = data.data;

//   var NewsDiv = $("<div>");
//   var title = $("<h3>");
//   title.addClass("title");
//   title.text((`${latestNews[0].title}`));
//   $(NewsDiv).append(title);
//   $("#latestNews").append(NewsDiv); 
//   console.log(latestNews);
// })




  currencyNews()

// for (let i = 0; i < latestNews.length; i++) {
//   }





 fetch("https://v6.exchangerate-api.com/v6/1e4be685bced6be0ff04f5fc/latest/GBP")
 .then(response => response.json())
 .then(data => {
    divUSD.innerHTML = `1 GBP (£) = ${data.conversion_rates.USD} USD`;
    divEUR.innerHTML = `1 GBP (£) = ${data.conversion_rates.EUR} EUR`;
    divJPY.innerHTML = `1 GBP (£) = ${data.conversion_rates.JPY} JPY`;
    divUpdate.innerHTML = `Rates last updated: ${data.time_last_update_utc}`;
    
 })


  .catch(error => {
    divUSD.innerHTML = "No exchange rate data available at this time.";
    divEUR.innerHTML = "No exchange rate data available at this time.";
    divJPY.innerHTML = "No exchange rate data available at this time.";
  });