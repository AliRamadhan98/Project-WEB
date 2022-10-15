const express = require("express");
const routerUser = express.Router();
const userController = require("../../controllers/userControllers/userControllers")

routerUser.post("/register",userController.register)
routerUser.post("/login",userController.login)
routerUser.put("/addRfId",userController.inputRfId)

module.exports = routerUser