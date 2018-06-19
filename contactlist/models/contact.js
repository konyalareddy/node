const mongoose = require('mongoose');


const contactschema = mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    }
});

const Contact = module.exports = mongoose.model('users', contactschema);