"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import klas Car i Truck
var car_1 = require("./car");
var truck_1 = require("./truck");
// Tworzenie obiektów klasy Car
var car1 = new car_1.Car("Toyota", "Corolla", 2020, "Czerwony");
car1.displayDescription(); // Wynik: Samochód: Toyota Corolla, Rok: 2020, Kolor: Czerwony
// Tworzenie obiektów klasy Truck
var truck1 = new truck_1.Truck("Volvo", "FH16", 2021, "Biały", 25);
truck1.displayDescription(); // Wynik: Samochód: Volvo FH16, Rok: 2021, Kolor: Biały, Pojemność ładunkowa: 25 ton
