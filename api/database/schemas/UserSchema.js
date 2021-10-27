const {Schema} = require("mongoose")

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    avatar: {
        type:String,
        required:false
    }
})

module.exports = UserSchema