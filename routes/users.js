var express = require('express');
var router = express.Router();
var db=require("../db.js")
var _ =require('underscore');



// Save uploaded  data to database 
router.post('/uploadfile/add', (req, res) =>{
console.log("data"+ JSON.stringify(req.body));
     var data=req.body;
	 
	 _.each(data, function (qust) {
                console.log("qust:"+qust)
		 		var newupload = new db.User({Technology:qust.Technology, Region:qust.Region,Entity:qust.Entity, Country:qust.Country,NQCID:qust.NQCID,NQC:qust.NQC, BPCID:qust.BPCID});
					newupload.save((err,uploadjobdata)=>{
					 console.log("uploadjobdata"+ JSON.stringify(err))
				})
            })
   
                      let message = JSON.parse('{"status":"success","message":"Mail sent successfully."}');
                       res.status(200).json(message)
})

//get all data

router.get('/userdata', (req, res) =>{
    db.User.find({},function(err,survy){
         var message = JSON.parse('{"status":"success","message":' + JSON.stringify(survy) + '}');

        if(survy==''){
            res.send(message)
        } else {
            res.send(message)
        }
    })
})

//UpdateRecord

router.post('/update/record/:id', (req, res) =>{
    db.User.findOne({_id:req.params.id},(err,user)=> {
        if(user == undefined) {
            var message = JSON.parse('{"status":"failed","message":"record was not found."}');
            res.status(422 ).json(message)
        }
        else {
             db.User.update({_id:req.params.id}, {$set:{ Technology:req.body.Technology,Region:req.body.Region,Entity:req.body.Entity,Country:req.body.Country,NQCID:req.body.NQCID,NQC:req.body.NQC,BPCID:req.body.BPCID}},(err,result)=>{
                console.log("result:"+JSON.stringify(result))
                var message = JSON.parse('{"status":"success","message":"Updare record"}');
                  res.status(200).json(message)
            
            })
        }
    })
})

// Delete Record
router.delete('/:id',  (req, res) =>{
  db.User.findOne({_id:req.params.id},(err,user)=>{
    if(user==undefined) {
        let message = JSON.parse('{"status":"failed","message":"record was not found."}');
        res.status(422 ).json(message)
    }
    else {
      db.User.update({_id:req.params.id}, {$set:{ isDeleted:true}},(err,result)=>{
        let message = JSON.parse('{"status":"success","message":"record deleted successfully"}');
        res.status(200).json(message)
      })
    }
  })
})


module.exports = router;
