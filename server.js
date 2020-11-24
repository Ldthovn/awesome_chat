// let express = require("express");
import express from "express";

let app = express();

let hostname = "localhost";
let port = 3000;

app.get("/hello-world", (req, res) => res.send("<h1>Hello world !!!!</h1>"));

app.listen(port, hostname, () =>
  console.log(`Hello Tho, I'm running at ${hostname}:${port}/`)
);
