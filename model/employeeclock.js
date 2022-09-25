const mongoose = require("mongoose")

const schema = mongoose.Schema({
	employeeID: String,
	isCheckOut: Boolean,
    currentTime: String

})

module.exports = mongoose.model("EmployeeClock", schema)