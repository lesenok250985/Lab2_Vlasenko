const list = [1, 2, 3, 4, 5];

function printListWithNextTick(index = 0) {
    if (index < list.length) {
        console.log(`element listy: ${list[index]}`);
        process.nextTick(() => printListWithNextTick(index + 1));
    }
}

console.log("elementy za pomocom  nextTick:");
printListWithNextTick();
