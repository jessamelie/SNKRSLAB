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

//Avant d'enregistrer les données dans la DB, salage du mot de passe avant de rentrer l'user
userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//désalage du password afin de comparer l'input de l'user à ce qu'il y a dans la DB
userSchema.statics.login = async function(email, password){
    const user = await this.findOne({email});
    if (user){
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('incorret password')
    }
    throw Error('incorrect email')
}

const userModel = mongoose.model('user',userSchema);
module.exports = userModel