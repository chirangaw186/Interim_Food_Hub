const mongoose = require('mongoose');
const schema = mongoose.Schema;


const drivers = new schema({
 
    driverID:{
        type:String
      
    },
    name:{
        type:String        
    },
    email:{
        type:String      
    },
    password:{
        type:String
    },
    username:{
        type: String       
    },
    address:{
        type:String
    },
    mobile:{
        type:String
    }
       
     
});

const driver = mongoose.model('deliverer',drivers);
module.exports=driver;