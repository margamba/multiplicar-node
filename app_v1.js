/* 
    FUNDAMENTOS
    Ej. grabar en un archivo de texto la tabla de multiplicar
    ir a nodejs.org, ir a docs, seleccionar version instalada de node
    y buscar el paquete FileSystem ,abrilo y seleccionar FileSystem
*/

// requiereds : hay tres tipos

const fs = require('fs'); //libreria propia de node
//const fs = require('express'); //no es nativo de node son expansiones hechas por otros usuarios y hay que instalarlo
// const fs = require('./fs'); //requires o archivos que nosotros creamos en el proyecto, aqui se especifica  el path de donde esta el archivo


for (let base = 1; base <= 10; base++) {
    let data = '';
    for (let i = 1; i <= 10; i++) {

        data += `${ base } * ${ i } = ${ base * i }\n`;
    }

    fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
        if (err) throw err;
        console.log(`El archivo nombreArhivo-tabla-${ base }.txt ha sido creado!`);
    });

}