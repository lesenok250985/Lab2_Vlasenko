// 1. Typ `string` (tekst)
let name1: string = "TypeScript";
console.log(`Typ string: ${name1}`);

// 2. Typ `number` (liczba)
let age: number = 25;
console.log(`Typ number: ${age}`);

// 3. Typ `boolean` (wartość logiczna)
let isLearning: boolean = true;
console.log(`Typ boolean: ${isLearning}`);

// 4. Typ `array` (tablica liczb)
let scores: number[] = [85, 90, 78];
console.log(`Typ array: ${scores}`);

// 5. Typ `tuple` (krotka)
let person: [string, number] = ["Alice", 30];
console.log(`Typ tuple: ${person}`);

// 6. Typ `enum` (enumeracja)
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Green;
console.log(`Typ enum: ${favoriteColor}`);

// 7. Typ `any` (dowolny typ)
let randomValue: any = "Może być string, liczba lub cokolwiek innego";
console.log(`Typ any: ${randomValue}`);

// 8. Typ `void` (brak wartości, np. dla funkcji bez zwracanej wartości)
function logMessage(): void {
    console.log("Funkcja zwraca void");
}
logMessage();

// 9. Typ `null` i `undefined`
let emptyValue: null = null;
let notDefined: undefined = undefined;
console.log(`Typ null: ${emptyValue}, Typ undefined: ${notDefined}`);

// 10. Typ `object`
let personObject: { name: string; age: number } = {
    name: "John",
    age: 35
};
console.log(`Typ object: ${JSON.stringify(personObject)}`);
