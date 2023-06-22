const userModel = require('../models/user.model.js');
const ObjectID = require('mongoose').Types.ObjectId;

// Pour obtenir tous les utilisateurs de la base de données
module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find().select('-password');
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Pour obtenir les informations d'un seul utilisateur
module.exports.userInfo = async (req, res) => {
  try {
    if (!ObjectID.isValid(req.params.id)) {
      return res.status(400).send('Unknown ID: ' + req.params.id);
    }

    const user = await userModel.findById(req.params.id).select('-password');
    if (user) {
      res.send(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
