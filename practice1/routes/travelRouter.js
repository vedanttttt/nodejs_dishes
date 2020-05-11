const express = require('express');
const bodyParser = require('body-parser');

const travelRouter = express.Router();

travelRouter.route('/')
.get((req,res,next)=>{
  res.end('Will return the details of the travels to you');
});

travelRouter.route('/:travelId')
.get((req,res,next)=>{
	res.end('Will return the details of the travel: ' + req.params.travelId + 'to you.');
})

module.exports = travelRouter;