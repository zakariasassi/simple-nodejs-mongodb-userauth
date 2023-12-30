const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    email :{
        type : String,
    },
    password : {
        type : String,
    },
    phone : {
        type : String,
    },
    username : {
        type : String,  
    }

})


module.exports = UserSchema