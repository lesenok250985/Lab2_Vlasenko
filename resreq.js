var http = require("http");
var server = http.createServer(function (req, res) {
    var url = req.url;
    if (url === "/nowa") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("To jest strona nowa!");
        res.end();
    }
    else if (url === "/stara") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("To jest strona stara!");
        res.end();
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("Strona nie znaleziona.");
        res.end();
    }
});
server.listen(8080, function () {
    console.log("Serwer działa na porcie 8080");
});
