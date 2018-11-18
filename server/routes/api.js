const express= require('express');
const router = express.Router();
const multer = require('multer');
const path =require('path');


const Details = require('../models/dataschema');
const Items = require('../models/itemschema');



//set storage engine

const storage = multer.diskStorage({
    destination: '../upload',
    filename: function(req,file,cb){
        cb(null, Date.now()+'-'+file.originalname);   
    }

});

//Init Upload

const upload = multer({
    storage:storage

}).single('file');




//get a list from db
router.post('/ret',function(req,res){
    Items.find(function(details){
        res.send(details);
    });
 
});
//add anew data to db

router.get('/retrieve', (req, res) => {
    Items.find({}, (err, items) => {
        console.log(items);
      if (err) return res.json({ success: false, error: err });
      return res.json(items);
    });
  });

router.post('/abc',function(req,res,next){
    var det = new Details({
       
        email:req.body.email,
        password:req.body.password
       
    });
    det.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in sending Employees :'+ JSON.stringify(err,undefined,2));
        }
    });


}); 

router.post('/def',function(req,res,next){
    var det = new Items({
        itemid: req.body.itemid,
        itemname: req.body.itemname,
        qty:req.body.qty,
        price: req.body.price
       
    });
    det.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in sending Employees :'+ JSON.stringify(err,undefined,2));
        }
    });


});

router.post('/imageup',function(req,res){
    // console.log(this.files.file);
    //console.log(req.file)
    upload(req,res,(err) => {
        if(err){
            console.log(err);
        }else{
            console.log(req.file);
        }
    });

});

router.post('/get',function(req,res){

});
//update data in db
router.put('/get/:id',function(req,res,next){
    Details.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Details.findOne({_id:req.params.id}).then(function(details){
            res.send(details);
        });
        
    });
    
});
//deleta data from db
router.delete('/dew/:id',function(req,res,next){
    Details.findByIdAndRemove({_id:req.params.id}).then(function(details){
        res.send(details);
    });
    
});

router.post('/deletef',function(req,res,next){
   
    Items.deleteOne({ itemname: req.body.itemname },(err, items) => {
        console.log(items);
      if (err) return res.json({ success: false, error: err });
      return res.json(items);
    });
      
  
   

}); 


router.post('/authenticate',function(req,res){
    Items.find(function(details){
        res.send(details);
    });
 
});

router.get('/', (req, res) => {
    Items.find({}, (err, items) => {
        console.log(items);
      if (err) return res.json({ success: false, error: err });
      return res.json(items);
    });
  });

  router.get('/users', (req, res) => {
    Items.find({}, (err, items) => {
        console.log(items);
      if (err) return res.json({ success: false, error: err });
      return res.json(items);
    });
  });

module.exports=router;