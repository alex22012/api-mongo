const express = require("express")
const app = require("./api/config/express")()

app.listen(3000, () => console.log("OK"))