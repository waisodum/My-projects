const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/voters');

const db= mongoose.connection;
db.once('open',()=>{})
const loginschema=  new mongoose.Schema({
name:String,
email:String,
age:Number,
password:String
})
const login=new mongoose.model('login',loginschema);

module.exports={logincreds:function (dAta) {
let log_in=new login(dAta);
log_in.save()  
},
log:login
}


