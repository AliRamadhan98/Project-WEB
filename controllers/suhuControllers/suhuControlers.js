let {Suhu,Users} = require('../../models')

let addTemperature = async (req,res,next) =>{
    let {suhu,kelembaban,lat,lon} = req.body
    console.log(req.body,"ISI BODY")
    let {userId,email} = req.user
    try {
        let checkUser =  await Users.findByPk(userId)
        if(checkUser){
            let latitude = lat ? lat : "0"
            let longitude = lon ? lon : "0"
            console.log(suhu,'ISI SUHU')
            await Suhu.create({UserId:userId,temp:suhu,humid:kelembaban,lat:latitude,lon:longitude,created_by:email})
            res.status(288).json({message:"Data Added Successfully"})
        }else{
            res.status(404).json({message:"User not found"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}

let getTemp = async (req,res,next) =>{
    let{userId} = req.user
    try {
        let checkUser = await Users.findByPk(userId)
        if(checkUser){
            let temp = await Suhu.findAll({where:{UserId:userId},limit:10,order:[["date_created","DESC"]]})
            if(temp.length > 0){
                res.status(200).json({message:{temp,user:checkUser}})
            } else {
                res.status(404).json({message:"Data not found"})
            }
        } else {
            res.status(404).json({message:"User not found"})
        }
    } catch (error) {
        
    }
}

module.exports ={addTemperature,getTemp}