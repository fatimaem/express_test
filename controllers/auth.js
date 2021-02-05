const User = require("../models/User");


const register = async (req,res,next)=>{
  const user= await User.create({
        name:"fatima",
        email:"fatimaem@code.edu.az",
        password:"123456"
    })
        res.status(200).json({
            success:true,
            data:user
        })
}
module.exports = {
    register
}