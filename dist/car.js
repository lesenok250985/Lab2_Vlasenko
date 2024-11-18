"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
// Eksport klasy Car jako modułu
var Car = /** @class */ (function () {
    function Car(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    Car.prototype.displayDescription = function () {
        console.log("Samoch\u00F3d: ".concat(this.make, " ").concat(this.model, ", Rok: ").concat(this.year, ", Kolor: ").concat(this.color));
    };
    return Car;
}());
exports.Car = Car;
