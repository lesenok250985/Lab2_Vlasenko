const https = require("https");


const url = "https://jsonplaceholder.typicode.com/todos/1";


https.get(url, (res) => {
  let data = "";

  
  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log("Ответ от сервера:");
    console.log(data); 
  });
}).on("error", (err) => {
  console.error("Ошибка запроса:", err.message);
});
