const express= require('express');
const routes= require('./routes/api'); 
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');


const app= express();

mongoose.connect('mongodb://localhost:27017/myproject');
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors({origin : 'http://localhost:3000' }));


//initialize routes
app.use('/index',routes);




app.listen(process.env.port||4000,function(){
    console.log('now listening for request on port 4000');
});