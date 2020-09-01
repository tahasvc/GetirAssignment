const recordModel = require('./RecordModel')
function ResponseModel() {
    this.code
    this.msg = ""
    this.records = []
}
ResponseModel.prototype.fill = function (newFields) {
    if (newFields.length > 1) {
        this.code = 0
        this.msg = "success"
        newFields.forEach(element => {
         this.records.push(new recordModel(element.key,element.createdAt,element.totalCount)) 
        });
    }

}
module.exports = ResponseModel

ResponseModel.inheritance = new ResponseModel()