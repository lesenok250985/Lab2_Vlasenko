// Definicja klasy Car
var Car = /** @class */ (function () {
    // Konstruktor klasy
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Metoda klasy
    Car.prototype.displayInfo = function () {
        console.log("Samoch\u00F3d: ".concat(this.make, " ").concat(this.model, ", Rok: ").concat(this.year));
    };
    return Car;
}());
// Tworzenie instancji klasy (obiekty klasy Car)
var car1 = new Car("Toyota", "Corolla", 2020);
var car2 = new Car("Ford", "Focus", 2018);
var car3 = new Car("BMW", "X5", 2022);
// Wyświetlanie informacji o samochodach
car1.displayInfo(); // Wynik: Samochód: Toyota Corolla, Rok: 2020
car2.displayInfo(); // Wynik: Samochód: Ford Focus, Rok: 2018
car3.displayInfo(); // Wynik: Samochód: BMW X5, Rok: 2022
