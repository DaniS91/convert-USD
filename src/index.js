import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchangeservice.js'

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