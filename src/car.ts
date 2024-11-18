// Eksport klasy Car jako modułu
export class Car {
    make: string;
    model: string;
    year: number;
    color: string;

    constructor(make: string, model: string, year: number, color: string) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    displayDescription(): void {
        console.log(`Samochód: ${this.make} ${this.model}, Rok: ${this.year}, Kolor: ${this.color}`);
    }
}
