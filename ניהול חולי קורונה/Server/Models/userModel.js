const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true,
        maxLength:9,
        immutable:true,
        uniqe:true
    },
    phone:{
        type:String,
        required:true,
        maxLength:10
    },
    mobilePhone:{
        type:String,
        maxLength:10
    },
    address:{
        type:String,
        required:true,
    },
    Date_of_receiving_positive_answer:{
        type:mongoose.Schema.Types.Date,
        dafault:()=>new Date(),
        immutable:true,
    },
    dateOfRecovery:{
        type:mongoose.Schema.Types.Date,
        dafault:()=>new Date(),
        immutable:true,
    },
    Korona:{
        type: [String], maxLength: 4
    }
}, {versionKey: false},{ timestamps:true})

module.exports = mongoose.model('User',userSchema)
