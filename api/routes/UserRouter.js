const express = require("express")
const UserHandler = require("../handlers/UserHandler")
const mongoose = require("mongoose")
const TaskHandler = require("../handlers/TaskHandler")
const authMiddleware = require("../middleware/authMiddleware")
const jwtsecret = require("../service/jwtsecret")
const jwt = require("jsonwebtoken")

const userRouter = express.Router()

userRouter.get("/users", authMiddleware, async (req, res) => {
    try {
        const resp = await UserHandler.getAllUsers()
        res.status(200).json(resp)
    }catch(err){
        console.log(err)
    }
})

userRouter.post("/user", async (req, res) => {
    try {
        const resp = await UserHandler.postUser(req.body)
        jwt.sign({email:resp.email}, jwtsecret, {expiresIn:"3h"}, (err, token) => {
            if(err)
                res.status(500).json("Erro no servidor")
            else 
                res.status(201).json({resp, token})
        })
    } catch (error) {
        console.log(error)
    }
})

userRouter.get("/user/:id/task", authMiddleware, async(req, res) => {
    try {
        let {id} = req.params
        if(!mongoose.isValidObjectId(id))
            res.status(400).json('Usuario invalido')
        else 
            id = mongoose.mongo.ObjectId(id)
        const resp = await TaskHandler.getAllTasks(id)
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
})

userRouter.get("/user/:id", authMiddleware, async (req, res) => {
    let {id} = req.params
    if(!mongoose.isValidObjectId(id))
        res.status(400).json("Id inválido")
    else 
        id = mongoose.mongo.ObjectId(id)
    try {
        const resp = await UserHandler.getOneUser(id)
        res.status(200).json(resp)
    } catch (error) {
        
    }
})

userRouter.put("/user/:id", authMiddleware, async (req, res) => {
    let {id} = req.params
    let {avatar, password} = req.body
    if(!mongoose.isValidObjectId(id))
        res.status(400).json("Id inválido")
    else 
        id = mongoose.mongo.ObjectId(id)
    try{
        const resp = await UserHandler.putOneUser(id, avatar, password)
        res.status(200).json(resp)
    }catch(error) {
        console.log(error)
    }
})

userRouter.delete("/user/:id", authMiddleware, async (req, res) => {
    let {id} = req.params
    if(!mongoose.isValidObjectId(id))
        res.status(400).json('Id inválido')
    else
        id = mongoose.mongo.ObjectId(id)
    try {
        const resp = await UserHandler.deleteOneUser(id)
        res.status(200).json(resp)
    } catch (error) {
        console.log(error)
    }
})

module.exports = userRouter