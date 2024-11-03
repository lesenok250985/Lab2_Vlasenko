const http = require('http');


const server = http.createServer((req, res) => {
    console.log('Получен запрос на сервер');

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Событие запроса сгенерировано и обработано');
});

server.listen(8080, () => {
    console.log('Сервер запущен на порту 8080. Перейдите по адресу http://localhost:8080');
});
