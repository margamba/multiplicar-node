const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true, //para definir que es requerido
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv; //este es el de yargs



//no se acostumbra poner la extension del archivo porque es redundante
// const multiplicar = require('./multiplicar/multiplicar');  esto se puede hacer por destructuracion
//para no tener que hacer multiplicaar.crearArchivo
//Destructuracion  que es cuando va let o const y vienen llaves y entre las llaves va la funcion del modulo que requiero
const { crearArchivo } = require('./multiplicar/multiplicar');

//let base = 'ab';

//console.log(process.argv); cuando node se ejecuta crea esa variable de entorno process
// en el process hay algo argv o argumentos

//let argv2 = process.argv; //este es el de los procesos
console.log('base', argv.base);
console.log('limite', argv.limite);
//console.log(argv2);
// let parametro = argv[2]; //hay 2 por defecto
// let base = parametro.split('=')[1];

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo}`))
//     .catch(err => console.log(err));