require('dotenv').config({ path: './config/.env' });
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes.js');
require('./config/database.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/user', userRoutes);

// Appel serveur
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
