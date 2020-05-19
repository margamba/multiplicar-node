/* optimizacion  */


const opts = {
    base: {
        demand: true,
        alias: 'b'

    },
    limite: {
        alias: 'l',
        default: 10
    }

}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo de la tabla de multiplicar', opts)
    .help()
    .argv;

//para podr usar argv fuera de esta archivo tengo que exportarlo
module.exports = {
    argv
}