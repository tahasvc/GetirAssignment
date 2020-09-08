const express = require('express');
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const dbmanager = require('./dbmanager').DbManager
const errorLogger = require('./errorlogger')
const port = 80
let db = new dbmanager()
app.post('/', function (req, res) {
    try {
        const model = req.body;
        db.filterData(model, function (result) {
            res.send(result)
        })
    } catch (error) {
        res.send(new errorLogger(error))
    }
})

app.listen(process.env.PORT || port)

module.exports = app