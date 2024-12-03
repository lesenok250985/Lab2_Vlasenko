const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Добро пожаловать на главную страницу!');
});

module.exports = router;
