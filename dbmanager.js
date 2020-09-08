const responseModel = require('./Models/ResponseModel');
const ErrorLogger = require('./errorlogger');
class DbManager {
  filterData(model, callback) {
    const MongoClient = require('mongodb').MongoClient;
    const URL = 'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getircase-study?retryWrites=true';

    MongoClient.connect(URL, function (err, db) {
      if (err) throw err;
      var dbo = db.db("getir-case-study");
      dbo.collection("examples").find({
        $and: [{
          createdAt: {
            $gte: new Date(model.startDate),
            $lte: new Date(model.endDate)
          }, totalCount: { $gte: model.minCount, $lte: model.maxCount }
        }]
      }).toArray(function (err, result) {
        if (err) callback(new ErrorLogger(err.errmsg));
        db.close();
        const respModel = new responseModel()
        respModel.fill(result)
        return callback(respModel)
      });
    });
  }
}
module.exports.DbManager = DbManager