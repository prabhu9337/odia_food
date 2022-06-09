const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './.env'})
require('./src/config/database') // this is for connection with database file
const User = require('./src/models/userSchema');
const port = process.env.PORT
const cors = require('cors')
app.use(express.json())

app.use(require('./src/routes/auth'))

// middleware

const middleware = (req, res, next) => {
    console.log('hello from middleware');
    next();
}
// middleware();

app.get('/', (req, res) => {
    res.send('This is a home page...');
})

app.get('/about', middleware, (req, res) => {
    res.send('This is about page...');
})

app.get('/contact', (req, res) => {
    res.send('This is contact page...')
})

app.get('/register', (req, res) => {
    res.send('This is register page...');
})

app.get('/login', (req, res) => {
    res.send('This is login page...')
})

app.listen(port, (req, res) => {
    console.log(`Server listening on port ${port}`);
})


// mongodb+srv://prabhudatabase:<password>@cluster0.ggwee.mongodb.net/?retryWrites=true&w=majority