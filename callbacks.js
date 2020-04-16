/* 
        Callbacks 
        Nombre: Gabriel Cacuango 
*/
// haga algo despues de cierto tiempo  imrima hola Gabriel despues de 3 s
// setTimeout(() => {
//     console.log("Hola Gabriel ");
// }, 3000);

let getUsuarioById = (id, nickname, callback) => {
        let n = nickname + " Cacuango"
        let usuario = {
            nombre: n,
            id
        }

        if (id === 20) {
            callback(`El usuario con id ${id} no existe!`);
        } else {
            // se debe mandar un null siemre  enviando primero el error 
            callback(null, usuario, 25, 'extra');
        }


    }
    // cuando se utiliza callbacks  de debe enviar err por estandar 
getUsuarioById(29, 'Gabriel', (err, usuario, edad, dato) => {
    // si me da un error lo muestro en antalla 
    if (err) {
        return console.log(err);
    }
    // si no existe error devuelve  mensaje con un objeto  que es usuario concatenado con la 
    console.log("Usuario de la BD:", usuario, `edad: ${edad} parametro extra${dato}`);
});