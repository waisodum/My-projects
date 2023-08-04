const express = require('express')
const path=require('path')
const app = express()
const login=require('./components/router/log_in');
const DATA=require('./components/router/data');
const port=80;
//set template engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '../views'))
app.set('static', path.join(__dirname, '../frontend/static/'))
//using middleware
app.use(express.urlencoded())
app.use(login); 
app.use(DATA);
app.use('/static',express.static('static'))
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
