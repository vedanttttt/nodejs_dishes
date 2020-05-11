const http = require('http');


const port = 3000;
const hostname = 'localhost';

const server = http.createServer((req,res) =>{
	console.log(req.headers);

	res.setHeader('Content-Type','Text/html');
	res.StatusCode = 200;
	res.end('<html><body><h1>hello underworld</h1></body></html>');
})

server.listen(port,hostname,()=>{
	console.log(`Server running at http://${hostname}:${port}`);
})