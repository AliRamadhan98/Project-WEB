const bcrypt = require('bcrypt')

let hashPassword = (password) =>{
    return bcrypt.hashSync(password,10)
}

let matchPassword = (password,hash) =>{
    return bcrypt.compareSync(password,hash)
}

module.exports = {hashPassword,matchPassword}