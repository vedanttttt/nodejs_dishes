const square = require('./square');
const tri = require('./triangle');
/*
var rect = {
	perimeter: (x,y)=>(2*(x*y)),
	area: (x,y)=> (x*y)
};
*/
/*
var square = {
	area: (x) => (x*x),
	perimeter: (x) => 4*x
};
*/
/*
function solve(l,b){
	console.log('Solving for rectangle with l = ' + l + "and b = " + b);
	if( l <=0 || b<=0)
		console.log('Dimensions should be greater than zero');
	else{
		console.log('area is ' + rect.area(l,b));
		console.log('perimeter is ' + rect.perimeter(l,b));
	}
}
*/  

function find(o){
	console.log("hee haa");

 square(o,(err,square) =>{
 	if(err){
 		console.log('ERROR' + err.message);
 	}
 	else{
     console.log("The area of the square is of o = " + o + "is " + square.area());
     console.log(square.perimeter());
 	}
 });
console.log('This statement is after callback');

}



function hey(m,n){
	console.log("Hee haa");

	tri(m,n,(err,lola) => { 
	if(err)
		console.log('ERROR' + err.message);
	else{
		console.log("Area is = " + lola.area());
		console.log("Perimeter is = "+ lola.perimeter());
	}
});
}

/*
solve(3,5);
solve(6,7);
solve(0,5);
solve(-3,6);
*/
find(6);
find(0);
find(-4);
hey(3,4);
hey(-1,7);