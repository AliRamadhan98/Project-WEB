const express = require("express");
const router = express.Router();
const routerUser = require('./usersRoute/userRoute')
const routerSuhu = require('./suhuRoute/suhuRoute')

router.use("/user",routerUser)
router.use("/suhu",routerSuhu)

module.exports = router