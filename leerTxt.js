const fs = require('fs');
fs.readFile('./archivo1.txt', (err, datos) =>{
    if (err) {
        console.log(err);
    }

    else{
        console.log(datos.toString());
    }
});

console.log("ultima linea de codigo");