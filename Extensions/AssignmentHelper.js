const { calculateObjectSize } = require("bson");

class AssignmentHelper {
    static getObjectKey(obj, ind) {
        return Object.keys(obj)[ind]
    }
}

module.exports = AssignmentHelper