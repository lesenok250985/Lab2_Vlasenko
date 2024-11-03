const http = require('http');


const PORT = 8080;


const server = http.createServer((request, response) => {
    
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

    response.end('Ваш первый HTTP сервер, написанный на Node.js');
});


server.listen(PORT, () => {
    console.log(`Сервер запущен и доступен по адресу: http://localhost:${PORT}`);
});


