const UserModel = require("../database/models/UserModel")

module.exports = {
    getAllUsers() {
        return UserModel.find({}).exec()
    },
    postUser(user) {
        return UserModel.create(user)
    },
    getOneUser(id) {
        return UserModel.findById(id).exec()
    },
    putOneUser(id, avatar, password){
        return UserModel.findOneAndUpdate({_id:id}, {avatar, password})
    },
    deleteOneUser(id){
        return UserModel.findOneAndRemove({_id:id})
    }
}