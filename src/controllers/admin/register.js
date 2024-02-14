const {User} =require("../../models/user")

const adminRegisterController =(req,res)=>{
    console.log(req.body)
    const user=new User(req.body)
    user.save().then(d=>{
        res.status(200).json({msg:"Admin Registeration succesfull"});
    })
    .catch(e=>{
        res.status(400).json({msg:"Some Erroe"})
    })
    
}





module.exports={adminRegisterController}