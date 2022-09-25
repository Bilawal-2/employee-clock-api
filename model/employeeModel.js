const mongoose = require("mongoose")

const schema = mongoose.Schema({

	employeeName: String,
    employeeEmail: String

})

module.exports = mongoose.model("Employee", schema)