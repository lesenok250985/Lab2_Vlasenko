var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Definicja klasy Car
var Car_new1 = /** @class */ (function () {
    // Konstruktor klasy
    function Car_new1(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    // Funkcja wyświetlająca opis obiektu
    Car_new1.prototype.displayDescription = function () {
        console.log("Samoch\u00F3d: ".concat(this.make, " ").concat(this.model, ", Rok: ").concat(this.year, ", Kolor: ").concat(this.color));
    };
    return Car_new1;
}());
// Definicja klasy Truck (dziedzicząca z klasy Car)
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    // Konstruktor klasy Truck
    function Truck(make, model, year, color, loadCapacity) {
        // Wywołanie konstruktora klasy bazowej za pomocą super
        var _this = _super.call(this, make, model, year, color) || this;
        _this.loadCapacity = loadCapacity;
        return _this;
    }
    // Funkcja wyświetlająca opis ciężarówki
    Truck.prototype.displayDescription = function () {
        _super.prototype.displayDescription.call(this); // Wywołanie metody klasy bazowej
        console.log("Pojemno\u015B\u0107 \u0142adunkowa: ".concat(this.loadCapacity, " ton"));
    };
    return Truck;
}(Car_new1));
// Tworzenie instancji klasy Truck
var truck1 = new Truck("Volvo", "FH16", 2021, "Biały", 25);
var truck2 = new Truck("Scania", "R450", 2019, "Czerwony", 20);
// Wyświetlanie opisu ciężarówek
truck1.displayDescription(); // Wynik: informacje o ciężarówce Volvo
truck2.displayDescription(); // Wynik: informacje o ciężarówce Scania
