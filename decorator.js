function logExecution(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("\u041C\u0435\u0442\u043E\u0434: ".concat(propertyKey));
        console.log("\u0410\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u044B: ".concat(JSON.stringify(args)));
        var result = originalMethod.apply(this, args);
        console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(result));
        return result;
    };
    return descriptor;
}
var Kalkulator = /** @class */ (function () {
    function Kalkulator() {
    }
    Kalkulator.prototype.dodaj = function (a, b) {
        return a + b;
    };
    Kalkulator.prototype.mnoz = function (a, b) {
        return a * b;
    };
    return Kalkulator;
}());
// Использование класса
var kalkulator = new Kalkulator();
console.log(kalkulator.dodaj(5, 3)); // Должен выводить логирование и результат
console.log(kalkulator.mnoz(4, 6)); // Должен выводить логирование и результат
