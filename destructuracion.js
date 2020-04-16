/* 
    Destructuracion 
    Nombre: Gabriel Cacuango
*/
// dentro de esta variable y ingresamos una funcion con los atributos de la variable
let deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido}  - poder: ${this.poder}`
    }
}

// opcion 1 
console.log(deadpool.getNombre());
let nom = deadpool.nombre;
let ape = deadpool.apellido;
let pod = deadpool.poder;

console.log("Impresion se la destructuracion ");
console.log("-------------------------------- ");

// opcion 2 : destructuracion 
// primero el nombre del identificados y si quiero cambiar un nombre y identificar al elemento
let { nombre: primerNombre, apellido: secondname, poder } = deadpool;
console.log(primerNombre, secondname, poder);