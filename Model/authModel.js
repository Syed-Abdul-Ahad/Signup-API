const mongoose = require("mongoose")

const CONN_STRING = 'mongodb+srv://OncoCura123:OncoCura123@oncocura.8b5iu.mongodb.net/OncoCuraDB?retryWrites=true&w=majority&appName=Project'

mongoose.connect(CONN_STRING)
.then(()=>{console.log("DB connection successful")})
.catch((err)=>{console.log(err)})



const userSchema = new mongoose.Schema({
    name:{
        type :String,
        required: true
        },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        minlength:8
    },
    city:String,
    phone: String,

},{
    collection: 'User'
})


const User = mongoose.model('User', userSchema);
module.exports = User;