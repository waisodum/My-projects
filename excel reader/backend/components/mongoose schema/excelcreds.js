const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/voters');
const db= mongoose.connection;
db.once('open',()=>{
    // console.log('connection done');
})

const voterschema=  new mongoose.Schema({
  parties:String,
header:Number,
header2:Number,
header3:Number
})
const voters=new mongoose.model('voters',voterschema);


module.exports=voters;


