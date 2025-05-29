
const User=require('../model/UserSchema')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const register= async (req,res)=>{
    try{

    const {name,age,email,password}=req.body

    const userExists= await User.findOne({email})

    if(userExists){
        return res.status(500).json({msg:"user already exits"})
    }

        const hashpassword= await bcrypt.hash(password,10)
        const newUser=new User({
            name,age,email,password:hashpassword
        })
        
        await newUser.save()
         res.status(201).json({msg:"user registered sucessfully"})

}catch(error){
     res.status(500).json({msg:error.msg})

}


}


const login=async(req,res)=>{
    try{
    const {email,password}=req.body

    const user=await User.findOne({email})
    if(!user){
        return res.status(401).json({msg:"user already exist"})

    }
    const ismatch=await bcrypt.compare(password,user.password)
    if(!ismatch){
        return res.status(401).json({msg:"invalid credenil"})
    }

    const token=jwt.sign({id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:"7d"}
    )

    res.status(201).json({msg:"user login sucessfully"})

    res.json({token,user: {id:user._id,  name:user.name}})
}
catch(error){
     res.status(500).json({message:error.message})
}
}
const logout = async (req, res) => {
    try {
      res.clearCookie("token");
      res.status(200).json({ msg: "User logged out successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = { register, login, logout };
