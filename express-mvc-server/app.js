const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Настройка шаблонизатора EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Подключение статических файлов
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Подключение контроллеров
const homeController = require('./homeController');
const aboutController = require('./aboutController');
const gameController = require('./gameController');
const contactController = require('./contactController');

// Настройка маршрутов
app.use('/', homeController);
app.use('/', aboutController);
app.use('/', contactController);
app.use('/', gameController);

// Обработка ошибок
app.use((req, res) => {
    res.status(404).render('error', { message: 'ERROR 404  ' });
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => console.log(`Сервер запущен на http://localhost:${PORT}`));
