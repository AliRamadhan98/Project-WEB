const {verifyToken} = require("../helpers/jwt")
const {Users} = require('../models')

let authentication = async (req,res,next) =>{
    let token;
    console.log(req.headers.authorization,"ISI AUTHORIZATION")
    if(req.headers.authorization){
        token = req.headers.authorization.split(" ")[1]
    } else {
        res.status(401).json({message:"Invalid Token"})
    }
    try {
        if(token){
            let checkToken = verifyToken(token)
            let checkUser = await Users.findByPk(checkToken.id)
            if(checkUser){
                req.user = {userId:checkUser.id,email:checkUser.email,phoneNumber:checkUser.phoneNumber,username:checkUser.username}
                next()
            }else{
                res.status(404).json({message:"User Not Found"})
            }
        }else{
            res.status(401).json({message:"Invalid Token"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = authentication