const responseModel = require('./Models/ResponseModel').inheritance
const msg = require('./Constants/constants')
class ErrorLogger extends Error {
    constructor(args) {
        super(args)
        responseModel.msg = args
        responseModel.code = msg.applicationError
        
        return responseModel
    }
}
module.exports = ErrorLogger