function logExecution(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> | void {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Метод: ${propertyKey}`);
        console.log(`Аргументы: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`Результат: ${result}`);
        return result;
    };

    return descriptor;
}

class Kalkulator {
   
    dodaj(a: number, b: number): number {
        return a + b;
    }

    
    mnoz(a: number, b: number): number {
        return a * b;
    }
}

// Использование класса
const kalkulator = new Kalkulator();
console.log(kalkulator.dodaj(5, 3)); // Должен выводить логирование и результат
console.log(kalkulator.mnoz(4, 6)); // Должен выводить логирование и результат
