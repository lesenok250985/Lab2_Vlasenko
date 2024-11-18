function suma(...args: number[]): number {
    return args.reduce((sum, current) => sum + current, 0);
}
console.log(suma(2));          
console.log(suma(3, 4));        
console.log(suma(1, 2, 3));    
console.log(suma(10, 20, 30)); 
