const {Schema} = require("mongoose")

const TaskSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    complexity: {
        type:Number,
        required:true
    },
    dificulty:{
        type:Number, 
        required:true
    },
    user: {
        type:Schema.Types.ObjectId,
        ref:"users",
        required:true,
    },
    task: {
        type:String,
        required:true
    },
    finished: {
        type:Boolean,
        required:true
    },
    startDate: {
        type:Date, 
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    daysLeft: {
        type:Number,
        required:true
    }
})

module.exports = TaskSchema