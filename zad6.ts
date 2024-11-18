// Definicja klasy Car
class Car
 {
    // Właściwości klasy
    make: string;   // Marka samochodu
    model: string;  // Model samochodu
    year: number;   // Rok produkcji
    color: string;  // Kolor samochodu

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

// Tworzenie instancji klasy (obiekty klasy Car)
const car1 = new Car("Toyota", "Corolla", 2020, "Czerwony");
const car2 = new Car("Ford", "Focus", 2018, "Niebieski");
const car3 = new Car("BMW", "X5", 2022, "Czarny");

// Wyświetlanie opisu obiektów
car1.displayDescription(); // Wynik: Samochód: Toyota Corolla, Rok: 2020, Kolor: Czerwony
car2.displayDescription(); // Wynik: Samochód: Ford Focus, Rok: 2018, Kolor: Niebieski
car3.displayDescription(); // Wynik: Samochód: BMW X5, Rok: 2022, Kolor: Czarny
