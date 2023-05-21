const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')


console.clear()
console.log(argv)

// console.log('base: yargs', argv.base)

// const [, , arg3] = process.argv
// const [, base = 5 ] = arg3.split('=')
// console.log(base)

// const base = 5

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.error(err)
    )
