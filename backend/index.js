const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const userController=require('./controller/authentication/user');
const cors=require('cors');

const app=express();
const port=5000;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

async function connectToDatabase()
{
    try {
        await mongoose.connect('mongodb+srv://shoaibakhter:shoaibakhter-lms-software@cluster0.78eq5ub.mongodb.net/',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // 30 seconds
          });
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error in connection', error);
    }
}
connectToDatabase();

app.post('/signup', userController.signup);
app.post('/signin', userController.signin);
app.post('/send-otp', userController.sendotp);
app.post('/submit-otp', userController.submitotp);



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
