class Game {
    constructor() {
        this.players = [];
        this.board = this.generateBoard();
        this.status = 'playing';
    }

    addPlayer(name) {
        this.players.push({ name, score: 0, alive: true });
    }

    generateBoard() {
        const board = Array.from({ length: 10 }, () =>
            Array(10).fill({ type: 'empty', value: 0 })
        );

        for (let i = 0; i < 40; i++) {
            let x, y;
            do {
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
            } while (board[x][y].type !== 'empty');
            board[x][y] = { type: 'treasure', value: Math.floor(Math.random() * 10) + 1 };
        }

        for (let i = 0; i < 10; i++) {
            let x, y;
            do {
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
            } while (board[x][y].type !== 'empty');
            board[x][y] = { type: 'monster', value: 0 };
        }

        return board;
    }
}

module.exports = new Game();
