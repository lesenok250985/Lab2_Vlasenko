// Definicja interfejsu "Osoba"
interface Osoba {
    imie: string;
    nazwisko: string;
    wiek: number;
    czyStudent?: boolean; // Pole opcjonalne
}

// Funkcja wyświetlająca dane osoby
function wyswietlDaneOsoby(osoba: Osoba): void {
    console.log("Dane osoby:");
    console.log(`Imię: ${osoba.imie}`);
    console.log(`Nazwisko: ${osoba.nazwisko}`);
    console.log(`Wiek: ${osoba.wiek}`);
    if (osoba.czyStudent !== undefined) {
        console.log(`Czy student: ${osoba.czyStudent ? "Tak" : "Nie"}`);
    }
}

// Przykład użycia funkcji
const osoba1: Osoba = {
    imie: "Jan",
    nazwisko: "Kowalski",
    wiek: 25,
    czyStudent: true,
};

const osoba2: Osoba = {
    imie: "Anna",
    nazwisko: "Nowak",
    wiek: 30,
};

// Wywołanie funkcji dla różnych osób
wyswietlDaneOsoby(osoba1);
wyswietlDaneOsoby(osoba2);
