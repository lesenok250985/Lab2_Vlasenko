// server.js
const http = require('http');

// Асинхронная функция для получения значения счетчика
let counter = 0;
async function getCounter() {
    return counter++;
}


const server = http.createServer(async (req, res) => {

    if (req.url === '/counter') {
        const currentCount = await getCounter();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ count: currentCount }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});


server.listen(8080, () => {
    console.log('Сервер запущен на порту 8080');
});
