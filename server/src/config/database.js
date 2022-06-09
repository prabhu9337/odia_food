const mongoose = require('mongoose');
const dataBase = process.env.DATABASE

mongoose.connect(dataBase, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log('Successfully connected to database...')
}).catch((error) => {
    console.log(error);
})