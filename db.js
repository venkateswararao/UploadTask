var mongoose = require('mongoose');
require('dotenv').load();

exports.mongoose=mongoose;
var mongodbURL = 'mongodb://localhost:27017/uploadtask';
var mongodbOptions = {};
var Schema = mongoose.Schema;

mongoose.connect(mongodbURL, mongodbOptions, function (err, res) {
    if (err) {
        console.log('Connection refused to ' + mongodbURL);
        console.log(err);
    }
    else {
        console.log('Connection successful to: ' + mongodbURL);
    }
});

// User Schema
var UserSchema = new Schema({

    Technology: {
        type:String
    },
    Region:{
        type:String
       
    },
    
    Entity:{
        type:String,
       
    },

    Country:{
        type:String
    },

    NQCID:{
        type:String
    },
    NQC:{
        type:String
       
    },
    BPCID:{
        type:String
    },

       createdDate:{
        type:Date,
        default:Date.now,
        required:true
    }

   

})

exports.User = mongoose.model('User', UserSchema, 'users');
