//FICHIER CONTROLLER DE L'AUTHENTIFICATION
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

//INSCRIPTION DE L'USER
module.exports.signUp = async (req, res) => {
  const { pseudo, email, password } = req.body;

  try {
    const user = await userModel.create({ pseudo, email, password });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res
      .status(200)
      .json({ error: "Une erreur s'est produite lors de l'inscription" });
  }
};

//fonction pour la création du token
const maxAge = 3 * 24 * 60 * 60 * 1000; //durée de validité du token
const createToken = (id) => {
  return jwt.sign(id, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

//Connexion
module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.login(email, password);
    //utilisation du token
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).json({ user: user._id });
  } catch (err) {
    res.status(200).json(err);
  }
};

//Déconnexion
module.exports.logOut = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "Déconnexion réussie" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Une erreur s'est produite lors de la déconnexion" });
  }
};
