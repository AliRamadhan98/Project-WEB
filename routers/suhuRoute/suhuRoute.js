const app = require("express")
const suhuRoute = app.Router()
const suhuController = require("../../controllers/suhuControllers/suhuControlers")

suhuRoute.post('/add',suhuController.addTemperature)
suhuRoute.get('/get',suhuController.getTemp)

module.exports = suhuRoute