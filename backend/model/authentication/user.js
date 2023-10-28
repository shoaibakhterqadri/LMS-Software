const mongoose=require('mongoose');

module.exports =mongoose.model('User',
{
    email:String,
    password:String,
}
)

// module.exports.User=User;