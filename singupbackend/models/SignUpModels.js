const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        rquire:true
    },
    password:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('mytable', signUpTemplate)