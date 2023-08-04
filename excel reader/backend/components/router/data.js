const express= require('express')
const voters=require('../mongoose schema/excelcreds')
const workbook=require('./excel')
const router=express.Router();

router.get('/data',(req,res)=>{
    res.render('data');
})
router.get('/pop',(req,res)=>{  
voters.find()
.then(data=>{
res.json(data);
})
})





module.exports=router;