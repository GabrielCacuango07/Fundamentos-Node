/*
        Asyn- await2 
        Nombre : Gabriel Cacuango
 */

// Simulacion base de datos 
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

// usamos async-await y lo trata como una promesa
let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        // lanzar un error en el caso de que no encuentre el id 
        throw new Error(`No existe un empleado con id ${id}`);
    } else {
        //  retora una promesa
        return empleadoDB;
    }
}

let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if (!salarioDB) {
        throw new Error(`No se encontró salario para el empleado ${empleado.nombre}`);
    } else {
        return ({ nombre: empleado.nombre, salario: salarioDB.salario });


    };
}

let getInformacion = async(id) => {
    // espera que la promesa sea completada con el await 
    let empleado = await getEmpleado(id);
    // espera que la promesa sea completada con el await 
    let resp = await getSalario(empleado);
    return `El salario de ${resp.nombre} es de ${resp.salario}`;
}

// al llamar a la funcio es tratada como una promesa por lo que usamos el then 
getInformacion(4)
    .then(mensaje => console.log(mensaje))
    //y usamos el catch para atrapar el error
    .catch(err => console.log(err));

/* 
Dato: al momento de producirce un error se maeja el error y se imprime el error completo pero el error esta capturado */