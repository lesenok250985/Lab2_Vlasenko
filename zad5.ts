// Definicja klasy Car
class Car_new {
    // Właściwości klasy
    make: string;   // Marka samochodu
    model: string;  // Model samochodu
    year: number;   // Rok produkcji

    // Konstruktor klasy
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Metoda klasy
    displayInfo(): void {
        console.log(`Samochód: ${this.make} ${this.model}, Rok: ${this.year}`);
    }
}

// Tworzenie instancji klasy (obiekty klasy Car)
const car_new1 = new Car_new("Toyota", "Corolla", 2020);
const car_new2 = new Car_new("Ford", "Focus", 2018);
const car_new3 = new Car_new("BMW", "X5", 2022);

// Wyświetlanie informacji o samochodach
car_new1.displayInfo(); // Wynik: Samochód: Toyota Corolla, Rok: 2020
car_new2.displayInfo(); // Wynik: Samochód: Ford Focus, Rok: 2018
car_new3.displayInfo(); // Wynik: Samochód: BMW X5, Rok: 2022
