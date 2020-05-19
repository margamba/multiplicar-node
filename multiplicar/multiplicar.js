const fs = require('fs'); //libreria propia de node

//let listarTabla = (base, limite = 5) en ES6 podriamos poner un valor por defecto por ej 5 si no lo hubiesemos definido en yargs
let listarTabla = (base, limite = 5) => { //pero toma el del yargs

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base  }  no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${ limite  }  no es un número`);
            return;
        }

        let data = ''; //contenido que quiero grabar


        for (let i = 1; i <= limite; i++) {

            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        resolve(data);



    });

}

//module.exports crearArchivo = (base) =>  tambien se podria dejar asi 
let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base  }  no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${ limite  }  no es un número`);
            return;
        }

        let data = ''; //contenido que quiero grabar


        for (let i = 1; i <= limite; i++) {

            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-del-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-del-${ base }-al-${ limite }.txt`);
            };

        });

    });

}

//el modulo es un objeto global que esta disponible a lo largo de toda la aplicacion
//agrego los elementos que quiero usar de forma global
//Esta forma es mas práctica en caso de que tengamos varias funciones
module.exports = {
    crearArchivo: crearArchivo, // ES6 Se puede dejar solo crearArchivo
    listarTabla
}