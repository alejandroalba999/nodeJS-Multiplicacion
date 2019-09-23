const {crearArchivo,listarTabla} = require('./multiplicacion/multiplicacion');
const argumentos = require('yargs')
.command('listar','Imprime en consola la tabla de multiplicar',{  
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
})
.command('crear','Crear tabla de multiplicar',{  
    base: {
        demand: true,
        alias: 'b'
    }
})

.help()
.argv;
let base = 3;
let comando = argumentos._[0];

switch(comando){
    case 'listar':
        listarTabla(argumentos.base,argumentos.limite);
    
    case 'crear':
        crearArchivo(argumentos.base);
        break;

    default:
        console.log(`comando no reconocido: ${comando}`);   
}
 argumento = require('yargs')


// crearArchivo(base)
// .then(respuesta => console.log(`Archivo creado : ${respuesta}`))
// .catch(error => console.log(error));