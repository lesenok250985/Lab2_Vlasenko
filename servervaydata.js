const http = require("http");


const jsonResponse = {
  message: "Hello from the server!",
  timestamp: new Date().toISOString(),
};


const server = http.createServer((req, res) => {
  if (req.url === "/data") {

    res.writeHead(200, { "Content-Type": "application/json" });
   
    res.end(JSON.stringify({ ...jsonResponse, timestamp: new Date().toISOString() }));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Endpoint not found");
  }
});


server.listen(8080, () => {
  console.log("Server is running on port 8080");


  setInterval(() => {
    const options = {
      hostname: "localhost",
      port: 8080,
      path: "/data",
      method: "GET",
    };

    const req = http.request(options, (res) => {
      let data = "";

    
      res.on("data", (chunk) => {
        data += chunk;
      });

    
      res.on("end", () => {
        console.log("Response from server:", data);
      });
    });

    req.on("error", (err) => {
      console.error("Request error:", err.message);
    });

    req.end();
  }, 1000); 
});
