// Definicja klasy Car
class Car_new1 {
    // Właściwości klasy
    make: string;
    model: string;
    year: number;
    color: string;

    // Konstruktor klasy
    constructor(make: string, model: string, year: number, color: string) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    // Funkcja wyświetlająca opis obiektu
    displayDescription(): void {
        console.log(`Samochód: ${this.make} ${this.model}, Rok: ${this.year}, Kolor: ${this.color}`);
    }
}

// Definicja klasy Truck (dziedzicząca z klasy Car)
class Truck extends Car_new1 {
    // Dodatkowe właściwości klasy Truck
    loadCapacity: number; // Pojemność ładunkowa w tonach

    // Konstruktor klasy Truck
    constructor(make: string, model: string, year: number, color: string, loadCapacity: number) {
        // Wywołanie konstruktora klasy bazowej za pomocą super
        super(make, model, year, color);
        this.loadCapacity = loadCapacity;
    }

    // Funkcja wyświetlająca opis ciężarówki
    displayDescription(): void {
        super.displayDescription(); // Wywołanie metody klasy bazowej
        console.log(`Pojemność ładunkowa: ${this.loadCapacity} ton`);
    }
}

// Tworzenie instancji klasy Truck
const truck1 = new Truck("Volvo", "FH16", 2021, "Biały", 25);
const truck2 = new Truck("Scania", "R450", 2019, "Czerwony", 20);

// Wyświetlanie opisu ciężarówek
truck1.displayDescription(); // Wynik: informacje o ciężarówce Volvo
truck2.displayDescription(); // Wynik: informacje o ciężarówce Scania
