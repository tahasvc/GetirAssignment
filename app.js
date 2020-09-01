const express = require('express');
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const dbmanager = require('./dbmanager').DbManager
const port = 8080
let db = new dbmanager()
app.post('/',function(req,res){
    const model = req.body;
    db.test(model,function(result){
        res.send(result)
    })
})
app.listen(port)