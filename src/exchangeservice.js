// export default class ExchangeService {  
//   static getExchange() {
//     return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
//       .then(function(response) {
//         if (!response.ok) {
//           const errortype = 'error-type'
//           const errorMessage = `${response.result}:  ${response[errortype]}`;
//           throw new Error(errorMessage);
//         } else {
//           return response.json();
//         }
//       })      
//       .catch(function(error) {
//         return error;
//       });
//   }
// }

export default class ExchangeService {  
  static getExchange() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response]);
        } else {
          reject([this, response]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}