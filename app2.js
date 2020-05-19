/* es igual a app1 pero optimizado ya que usa el yargs.js que cree */


const argv = require('./config/yargs').argv; //si no se coloca al final .argv para usuarilo tendria que hacer luego argv.argv 

const colors = require('colors'); //paquete colors de npm

const colors2 = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0] //aqui accedo a lo que hay en el arreglo que es crear o listar etc

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(datos => {
                console.log('========================'.green);
                console.log(`Tabla de ${argv.base}`.green);
                console.log('========================'.green);
                console.log(datos);
            })
            .catch(err => console.log(err));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log('Archivo creado:', colors2.green(archivo));

            })
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconcido');

}

// en git bash ejecutar $ node app2 crear --base 3  o $ node app2 crear -b 9 -l 11
// para usar el abreviado o sea -b o - l , debo haber colocado el command correspondiente