// Import klasy Car
import { Car } from "./car";

// Eksport klasy Truck jako modułu
export class Truck extends Car {
    loadCapacity: number;

    constructor(make: string, model: string, year: number, color: string, loadCapacity: number) {
        super(make, model, year, color);
        this.loadCapacity = loadCapacity;
    }

    displayDescription(): void {
        super.displayDescription();
        console.log(`Pojemność ładunkowa: ${this.loadCapacity} ton`);
    }
}
