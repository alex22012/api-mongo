const jwt = require("jsonwebtoken")
const jwtsecret = require("../service/jwtsecret")

const auth = (req, res, next) => {
    const authString = req.headers.authorization
    if(authString === undefined)
        res.status(401).json("Nenhum token presente")
    else {
        const token = authString.split(" ")
        if(token[0] === "Bearer"){
            jwt.verify(token[1], jwtsecret, (err) => {
                if(err) {
                    res.status(401).json("Token está inválido")
                }else {
                    next()
                }
            })
        }else {
            res.status(401).json('Token não existe')
        }
    }
}

module.exports = auth