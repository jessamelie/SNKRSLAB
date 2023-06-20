const mongoose = require("mongoose");

//Ligne de code pour la rigueur
mongoose.set('strictQuery', true);

mongoose
  .connect(process.env.CONNEXIONDB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
