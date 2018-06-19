const express = require('express');
const router = express.Router();


const Contact = require('../models/contact');

router.get('/contacts',(req, res, next)=>{
    Contact.find(function(err, Contact){
        res.json(Contact);
    });
});
router.post('/contacts',(req,res,next)=>{
    let newcontact = new Contact({
        firstname:req.body.firstname,
        lastname:req.body.lastname
    });
    newcontact.save((err,Contact)=>{
        if(err){
        res.json({mes:'failed to add contact'});
        }
        else
        {
            res.json({mes:'contacted added sucessfully'});
        }
    });
});

router.delete('/contacts/:id',(req, res, next)=>{
    contact.remove({_id:req.param.id},function(err,result){
        if(err){
            res.json({mes:'failed to delete contact'});
            }
            else
            {
                res.json({result});
            }
    })
});

module.exports = router;
