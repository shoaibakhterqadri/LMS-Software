const UserModel = require('../../model/authentication/user');
const nodemailer = require("nodemailer");

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

   UserModel.findOne({email:req.body.email}).then((result)=>{
console.log("The credential is "+ result);
console.log(req.body.password);
if(result.password != req.body.password){
    res.send({code:404,message:"Password Wrong"});
    console.log("Password Wrong");
}
else{
    res.send({code:200,message:"Password Found",email:result.email,token:'24546abc'});
    console.log("Password Found");


}
   })
   .catch((err)=>{
    console.log(err);
    res.send("User not Found")
   })
}

module.exports.sendotp= async (req,res)=>{
console.log("Check what is in sendotp "+req.body);
const _otp = Math.floor(10000 + Math.random() * 20000)


let user= await UserModel.findOne({email:req.body.email})
console.log("Email is done");
if(!user){
    res.send({code:500,message:"User Not Found"})
}
console.log("User is available");
let testAccount = await nodemailer.createTestAccount()

let transporter = nodemailer.createTransport({
    host: 'pop3.ethereal.email',
    port: 995,
//   secure: TLS,
// security:TLS,
    auth: {
        user: 'kaleigh.larkin50@ethereal.email',
        pass: 'Qc3tshk6wsxeH5Q7FZ'
    }
})

console.log("Check transporter");

let info = await transporter.sendMail({
    from: 'shoaibakhter181422@gmail.com',
    to: req.body.email, // list of receivers
    subject: "OTP", // Subject line
    text: String(_otp),
    html: `<html>
        < body >
        Salam
    </ >
   </html > `,
})

console.log("sendMail");

if(info.messageId){

    console.log("Info is "+info);

    UserModel.updateOne({email:req.body.email},{otp:_otp})
    .then((result)=>{
        res.send({code:200,message:"OTP is sent in Email"})
    })
    .catch((err)=>{
      console.log("OTP is not Sent");
      res.send({code:500,message:"OTP is not sent"})  
    })
}
else{
    res.send({code:500,message:"Server Error"})
}


}

module.exports.submitotp=(req,res)=>{
    
    UserModel.findOne({otp:req.body.otp}).then((result)=>{
        UserModel.updateOne({ email: result.email }, { password: req.body.password })
        .then(result => {
            res.send({ code: 200, message: 'Password updated' })
        })
        .catch(err => {
            res.send({ code: 500, message: 'Server err' })

        })

        
    }).catch((err)=>{
        console.log("OTP is wrong"+ err);
    })
    }