import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchangeservice.js';

//Business Logic

function getExchange() {
  let promise = ExchangeService.getExchange();
  promise.then(function(exchangeRate) {
    printElements(exchangeRate);
  }, function(error) {
    printError(error);
  });
}

//UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  getExchange();
}

function printElements(data) {
  const currency = document.querySelector('#currency').value;
  const amount = document.querySelector('#amount').value;
  const rate = data[0]["conversion_rates"][currency];
  if (isNaN(currencyCode)) {
    document.querySelector('#showResults').innerText = "We don't yet have data for your selected currency";
  } else if (amount < 0 || amount > 10000) {
    document.querySelector('#showResults').innerText = "Please enter a valid amount";
  } else {
    document.querySelector('#showResults').innerText = `$${amount} in ${currency} is ${rate * amount}`;
  }
}

function printError(error) {
  const errorType = Object.values(error[1]);
  document.querySelector('#showResults').innerText = `There was an error: ${errorType[3]}`;
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});

