const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');


const app = express();

const userRoutes = require('./routes/user.routes.js');

//utilisation de bodyParser pour traiter les requêtes au bon format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CORS middleware to allow access
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });

//ROUTES
app.use('/api/user', userRoutes);

module.exports = app