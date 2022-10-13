let {Users} = require("../../models")

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


module.exports ={register}