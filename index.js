const jsonData = "[{\"name\": \"Aleksy\", \"age\": 25, \"city\": \"Warszawa\"}, {\"name\": \"Maria\", \"age\": 30, \"city\": \"Kraków\"}, {\"name\": \"Jan\", \"age\": 22, \"city\": \"Gdańsk\"}]";

const people = JSON.parse(jsonData);


console.log("Lista osób:");
people.forEach(person => {
    console.log(`Imię: ${person.name}, Wiek: ${person.age}, Miasto: ${person.city}`);
});


const newPerson = {"name": "Anna", "age": 27, "city": "Wrocław"};
people.push(newPerson);


const updatedJsonData = JSON.stringify(people, null, 2);
console.log("\nZaktualizowana lista osób w formacie JSON:");
console.log(updatedJsonData);
