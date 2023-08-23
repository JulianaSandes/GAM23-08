const {createServer} = require('http')

let server  = createServer((request, response)=>{
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write(`
        <h1>Hello Word em Node </h1>
        <p>Pagina de resposta do servidor HTTP </p>        
    `)
    response.end();
});

const port = 8000
server.listen(port, ()=>{
    console.log(`Servidor http configurado na ${port} na url http://localhost:${port}`)
});