const EventEmitter = require('events');

class User extends EventEmitter {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }

 
    setName(newName) {
        const oldName = this.name;
        this.name = newName;

  
        this.emit('nameChanged', oldName, newName);
    }

    displayInfo() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
    }
}


const user = new User('Анна', 27);


user.on('nameChanged', (oldName, newName) => {
    console.log(`Имя пользователя изменилось с ${oldName} на ${newName}`);
    user.displayInfo();
});


user.setName('Мария');
