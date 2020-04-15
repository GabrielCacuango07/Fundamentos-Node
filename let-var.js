/*      Let vs var 
Nombre: Gabriel Cacuango
*/

// Let almacena variables limitando su alcance a un bloque 
let nombre = "Gabriel ";
if (true) {
    let nombre = "Cacuango";
}
console.log(`Hola ${nombre}`);

// Var permite declarar variables de forma global
for (var i = 0; i <= 5; i++) {
    console.log(`i es igual a : ${i}`);
}

console.log(`el valor final de i ${i}`);