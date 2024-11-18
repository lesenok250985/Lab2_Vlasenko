// Definicja klasy Car
var Car = /** @class */ (function () {
    // Konstruktor klasy
    function Car(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    // Funkcja wyświetlająca opis obiektu
    Car.prototype.displayDescription = function () {
        console.log("Samoch\u00F3d: ".concat(this.make, " ").concat(this.model, ", Rok: ").concat(this.year, ", Kolor: ").concat(this.color));
    };
    return Car;
}());
// Tworzenie instancji klasy (obiekty klasy Car)
var car1 = new Car("Toyota", "Corolla", 2020, "Czerwony");
var car2 = new Car("Ford", "Focus", 2018, "Niebieski");
var car3 = new Car("BMW", "X5", 2022, "Czarny");
// Wyświetlanie opisu obiektów
car1.displayDescription(); // Wynik: Samochód: Toyota Corolla, Rok: 2020, Kolor: Czerwony
car2.displayDescription(); // Wynik: Samochód: Ford Focus, Rok: 2018, Kolor: Niebieski
car3.displayDescription(); // Wynik: Samochód: BMW X5, Rok: 2022, Kolor: Czarny
