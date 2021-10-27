const mongoose = require("../MongoConnection")
const UserSchema = require("../schemas/UserSchema")

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel