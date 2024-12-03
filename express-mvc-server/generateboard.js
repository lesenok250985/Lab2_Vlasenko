class Game {
    constructor() {
        this.players = [];
        this.board = this.generateBoard();
    }

    addPlayer(name) {
        this.players.push({ name, score: 0, alive: true });
    }

    generateBoard() {
        const board = Array.from({ length: 10 }, () =>
            Array(10).fill({ type: 'empty', value: 0 })
        );

        // Добавляем 40 сокровищ
        for (let i = 0; i < 40; i++) {
            let x, y;
            do {
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
            } while (board[x][y].type !== 'empty');
            board[x][y] = { type: 'treasure', value: Math.floor(Math
                .random() * 10) + 1 }; // Сокровища имеют значение от 1 до 10
        }

        // Добавляем 10 монстров
        for (let i = 0; i < 10; i++) {
            let x, y;
            do {
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
            } while (board[x][y].type !== 'empty');
            board[x][y] = { type: 'monster', value: 0 }; // Монстры не имеют ценности
        }

        return board;
    }

    // Метод для отображения текущего состояния доски
    displayBoard() {
        console.table(
            this.board.map(row => row.map(cell => cell.type === 'empty' ? '?' : cell.type[0].toUpperCase()))
        );
    }
}

// Экспортируем класс для использования в других частях приложения
module.exports = Game;
