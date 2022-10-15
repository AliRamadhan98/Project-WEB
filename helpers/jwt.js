const jwt = require('jsonwebtoken')

let generateToken = (payload) =>{
    return jwt.sign(payload.process.env.JWT_TOKEN)
}

let verifyToken = (payload) =>{
    return jwt.verify(payload,process.env.JWT_TOKEN)
}

module.exports = {generateToken,verifyToken}