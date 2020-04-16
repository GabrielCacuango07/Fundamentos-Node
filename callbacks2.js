/* 
        callbacks 2 
        Nombre: Gabriel Cacuango 
*/
// simulaciom de base 
let empleados = [{
        id: 1,
        nombre: "Gabriel"
    },
    {
        id: 2,
        nombre: "Wilson"
    },
    {
        id: 3,
        nombre: "Ricardo"
    }
];

let salarios = [{
        id: 1,
        salario: 800
    },
    {
        id: 2,
        salario: 950
    }
];
// funcion flecha 
let getEmpleado = (id, callback) => {
    // find nos permite buscar en un objeto como un for 
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        callback(`No existe un empleado con id ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if (!salarioDB) {
        callback(`No se encontró salario para el empleado ${empleado.nombre}`)
    } else {
        callback(null, { nombre: empleado.nombre, salario: salarioDB.salario })
    }
}


getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, respuesta) => {
        // si existe un error lo captura y lo imprime
        if (err) {
            return console.log(err);
        }
        // si no envia una respuesta con el siguiente formato
        console.log(`El salario de ${respuesta.nombre} es de ${respuesta.salario}`);
    })

});