const mongoose=require('mongoose');
const UserSchema = new mongoose.Schema({
    email: {
        type:String,
        required:true
    },
    first_name: {
        type:String,
        required:true
    },
    last_name: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    age: {
        type:Number,
        required:true
    },
    city: {
        type:String,
        required:true
    }
});
 
module.exports = mongoose.model(
    'User', UserSchema);
