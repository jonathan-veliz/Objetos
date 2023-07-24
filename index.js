/*
Hacer una función que reciba un objeto e imprima por consola ’$Nombre, $Apellido’.

Ejemplo: 
INPUT: {
	nombre: ‘Leonel’,
	apellido: ‘Messi’,
	profesion: ‘futbolista’
}
OUTPUT: `Leonel, Messi`
*/
function nombreCompleto(persona){
	return `${jugador.nombre}, ${jugador.apellido}`;

}
const jugador = {
    nombre: "Leonel",
	apellido: "Messi",
	profesion: "futbolista"
};

console.log(nombreCompleto(jugador))
/*


Hacer una función que reciba un objeto como parámetro y escriba la propiedad ‘color’, como rojo.


Ejemplo: 
INPUT: {
	marca: ‘fiat’,
	modelo: ‘uno’,
}
OUTPUT: {
	marca: ‘fiat’,
	modelo: ‘uno’,
	color: ‘rojo’
}
*/
const auto ={
    marca:"fiat",
    modelo:"uno"
}
function vehiculo(movil){
	 movil.color ="Rojo" 
	 return auto
}

console.log(vehiculo(auto));

/*

// Definir la función presentarse()

const persona = { 
	nombre: "Juan", 
	edad: 30, 
presentarse: () => …
 };
 // Prueba del ejercicio 1 console.log(persona.presentarse()); // Salida esperada: "Hola, mi nombre es Juan y tengo 30 años."


 */

const persona = { 
	nombre: "Juan", 
	edad: 30, 
presentarse: () =>{return `Hola, mi nombre es  ${persona.nombre} y tengo ${persona.edad} años`;}
 };
 console.log(persona.presentarse());



 // Definir función ‘sumarPesos’ que recibe un array de objetos ‘autos’ y me devuelva la suma de todos los pesos.
// Definir función ‘sumarPesos’ que recibe un array de objetos ‘autos’ y me devuelva la suma de todos los pesos.

 let autos= [
	{ marca: "Fiat", modelo :"Uno", peso :1200},
	{marca: "Toyota", modelo: "Hilux", peso:2000},
	{marca: "ford", modelo: "Fiesta", peso:1300},
]
 function sumarPesos(auto){
	let totalPeso=0;
	autos.forEach((auto)=>{
		totalPeso=totalPeso+auto.peso
		
	})
	return totalPeso;
	
}
	//OUTPUT: sumarPesos(autos) // 4500
console.log(sumarPesos(autos))

