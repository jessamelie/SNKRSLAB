const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema(
    {
        pseudo:{
            type: String,
            required: true,
            minLength: 4,
            maxLength:60,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail]?
            lowercase: true,
            trim: true,
        },
        password:{
            type: String,
            required: true,
            max: 1000,
        }
    }
)