const userModel = require ('../models/user.model.js');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.getAllUsers = async (req, rest) => {
    const users = await userModel.find().select();
    rest.status(200).json(users);
}