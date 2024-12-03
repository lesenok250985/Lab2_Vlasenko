const express = require('express');
const router = express.Router();
const game = require('./gameModels');



// Добавление игрока
router.get('/nowy', (req, res) => {
    res.render('gameForm', { title: 'Добавить игрока' });
});

router.post('/nowy', (req, res) => {
    const { playerName } = req.body;
    game.addPlayer(playerName);
    res.redirect('/game');
});

// Игровое поле
router.get('/game', (req, res) => {
    res.render('gameBoard', { board: game.board, players: game.players });
});

module.exports = router;
