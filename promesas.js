/* 
        Promesas 
        Nombre: Gabriel Cacuango 
*/
// simulacion base de datos 
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

let getEmpleado = (id) => {
        // se crea una nueva promesa  siempre con  resolve y reject 
        return new Promise((resolve, reject) => {
            let empleadoDB = empleados.find(empleado => empleado.id === id);
            if (!empleadoDB) {
                // captura el error 
                reject(`No existe un empleado con id ${id}`);
            } else {
                // devuelce el resu;tado de estar correcto 
                resolve(empleadoDB);
            }
        });
    }
    // igual que el ejemplo anterior solo que al verificar compara con el empleado id que sean igual 
let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)

        if (!salarioDB) {
            // mensaje de error
            reject(`No se encontró salario para el empleado ${empleado.nombre}`);
        } else {
            // en caso que todo salga bien 
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
        }

    });
}

// ejemplo con varios errores 
// getEmpleado(3).then(empleado => {
//     getSalario(empleado).then(resp => {
//         console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
//     }, (err) => {
//         console.log(err);
//     });
// }, (err) => {
//     console.log(err);
// });

// Promesas en cadena

// evita acumular los errores  y atrapa a todos en un cacht

getEmpleado(10).then(empleado => {
    return getSalario(empleado);
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
}).catch(err => {
    console.log(err);
});