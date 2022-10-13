const express = require("express");
const router = express.Router();
const routerUser = require('./usersRoute/userRoute')

router.use("/user",routerUser)


module.exports = router