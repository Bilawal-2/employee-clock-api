var express = require('express');
var router = express.Router();
var EmployeeClock = require('./../model/employeeclock')
var EmployeeModel = require('./../model/employeeModel')

/* GET employee listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',(req,res)=>{
 
  const employeeClock = new EmployeeClock({
		employeeID: req.body.employeeID,
		isCheckOut: req.body.isCheckOut,
    	currentTime: req.body.currentTime
	})
	employeeClock.save()
	res.send({empCheck:employeeClock})
})

router.post('/login',(req,res)=>{
 
  EmployeeClock.findOne({ employeeID: req.body.employeeID }).sort({ field: 'asc', _id: -1 }).exec((err, _employee) =>{
	console.log()
	console.log(req.body.employeeID)  
	console.log(_employee)  
	if(_employee==null){
		
		res.send({employee:{
			employeeID: req.body.employeeID,
			isCheckOut: true,
			currentTime: "No entry."
		}})	
	} else {
		res.send({employee:_employee})
	}
  });
	
})

router.post('/registration',(req,res)=>{
 

	EmployeeModel.findOne({ employeeEmail: req.body.employeeEmail }).exec((err, _employee) =>{
		
		if(_employee==null){
			
			const employeeModel = new EmployeeModel({
				employeeName: req.body.employeeName,
				employeeEmail: req.body.employeeEmail
			})
			employeeModel.save()
			
			console.log("Rs: ",_employee);
			res.send({employee:{hasUser:false}})
		
		} else {
			console.log("employee",_employee)
			res.send({employee:{hasUser:true}})
		}
  	});
})

module.exports = router;
