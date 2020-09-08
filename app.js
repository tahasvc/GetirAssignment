const express = require('express');
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const dbmanager = require('./dbmanager').DbManager
const errorLogger = require('./errorlogger')
var port = process.env.PORT || 8000;
app.set("port",port)
let db = new dbmanager()
app.post('/', function (req, res) {
    res.send("test")
    // try {
    //     const model = req.body;
    //     db.filterData(model, function (result) {
    //         res.send(result)
    //     })
    // } catch (error) {
    //     res.send(new errorLogger(error))
    // }
})

app.listen(port)

module.exports = app