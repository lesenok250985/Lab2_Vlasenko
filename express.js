const express = require("express");
const app = express();

app.get("/simple-route", (req, res) => {
  res.send("Это простой маршрут, использующий метод app.get()");
});


app
  .route("/route-method")
  .get((req, res) => {
    res.send("GET-запрос для /route-method");
  })
  .post((req, res) => {
    res.send("POST-запрос для /route-method");
  });

const router = express.Router();

router.get("/router-route", (req, res) => {
  res.send("GET-запрос для /router-route");
});

router.post("/router-route", (req, res) => {
  res.send("POST-запрос для /router-route");
});

app.use(router);


app.all("/all-methods", (req, res) => {
  res.send(`Вы вызвали маршрут /all-methods с методом: ${req.method}`);
});


const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
