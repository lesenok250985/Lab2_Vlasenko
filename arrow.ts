const fetchData1 = async (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Данные загружены!"), 2000);
    });
};


fetchData().then((data) => console.log(data)); 
