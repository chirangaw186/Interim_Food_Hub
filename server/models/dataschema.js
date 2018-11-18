const mongoose = require('mongoose');
const schema = mongoose.Schema;



const Details = new schema({
   
    name:{
        type:String
    },
    password:{
        type:String
       
    },
    admin:{
        type:Boolean
       
    }
    
     
});

const Detailsitem = mongoose.model('users',Details);//'details' is mongodb name Details is the schema name;
module.exports=Detailsitem;