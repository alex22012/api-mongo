const mongoose = require("mongoose")

mongoose.set("runValidators", true)
mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://alex:dR3vvgINcsvGFBfP@cluster0.5ovhs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
console.log("Mongo ok")


module.exports = mongoose