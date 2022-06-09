const jwt = require('jsonwebtoken');
const User = require('../models/userSchema') // get user from userSchema

const Authentication = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken; // get localstorage token
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY); // verify that token with secret key

        const presentUser = await User.findOne({_id : verifyToken._id, "tokens.token" : token}) // get user detail by comparing token id and user id

        // if did not match then it show this error
        if(!presentUser) {
            return res.send('User not found')
        }
        console.log(token)

        req.token = token;
        req.presentUser = presentUser;
        req.userID = presentUser._id;

        next();
    } catch (error) {
        res.status(401).send('Unauthorized : no token provide')
        console.log(error)
    }
}

module.exports = Authentication;