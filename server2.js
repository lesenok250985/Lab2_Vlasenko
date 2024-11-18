const http = require("http");
const url = require("url");
const querystring = require("querystring");

http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url);
  const pathname = parsedUrl.pathname;


  if (pathname === "/witaj") {
 
    const query = querystring.parse(parsedUrl.query);

    const imie = query.imie || "nieznane"; 
    const nazwisko = query.nazwisko || "nieznane";

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Witaj ${imie} ${nazwisko}`);
  } else {
 
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Strona nie znaleziona");
  }
}).listen(8080, () => {
  console.log("Serwer działa na porcie 8080");
});
