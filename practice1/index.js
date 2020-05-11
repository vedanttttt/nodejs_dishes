const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const travelRouter = require('./routes/travelRouter');
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

const hostname='localhost';
const port= 3000;

/*
app.all('/travels',(req,res,next)=>{
   res.statusCode=200;
	res.setHeader('Content-Type','text/html');
	res.end('<html><body><h1>This is an  server</h1></body></html>');
});
app.get('/travels',(req,res,next)=>{
  res.end('Will return the details of the dishes to you');
})
*/

app.use('/travels',travelRouter);
app.use((req,res,next)=>{
	//console.log('Connected to server by method: ' + req.method + 'url is: ' + req.url);
		res.statusCode=200;
	res.setHeader('Content-Type','text/html');
	res.end('<html><body><h1>This is an  server</h1></body></html>');
});
const server = http.createServer(app);
	
server.listen(port,hostname,()=>{
	console.log(`Server connected to http://${hostname}:${port}`);
})