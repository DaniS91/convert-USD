import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchangeservice.js';

//Business Logic

function getExchange(currency, amount) {
  ExchangeService.getExchange()
    .then(function(response) {
      if (response.main) {
        printElements(response, currency, amount);
      } else {
        printError(response);
      }
    });
}

//UI Logic

function printElements(response, currency, amount) {
  let newAmount = response.conversion_rate.EUR * amount
  document.querySelector('#showResponse').innerText = `$${amount} USD is ${newAmount} ${currency}.`;
}

function printError(error) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the currency exchange rate: 
  ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#currency').value;
  const amount = document.querySelector('#amount').value;
  // document.querySelector('#location').value = null;
  getExchange(currency, amount);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});