const express = require("express")
const mongoose = require("mongoose")
const TaskHandler = require("../handlers/TaskHandler")

const TaskRouter = express.Router()

TaskRouter.post("/task", async(req, res) => {
    try {
        const resp = await TaskHandler.postTask(req.body)
        res.status(201).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
})

TaskRouter.get("/task/:id", async(req, res) => {
    try {
        let {id} = req.params
        if(!mongoose.isValidObjectId(id))
            res.status(400).json("Id da tarefa inválido")
        else 
            id = mongoose.mongo.ObjectId(id)
        const resp = await TaskHandler.getOneTask(id)
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
})

TaskRouter.put("/task/:id", async(req, res) => {
    try {
        let {id} = req.params
        if(!mongoose.isValidObjectId(id))
            res.status(400).json("Id da tarefa inválido")
        else 
            id = mongoose.mongo.ObjectId(id)
        const resp = await TaskHandler.putOneTask(id, req.body)
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
})

TaskRouter.delete("/task/:id", async(req, res) => {
    try {
        let {id} = req.params
        if(!mongoose.isValidObjectId(id))
            res.status(400).json("Id da tarefa inválido")
        else 
            id = mongoose.mongo.ObjectId(id)
        const resp = await TaskHandler.deleteOneTask(id)
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = TaskRouter