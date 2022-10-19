let {Users} = require("../../models")
let {matchPassword} = require('../../helpers/bcrypt')
let {generateToken} = require('../../helpers/jwt')

let register = async (req,res,next) => {
    let {username,password,email,phoneNumber} = req.body
    try {
        let checkUser = await Users.findOne({where: {username: username}})
        if(checkUser) {
            res.status(400).json({message:"User Already Registered"})
        }

        let newUsers = await Users.create({username,password,email,phoneNumber})
        res.status(201).json(newUsers)

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

let login = async (req,res,next) =>{
    let {username,password} = req.body
    try {
        let checkUser = await Users.findOne({where:{username: username}})
        if(checkUser){
            let checkPassword = matchPassword(password,checkUser.password)
            if(checkPassword){
                let accessToken = await generateToken({id:checkUser.id, email:checkUser.email,phoneNumber:checkUser.phoneNumber})
                res.status(200).json({accessToken:accessToken})
            } else {
                res.status(404).json({message:"Wrong Password"})
            }
        } else{
            res.status(400).json({message:"User Not Found"})
        }
    } catch (error) {
        
    }
}

let inputRfId = async (req,res,next) =>{
    let {refId} = req.body
    let {username} = req.user
    try {
        let checkUser = await Users.findOne({where:{username:username}})
        if(checkUser){
            let insertRfId = await Users.update({rfid:refId,role:"admin"},{where:{username:username},individualHooks:true})
            res.status(200).json({message:"Add RFID Successfull"})
        } else {
            res.status(400).json({message:"User Not Found"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

let detailProfile = async (req,res,next) =>{
    let {userId} = req.body
    try {
        let detailUser = await Users.findByPk(userId)
        if(detailUser){
            res.status(200).json({message:detailUser})
        } else {
            res.status(404).json({message:"User Not Found"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports ={register,inputRfId,login,detailProfile}