let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //utilizado para llamar instancias desde javacript
const URL_API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url_api, true); //(peticion, url de donde vamos a recibir la data, activar/desactivar asincronismo). Es buena practica colocar el tercer valor, incluso si es true por defecto
  xhttp.onreadystatechange = function(event) { //Es buena practica establecer el evento (event), aunque no se vaya a utilizar
    if (xhttp.readyState === 4) { //indica si el estado esta correcto
      if (xhttp.status === 200) { //Verifica el estatus en el que se encuentra
        callback(null, JSON.parse(xhttp.responseText)) //Es necesario aplicar el parse al JSON para que reciba un string y no un string de texto (objeto)
      } else {
        const error = new Error('Error' + url_api) ;
        return callback(error);
      }
    }
  }
  xhttp.send();
}

fetchData(URL_API, function (error1, data1) {
  if (error1) return console.error(error1);
  fetchData(URL_API + data1.results[0].id, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});

// Se pudo haber usado fetch en vez de XMLHttpRequest. Sin embargo, no se dio el uso porque fetch,
// ademas de ser una implementacion de ecmascript 6+, tiene implementada promesas. Como estamos
// trabajando con callbacks, lo ideal es aprender a saber cómo funciona anteriormente para entender
// luego cada una de las fases del asincronismo en javascript

// XMLHttpRequest fue creado por Microsoft y adaptado como un estandar para las empresas y cómo
// trabaja dentro de Javascript

// Tengo una duda. Oscar menciona que es buena practica establecer el evento, incluso si no se llega a usar
// en otros lados menciona "no establezcas el evento, salvo que lo vayas a utilizar"
// Mi pregunta es: ¿Es buena practica establecer el evento? 🤔
//
// Respuesta: Si es bueno

// Crear callback hell es mala practica.