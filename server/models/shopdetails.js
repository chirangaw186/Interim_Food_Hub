const mongoose = require('mongoose');
const schema = mongoose.Schema;



const Shop = new schema({
   
    userid:{
        type:String
    },
    name:{
        type:String
       
    },
    qty:{
        type:Number
       
    },
    price:{
        type:Number
       
    }
    
     
});

const Shops = mongoose.model('shop',Shop);//'details' is mongodb name Details is the schema name;
module.exports=Shops;