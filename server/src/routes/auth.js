const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authentication = require('../middleware/authentication')

require('../config/database');
const User = require('../models/userSchema');

router.get('/', (req, res) => {
    res.send('Hello from the router...')
});

// router.post('/register', (req, res) => {
//     // 1st we take the user data fill in body by req.body methode
//     const {name, email, phoneNo, work, password, confirmPassword} = req.body
    
//     // 2nd we verify the field , if user do not fill any field, then we show a message to user..
//     if(!name || !email || !phoneNo || !work || !password || !confirmPassword) {
//         return res.status(422).json({error : "Please fill all the field..."})
//     }

//     // 3rd we find that email id in database...
//     User.findOne({email : email}).then((userExist) => {
//         // 4th if email is already exists then it show a message...
//         if(userExist) {
//             return res.status(400).json({error : "User already exists..."})
//         }

//         // 5th create that new user in database by new User() method...
//         const user = new User({name, email, phoneNo, work, password, confirmPassword});

//         // 6th we save that user in database...
//         user.save().then(() => {
//             res.status(201).json({msg : "User created successfully..."})
//             // if any error then we through that error to user...
//         }).catch((error) => {
//             res.status(500).json({error})
//         })
//         // this error for findOne() method
//     }).catch((error) => {
//         res.status(500).json({error})
//     })
//     // left email is database email (property) and right side email is user fill email (value) i.e come from req.body ... this is for all times
//     // in the place of userExist we can write any thing
// })

// user registration by using async await function...
router.post('/register', async (req, res) => {
    const {name, email, phoneNo, password, confirmPassword} = req.body;

    try {
        // check user is exists or not in database
        const userExists = await User.findOne({email : email});

        // if user is exists then...
        if(userExists) {
            return res.status(500).json({error : 'user already exists'})
        }
        
        // if password and confirm password does not match
        else if(password !== confirmPassword) {
            return res.status(500).json({error : "password are not matching..."})
        }

        // if user dows not exists then create a new user in database
        else {   
            const user = new User({name, email, phoneNo, password, confirmPassword});
            
            const newUser = await user.save();
            
            if(newUser) {
                return res.status(201).json({message : "user created successfully"});
            }
        }
    } catch (error) {
        return res.status(400).status({error});
    }
})

// login
router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;

        const loginUser = await User.findOne({email: email}) // find email in database...
        if(loginUser) {
            const passMatch = await bcrypt.compare(password, loginUser.password) // matching user password in database password by bcrypt.compare method

            // if password is not matching then...
            if(!passMatch) {
                return res.status(400).json({error : 'invalid password'})
            }
            // if password is matching then...
            else {                
                const token = await loginUser.generateAuthToken(); // call that middleware from userSchema to generate token
                console.log(token)
                
                res.cookie("jwtoken", token, {
                    expires : new Date(Date.now() + 60000), // this is for expire the token 60000 means 60000 mili sec, i.e how long that token is active for login, after expire login again..
                    httpOnly : true
                })
                res.status(200).json({message : 'Login successful'})
            }
        }
        // if email is not matching then...
        else {
            return res.status(400).json({error : 'user does not exists'})
        }
    } catch (error) {
        return res.status(500).json(error.message) 
    }
})

router.get('/about', authentication, (req, res) => {
    res.send('this is about us page')
})

router.get('/logout', (req, res) => {
    console.log('logout page');
    res.clearCookie('jwtoken', {path: '/'})
    res.status(200).send('User Logout')
})


module.exports = router;