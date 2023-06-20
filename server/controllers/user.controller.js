const userModel = require ('../models/user.model.js');
const ObjectID = require('mongoose').Types.ObjectId;


//Pour obtenir tous les users de la base de données 
module.exports.getAllUsers = async (req, res) => {
    const users = await userModel.find().select('-password'); //demande de tous les users sans les mdp
    res.status(200).json(users);
}

//Pour obtbenir les infos d'un seul user
module.exports.userInfo = async (req, res) => {
    //pour savoir si l'ID est connu dans la base de données
    if (!ObjectID.isValid(req.params.id)) 
        return res.status(400).send('ID unknowm : ' + req.params.id)
    
    userModel.findById(req.params.id, (err, data) => {
        if (!err) res.send(data);
        else console.log('ID unknowm : ' + err)

        }).select('-password')
    };