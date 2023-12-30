const mongoose = require('mongoose')
const UserSchema = require('../schema/UserSchema')


const User = mongoose.model("Users" , UserSchema);




module.exports = User