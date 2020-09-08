const responseModel = require('./Models/ResponseModel');
const ErrorLogger = require('./errorlogger');
class DbManager {
  filterData(model, callback) {
    const MongoClient = require('mongodb').MongoClient;
    const URL = 'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getircase-study?retryWrites=true';

    MongoClient.connect(URL, function (err, db) {
      if (err) throw err;
      var dbo = db.db("getir-case-study");
      dbo.collection("records").find().toArray(function (err, result) {
        if (err) callback(new ErrorLogger(err.errmsg));
        db.close();
        var resultData=[];
        const respModel = new responseModel()
        result.forEach(function(element,index){
          const sum = element.counts.reduce(function(a,b){return a+b;},0)
          if((model.minCount<=sum && model.maxCount>=sum) && (new Date(model.startDate) <= element.createdAt && new Date(model.endDate) >= element.createdAt)){
            result[index].totalCount = sum
            resultData.push(result[index])
          }
        });
        respModel.fill(resultData)
        return callback(respModel)
      });
    });
  }
}
module.exports.DbManager = DbManager