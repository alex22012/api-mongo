const mongoose = require("mongoose")
const TaskSchema = require("../schemas/TaskSchema")

const TaskModel = mongoose.model("tasks", TaskSchema)

module.exports = TaskModel