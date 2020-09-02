const recordModel = require('./RecordModel')
const msg = require('../Constants/constants')
const AssignmentHelper = require('../Extensions/AssignmentHelper')
function ResponseModel() {
    this.code
    this.msg = ""
    this.records = []
}
ResponseModel.prototype.fill = function (newFields) {
    if (newFields.length > 1) {
        this.code = msg.success
        this.msg = AssignmentHelper.getObjectKey(msg,msg.success)
        newFields.forEach(element => {
         this.records.push(new recordModel(element.key,element.createdAt,element.totalCount)) 
        });
    }

}
module.exports = ResponseModel

ResponseModel.inheritance = new ResponseModel()