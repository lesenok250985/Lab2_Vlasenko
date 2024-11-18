function createCounterVar() {
    var count = 0; // Переменная счетчика
    return function () {
        count++; // Увеличиваем значение на 1
        console.log("Current count (var): ".concat(count)); // Выводим текущее значение
        return count;
    };
}
// Создаем счетчик
var counterVar = createCounterVar();
// Вызываем и смотрим результат в консоли
counterVar(); // Вывод: Current count (var): 1
counterVar(); // Вывод: Current count (var): 2
counterVar(); // Вывод: Current count (var): 3
