const app = require("express")
const suhuRoute = app.Router()
const suhuController = require("../../controllers/suhuControllers/suhuControlers")

suhuRoute.post('/',suhuController.addSuhu)

module.exports = suhuRoute