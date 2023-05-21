const fs = require('fs')
const colors = require('colors')

const crearArchivo = async( base = 5, listar, hasta = 10 ) => {

    try {
        
        let salida = ''
        let consola = ''
    
        for(let i = 1; i <= hasta; i++) {
            consola += `${base} ${'x'.green} ${i} ${'='.blue} ${ base * i}\n`;
            salida += `${base} x ${i} = ${ base * i}\n`;
        }
        
        if(listar) {
            console.log('--------------------------------')
            console.log(`    Tabla del ${base}   `.green)
            console.log('--------------------------------')
            console.log(consola)
        }
    
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida)
        return (`tabla-${base}.txt creada`.rainbow)
    } catch (error) {
        throw error
    }



}

module.exports = {
    crearArchivo
}
