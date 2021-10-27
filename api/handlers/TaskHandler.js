const TaskModel = require("../database/models/TaskModel")

module.exports = {
    getAllTasks(userId) {
        return TaskModel.find({user:userId}).exec()
    },
    postTask(task){
        return TaskModel.create(task)
    },
    getOneTask(id) {
        return TaskModel.findById(id).exec()
    },
    putOneTask(id, newDataTask){
        return TaskModel.findByIdAndUpdate({_id:id}, newDataTask).exec()
    },
    deleteOneTask(id){
        return TaskModel.findOneAndRemove({_id:id}).exec()
    }
}