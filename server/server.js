require('dotenv').config({ path: './config/.env' });
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes.js');
require('./config/database.js');

const app = express();

//utilisation de bodyParser pour traiter les requêtes au bon format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//ROUTES
app.use('/api/user', userRoutes);

//APPEL SERVEUR
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
