// Асинхронная функция, которая имитирует запрос данных
async function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Измените на false, чтобы увидеть обработку ошибок
            if (success) {
                resolve("Dane zostały pobrane!");
            } else {
                reject("Błąd podczas pobierania danych!");
            }
        }, 2000); 
    });
}


async function main() {
    console.log("Rozpoczęcie pobierania danych...");
    try {
        const result = await fetchData();
        console.log(`Sukces: ${result}`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
    console.log("Koniec operacji.");
}


main();
