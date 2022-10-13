const express = require("express");
const routerUser = express.Router();
const userController = require("../../controllers/userControllers/userControllers")

routerUser.get("/register",userController.register)

module.exports = routerUser