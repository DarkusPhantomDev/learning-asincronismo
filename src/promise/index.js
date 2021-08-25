const somethingWillHappend = () => {
	return  new Promise((resolve, reject) => { //La promesa va a resolver una accion. Rejecta en caso de un error
		if (true) {
			resolve('Dorime :D');
		} else {
			reject('ameno :(');
		}
	})
}

somethingWillHappend()
 .then(response => console.log(response)) //Muestra el response si es verdad
 .catch(err => console.error(err)); //muestra el eject en caso de alguna fallo o falso



const somethingWillHappend2 = () => {
	return new Promise((resolve, reject) => {//Hay que tener cuidado con el valor de Promise(). Si lo escribes asi: promise(), no se va a ejecutar
		if (true) {
			setTimeout(() => {
				resolve('True');
			}, 2000);
		} else {
			const error = new Error('');
		}
	})
}

somethingWillHappend2()
 .then(response => console.log(response))
 .catch(err => console.error(err));



 // Para correr todas las promesas tenemos el método Promise.all() que nos retornara un array con la respuesta de todas las promesas que pasemos como parametro.
Promise.all([somethingWillHappend(), somethingWillHappend2()])
 .then(response => {
 	console.log("Arrays of results:", response);
 })
 .catch(err => {
 	console.error(err);
 })

//La razon por la cual somethingWillHappend es declarada como funcion, y retorna la promesa,
//lugar de declarar la promesa en la variable, es para que no se ejecute hasta que se llame la funcion
//Si declaras la promesa directamente en la variable, se ejecutará inmediatamente a penas cargue la variable
/*
Métodos de las promesas

Promise.all(iterable)
Devuelve una de dos promesas:

una que se cumple cuando todas las promesas en el argumento iterable han sido cumplidas,

o una que se rechaza tan pronto como una de las promesas del argumento iterable es rechazada.

Si la promesa retornada es cumplida, lo hace con un arreglo de los valores de las promesas cumplidas en el mismo orden definido en el iterable.

Si la promesa retornada es rechazada, es rechazada con la razón de la primera promesa rechazada en el iterable. Este método puede ser útil para agregar resultados de múltiples promesas

Promise.race(iterable)
Devuelve una promesa que se cumple o rechaza tan pronto como una de las promesas del iterable se cumple o rechaza, con el valor o razón de esa promesa.

Promise.reject(reason)
Devuelve un objeto Promise que es rechazado con la razón dada.

Fuente: [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise)



OJO:

Si en el Promise.all pasamos varias promesas por ejemplo pasamos dos promesas con resultado resolve() se va imprimir el mensaje de las dos.

Si pasamos las dos promesas con resultado reject() solo va imprimir en el navegador un solo reject.

Si colocamos un resolve() y un reject() va predominar el reject() osea solo va imprimir el reject.

Un Promise.all que falla devuelve el error de la promesa que fallo

Existen otros metodos como Promise.race que devuelve el resolve() de la primera promesa en completarse

Las promesas tienen tres estados:
-Pending: Una promesa inicia en esté estado:
-Fulfilled: Cuando se resuelve exitosamente. .then(va => …)
-Rejected: Si sucede algún error. .catch(err => …)

*/