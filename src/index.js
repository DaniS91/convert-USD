import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchangeservice.js';

//Business Logic

function getExchange() {
  ExchangeService.getExchange()
    .then(function(response) {
      if (response.main) {
        printElements(response);
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