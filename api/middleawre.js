
const Middleware = (req, res, next) => {
    console.log(req.headers.authorization)
    next()
}

module.exports = Middleware