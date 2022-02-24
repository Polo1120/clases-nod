const fs = require('fs');
fs.writeFile('./archivo1.txt', 'linea1\n liena2' ,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("el archivo ha sido creado");
    }
});

console.log("ultima");

