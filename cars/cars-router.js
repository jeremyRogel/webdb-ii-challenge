  
const express = require("express");
const rt = express.Router();

const knex = require("knex");
const knexCfig = require("../knexfile.js");
const db = knex(knexCfig.development);

rt.use(express.json());

rt.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve cars." });
    });
});

rt.post("/", (req, res) => {
  const newCar = req.body;
  db("cars")
    .insert(newCar)
    .then(ids => {
      db("cars")
        .where({ id: ids[0] })
        .then(car => {
          res.status(200).json(car);
        });
    })
    .catch(err => {
        console.log(err.message)
      res.status(500).json({ message: "Failed to insert car information." });
    });
});


module.exports = rt