// 1. Typ `string` (tekst)
var name1 = "TypeScript";
console.log("Typ string: ".concat(name1));
// 2. Typ `number` (liczba)
var age = 25;
console.log("Typ number: ".concat(age));
// 3. Typ `boolean` (wartość logiczna)
var isLearning = true;
console.log("Typ boolean: ".concat(isLearning));
// 4. Typ `array` (tablica liczb)
var scores = [85, 90, 78];
console.log("Typ array: ".concat(scores));
// 5. Typ `tuple` (krotka)
var person = ["Alice", 30];
console.log("Typ tuple: ".concat(person));
// 6. Typ `enum` (enumeracja)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favoriteColor = Color.Green;
console.log("Typ enum: ".concat(favoriteColor));
// 7. Typ `any` (dowolny typ)
var randomValue = "Może być string, liczba lub cokolwiek innego";
console.log("Typ any: ".concat(randomValue));
// 8. Typ `void` (brak wartości, np. dla funkcji bez zwracanej wartości)
function logMessage() {
    console.log("Funkcja zwraca void");
}
logMessage();
// 9. Typ `null` i `undefined`
var emptyValue = null;
var notDefined = undefined;
console.log("Typ null: ".concat(emptyValue, ", Typ undefined: ").concat(notDefined));
// 10. Typ `object`
var personObject = {
    name: "John",
    age: 35
};
console.log("Typ object: ".concat(JSON.stringify(personObject)));
