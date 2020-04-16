/* 
            Flecha 
    Nombre:  Gabriel Cacuango
*/

/*
Funcioes normales :
 let sumar = (a, b) => {
    return a + b;
} */
// funcion flecha:
let sumar = (a, b) => a + b;
console.log(`la suma de 3 + 4 = ${sumar(3,4)}`);


/* function saludar() {
return
} */
let saludo = (nombre) => ("Hola " + nombre);
console.log(`Probando mensaje: ${saludo("rodrigo")}`);


let deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneracion',
    getNombre: function() {
            return `${this.nombre} ${this.apellido}  - poder: ${this.poder}`
        }
        // getname:() => `${deadpool.nombre} ${deadpool.apellido} - habilidad: ${deadpool.poder}`
}
console.log(deadpool.getNombre());

// variable nombre = (parametros) =>( lo que quiero)
let promedio = (n1, n2) => ((n1 + n2) / 2);
console.log(`El promedio es: ${promedio(50,100)}`);