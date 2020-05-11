module.exports= (x,callback) => {
	if(x<0){
		setTimeout(() =>
			callback(new Error('Error bro,dimension should be not be <=0'),
				null),
			2000);
		
	}
	else{
	setTimeout(() =>
			callback(null,
				{
					perimeter: (x) => (4*x),
                     area: (x) => (x*x)
				}),
			2000);
	}
}







