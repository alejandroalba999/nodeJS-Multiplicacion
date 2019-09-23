const fs = require('fs');
let listarTabla = (base, limite = 10) => {
    for(let i = 1; i <= limite; i++){
        let tabla = `${i}.- ${a} x ${i} = ${a * i}`;
        table = `${table} \n ${tabla}`;
    }
    console.log(table);
}


let multiplicar = (a) => {
    let table = '';
    
    for(let i = 1; i <= 10; i++){
        let tabla = `${i}.- ${a} x ${i} = ${a * i}`;
        table = `${table} \n ${tabla}`;
        fs.writeFile(`Tabla_del_${a}.txt`, `${table}`, (error) => {
            if(error) throw error;
            console.log('el archivo ejemplo.txt ha sido creado con exito');
        });}
}
console.log(multiplicar(9));



 

