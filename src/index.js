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
  const currencyCode = document.querySelector('#currency').value;
  const amount = document.querySelector('#amount').value;
  const exchangeArray = Object.values(data);
  const currencyArray = Object.keys(data);
  const currency = currencyArray[currencyCode];
  const rate = exchangeArray[currencyCode];
  const newAmount = rate * amount;
  document.querySelector('#showResults').innerText = `$${amount} in ${currency} is ${newAmount}`;
}

function printError(error) {
  const errorType = Object.values(error[1]);
  console.log(errorType[3]);
  document.querySelector('#showResults').innerText = `There was an error: ${errorType[3]}`;
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});

