const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

//Inscription
module.exports.signUp = async (req, res) => {
  const {pseudo, email, password} = req.body;

  try {
    const user = await userModel.create({ pseudo, email, password });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(500).json({ error: 'Une erreur s\'est produite lors de l\'inscription' });
  }
};

//fonction pour créer le token
const maxAge = 3 * 24 * 60 * 60 * 1000 //durée de validité du token
const createToken = (id) => {
  return jwt.sign({id}, process.env.TOKEN_SECRET, {
    expiresIn: maxAge
  })
};

//Connexion
module.exports.signIn = async (req, res) => {
const {email, password } = req.body

try{
  const user = await userModel.login(email, password);
  //création de token
  const token = createToken(user._id);
  res.cookie('jwt', token, {httpOnly: true, maxAge}); //jwt est le nom du cookie
  res.status(200).json({user: user._id})
} catch (err){
  res.status(200).json(err)
}
};

//Déconnexion
//Le principe est de retiré le token qui a été donné à l'user puis de le rediriger sur une autre page
module.exports.logOut = async (req,res) => {
  res.cookie('jwt','', {maxAge:1});
  res.redirect('/');
}