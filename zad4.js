// Funkcja wyświetlająca dane osoby
function wyswietlDaneOsoby(osoba) {
    console.log("Dane osoby:");
    console.log("Imi\u0119: ".concat(osoba.imie));
    console.log("Nazwisko: ".concat(osoba.nazwisko));
    console.log("Wiek: ".concat(osoba.wiek));
    if (osoba.czyStudent !== undefined) {
        console.log("Czy student: ".concat(osoba.czyStudent ? "Tak" : "Nie"));
    }
}
// Przykład użycia funkcji
var osoba1 = {
    imie: "Jan",
    nazwisko: "Kowalski",
    wiek: 25,
    czyStudent: true,
};
var osoba2 = {
    imie: "Anna",
    nazwisko: "Nowak",
    wiek: 30,
};
// Wywołanie funkcji dla różnych osób
wyswietlDaneOsoby(osoba1);
wyswietlDaneOsoby(osoba2);
