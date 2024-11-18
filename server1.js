const http = require("http");
const url = require("url");

http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;

 
  if (pathname === "/nowy") {
    pathname = "/serwer1";
  }


  console.log(`Aktualna ścieżka: ${pathname}`);

 
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Nowa ścieżka: ${pathname}`);
}).listen(8080, () => {
  console.log("Serwer działa na porcie 8080");
});
