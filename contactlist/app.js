var express = require('express');
var mongoos = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();


const port = 7777;
mongoos.connect('mongodb://rkreddy:0864797Rr..@ds159400.mlab.com:59400/agriloop'); 

mongoos.connection.on('connected',()=>{
    console.log("connected to database");
});
mongoos.connection.on('error',(err)=>{
    if(err)
    {
        console.log(err);
    }
});
const route = require('./routes/route.js')
app.use(cors());

app.use(bodyparser.json());

app.use('/api', route);

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req, res)=>{
    res.send('foobar');
})
app.listen(port,()=>{
    console.log("server started at port "+ port);
})

