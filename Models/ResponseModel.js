const recordModel = require('./RecordModel')
const msg = require('../constants/constants')
function ResponseModel() {
    this.code
    this.msg = ""
    this.records = []
}
ResponseModel.prototype.fill = function (newFields) {
    if (newFields.length >= 1) {
        this.code = msg.success
        this.msg = "success"
        newFields.forEach(element => {
            this.records.push(new recordModel(element.key, element.createdAt, element.totalCount))
        });
    } else if (newFields.length == 0) {
        this.code = msg.noData
        this.msg = "no data"
    }

}

module.exports = ResponseModel