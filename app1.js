const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'

        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea un archivo de la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'

        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0] //aqui accedo a lo que hay en el arreglo que es crear o listar etc

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(datos => console.log(datos))
            .catch(err => console.log(err));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconcido');

}

// en git bash ejecutar $ node app1 crear --base 3  o $ node app1 crear -b 9 -l 11
// para usar el abreviado o sea -b o - l , debo haber colocado el command correspondiente