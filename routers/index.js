const express = require("express");
const router = express.Router();
const routerUser = require('./usersRoute/userRoute')
const routerSuhu = require('./suhuRoute/suhuRoute')
const userController = require('../controllers/userControllers/userControllers')
const authentication = require('../middleware/auth')

router.post("/register",userController.register)
router.post("/login",userController.login)
router.use(authentication)
router.use("/user",routerUser)
router.use("/suhu",routerSuhu)

module.exports = router