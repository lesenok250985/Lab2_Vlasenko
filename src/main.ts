// Import klas Car i Truck
import { Car } from "./car";
import { Truck } from "./truck";

// Tworzenie obiektów klasy Car
const car1 = new Car("Toyota", "Corolla", 2020, "Czerwony");
car1.displayDescription(); // Wynik: Samochód: Toyota Corolla, Rok: 2020, Kolor: Czerwony

// Tworzenie obiektów klasy Truck
const truck1 = new Truck("Volvo", "FH16", 2021, "Biały", 25);
truck1.displayDescription(); // Wynik: Samochód: Volvo FH16, Rok: 2021, Kolor: Biały, Pojemność ładunkowa: 25 ton
