/* 
    Templates 
    Nombre: Gabriel Cacuango
*/

// asisgnacion de variables para bloque 
let nombre = "deadpool";
let real = 'Wade Wilson';
console.log(`${nombre} ${real}`);
console.log(nombre + " " + real);

//Asignacion y concatenacion de 2 cadenas 
let nombreCompleto = nombre + " " + real;
// Asinacion de templates sirven para unir cadenas y concatenarlas con valores de variables 
let nombreTemplate = `${nombre} ${real}`;

//comparacion de caracteres 
console.log(nombreCompleto === nombreTemplate);

function getNombre() {
    return `${nombre} ${real}`;
}

console.log(`el nombre es : ${getNombre()}`);