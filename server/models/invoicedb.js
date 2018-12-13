const mongoose = require('mongoose');
const schema = mongoose.Schema;


const invoices = new schema({
 
    invoiceID:{
        type:String,
        required:true
    },
    shopname:{
        type:String,
        default:"No shop name"
        
    },
    customeremail:{
        type:String,
        required:true
    },
    
    orderedfooditems:{
        type:String,
        
        
    },
    totalprice:{
        type:String,
     
    },
    
    date:{
        type:String,
        required:true,
    },

    deliverystatus:{
        type:String,
        required:true,
    
    },
    assignstatus:{
        type:String,
        required:true,
    
    },
    delivererID:{
        type:String,
   
    
    }



    
     
});

const InvoiceItem = mongoose.model('invoices',invoices);//'details' is mongodb name Details is the schema name;register is collection name;
module.exports=InvoiceItem;