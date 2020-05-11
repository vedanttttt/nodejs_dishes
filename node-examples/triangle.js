module.exports = (x,y,callback) =>{
      if(x <=0 || y<=0){
      	setTimeout(() =>
      		callback(new Error("Error he yaar"),
      			null),
                2000);
      	
      }
      else{
      	setTimeout(() =>
      		callback(null,{
      			area: (x,y) => (x+y),
      			perimeter: (x,y) => (x*y)
      		}),
      		2000);

      }
}