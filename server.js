const express = require("express");
const server = express();
const carsRouter = require("./cars/cars-router");

server.use('./api/cars', carsRouter)

const port = 5000;
server.listen(port, () => console.log(`API on port ${port}`))