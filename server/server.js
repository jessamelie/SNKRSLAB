require('dotenv').config({path:'./config/.env'})
const express = require('express');
require('./config/database.js');
const app = express();


app.listen(process.env.PORT, () => (
    console.log(`Listening on port ${process.env.PORT}`)
))