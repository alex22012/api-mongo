const express = require("express")
const cors = require("cors")
const userRouter = require("../routes/UserRouter")

module.exports = () => {
    const app = express() 
    app.use(cors())
    app.use(express.json())
    app.use(userRouter)
    app.use(express.urlencoded({extended:false}))
    return app
}