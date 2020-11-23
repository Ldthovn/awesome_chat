var express = require("express");
var app = express();

var hostname = "localhost";
var port = 3000;

app.get("/hello-world", (req, res) => res.send("<h1>Hello world !!!!</h1>"));

app.listen(port, hostname, () =>
  console.log(`Hello Tho, I'm running at ${hostname}:${port}/`)
);
