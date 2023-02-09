const divUSD = document.getElementById("exchange-rate-usd");
const divEUR = document.getElementById("exchange-rate-eur");
const divJPY = document.getElementById("exchange-rate-jpy");
const divUpdate = document.getElementById("exchange-rate-update");

// fetch(`https://api.currencyfreaks.com/latest?apikey=3fb12eb653094ca69e6b7dd7c06b890a&symbols=USD,EUR,JPY&base=GBP`)
//   .then(response => response.json())
//   .then(data => console.log(data)
//  );

//query selector to append news 
const newsList = document.querySelector('.latestNews');
function currencyNews() {
  apiKey= `SexiEzek5JZbf96880n4vi1XNBe6EgfX9Uz2tz0i`;

  fetch(`https://api.marketaux.com/v1/news/all?symbols=TSLA%2CAMZN%2CMSFT&filter_entities=true&language=en&api_token=${apiKey}`)
.then((response) => {
  return response.json()
}).then((data) =>{
  console.log(data)
  //for each news display url and title 
  data.data.forEach(data =>{
    let li= document.createElement('li');
    let a = document.createElement('a');
    let li2 = document.createElement('li');
    li2.textContent = data.description;
   
    a.setAttribute('href', data.url);
    a.setAttribute('target', '_blank');
    a.textContent = data.title;
    li.appendChild(a);
   

    let news = `<div id="cardNews1" class="card latestNews1" style="width: 18rem;">
    <img src="${data.image_url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h6 class="card-title">${data.title}</h6>
      
      <p class="card-text"><li>${data.description}</li></p>
      <a href="${data.url}" class="btn btn-primary">Learn more</a>
    </div>
  </div>`
   newsList.innerHTML+=news;
   newsList.setAttribute("style","float: right");
  })
  });
}
  currencyNews()

// Contact us section


var signUpButton = document.querySelector("#submitButton");

var msgDiv = document.querySelector("#msg");

function renderRegister () {
  function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }
signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
var email = document.querySelector("#email");
console.log(email);
var firstName = document.querySelector("#fname");
var lastName = document.querySelector("#lname");
var subject = document.querySelector("#subject");
  if (email.value === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (firstName.value === "") {
    displayMessage("error", "First Name cannot be blank");
  } else if (lastName.value === "") {
    displayMessage("error", "Last Name cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");
  }
 email.value = "";
 firstName.value = "";
 lastName.value = "";
 subject.value = "";
 
})
}
renderRegister();




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