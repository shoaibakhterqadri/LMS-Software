const UserModel = require('../../model/authentication/user');

module.exports.signup=(req,res)=>{
    console.log(req.body);
    const newUser=new UserModel({
        email:req.body.email,
        password:req.body.password
    })
    newUser.save().then(()=>{
        res.send({code:200,message:"Signup Success"});
    })
    .catch(()=>{
        res.send({code:500,message:"Signup Error"})
    })
}

module.exports.signin=(req,res)=>{
 
   console.log(req.body.email);
   UserModel.find({email:req.body.email}).then(result=>{
console.log(result);
if(result.password !== req.body.password){
    res.send({code:404,message:"Password Wrong"});
    console.log("Password Wrong");
}
else{
    res.send({code:200,message:"Password Found",token:24546});
    console.log("Password Found");


}
   })
   .catch((err)=>{
    console.log(err);
    res.send("User not Found")
   })
}