function suma(numero1, numero2) {
  return numero1 + numero2;
}

function calcular(numero1, numero2, callback) {
  return callback(numero1, numero2);
}

//console.log(calcular(2, 2, suma)); //4
//console.log(calcular(8, 2, suma)); //10

//Funcion del callback
function date(callback) {
  console.log(new Date); //Muestra la fecha actual

  //Coloca un tiempo para llamar a otra funcion
  setTimeout(function () {
    let date = new Date; //Crea la fecha actual
    callback(date); //Callback a date
  }, 3000);
}

//Imprime la fecha
function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);