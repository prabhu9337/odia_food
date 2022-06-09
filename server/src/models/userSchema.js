const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phoneNo : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    confirmPassword : {
        type : String,
        required : true
    },
    tokens : [
        {
            token : {
                type : String,
                required : true
            }
        }
    ] // this is array of an object because user not login one time, user login many time, and wheen user login then a new token will generate and store in the database
})

// password hashing

userSchema.pre('save', async function (next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);
    }
    next(); // next() use for middleware
})

// generating jwt token
userSchema.methods.generateAuthToken = async function() {
    try {
        let myToken = jwt.sign({_id : this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token : myToken});
        await this.save();
        return myToken;
    } catch (error) {
        return res.status(400).json({error})
    }
}

const User = mongoose.model('user', userSchema);

module.exports = User;