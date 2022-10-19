const express = require("express");
const routerUser = express.Router();
const userController = require("../../controllers/userControllers/userControllers")

routerUser.get("/detailProfile",userController.detailProfile)
routerUser.put("/addRefId",userController.inputRfId)

module.exports = routerUser