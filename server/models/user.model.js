const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        pseudo:{
            type: String,
            required: true,
            minLength: 4,
            maxLength:50,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            lowercase: true,
            trim: true,
        },
        password:{
            type: String,
            required: true,
            max: 1024,
            minLength: 6,
        },
        picture: {
            type: String,
            default: "./cheminimgpardefaut"
        },
        bio:{
            type: String,
            max: 1024,  
        },
        followers: {
            type: [String]
        },
        following:{
            type: [String]
        }
    },
    {
        timestamps: true,
    });

//Avant d'enregristrer les données dans la DB, cryptage du mot de passe
userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const userModel = mongoose.model('user',userSchema);
module.exports = userModel