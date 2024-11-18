function suma() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (sum, current) { return sum + current; }, 0);
}
console.log(suma(2));
console.log(suma(3, 4));
console.log(suma(1, 2, 3));
console.log(suma(10, 20, 30));
