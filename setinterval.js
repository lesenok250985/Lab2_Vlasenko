setInterval(() => {
    let count = 0;
    const intervalId = setInterval(() => {
        console.log("a");
        count++;
        if (count === 5) {
            clearInterval(intervalId);
        }
    }, 10);
}, 1000);
