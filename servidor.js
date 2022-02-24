const http = require('http');
const servidor = http.createServer((pedido,respuesta) => {
    respuesta.writeHead(200,{'Content-Type': 'text/html'})
    respuesta.write( `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Sitio en desarrrollo 3</h1>
    </body>
    </html>`);
    respuesta.end();
});

servidor.listen(8888);
console.log("servidor iniciado")