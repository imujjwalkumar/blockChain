const rateLimit = require("express-rate-limit");
const express=require('express')
const app=express()

const a=[{name:"ujjwal",rollno:25},
		{name:"kumar",rollno:26}
	]
const limiter=rateLimit({
	max:4,
	windowsMs:10000
})
app.get('/limit',limiter,(req,res)=>{
	res.send({
		status:"success",
		a
	})
})

app.listen(3000,()=>{
	console.log('server is runing')
})

