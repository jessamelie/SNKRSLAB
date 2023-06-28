const userModel = require("../models/user.model.js");
const ObjectID = require("mongoose").Types.ObjectId;

//READ user
// Pour obtenir tous les utilisateurs de la base de données
module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Pour obtenir les informations d'un seul utilisateur
module.exports.userInfo = async (req, res) => {
  try {
    if (!ObjectID.isValid(req.params.id)) {
      return res.status(400).send("Unknown ID: " + req.params.id);
    }

    const user = await userModel.findById(req.params.id).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//UPDATE user
module.exports.updateUser = async (req, res) => {
  try {
    if (!ObjectID.isValid(req.params.id)) {
      return res.status(400).send("Unknown ID: " + req.params.id);
    }

    const user = await userModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { bio: req.body.bio } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    if (user) {
      res.send(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//DELETE USER
module.exports.deleteUser = async (req, res) => {
  try {
    if (!ObjectID.isValid(req.params.id)) {
      return res.status(400).send("Unknown ID: " + req.params.id);
    }

    const user = await userModel.deleteOne({ _id: req.params.id }).exec();

    if (user) {
      res.send({ user: "Succesfully deleted" });
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//FOLLOW
module.exports.follow = async (req, res) => {
  try{
    if (!ObjectID.isValid(req.params.id) || (!ObjectID.isValid(req.body.idToFollow))) {
      return res.status(400).send("Unknown ID: " + req.params.id);
    }

//pour ajouter un abonné(e) dans sa liste (followers list)
const user = await userModel.findByIdAndUpdate(req.params.id, 
  {$addToSet: {following: req.body.idToFollow}},
  {new: true, upsert: true});

  if (user) {res.send(user)
  } else { 
  res.status(404).send("User not found") }

//pour s'ajouter dans la liste des personnes que l'on suit (following list)
await userModel.findByIdAndUpdate(req.body.idToFollow,
  {$addToSet: {followers: req.params.id}},
  {new: true, upsert: true});

  // if (user) {res.send(user)
  // } else { 
  // res.status(404).send("User not found") }

  }catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


//UNFOLLOW
module.exports.unfollow = async (req, res) => {
  try{
    if (!ObjectID.isValid(req.params.id)) {
      return res.status(400).send("Unknown ID: " + req.params.id);
    }




  }catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
