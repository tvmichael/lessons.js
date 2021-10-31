// let func1 = new Function("return " + "function (a, b) { return a + b; }")();
// console.log(func1(3,7));
// let func2 = new Function("a", "b", "return a + b;");
// console.log(func2(7,7));

let functionTextareaResult = document.getElementById('functionTextareaResult');
let functionTextarea = document.getElementById('functionTextarea');

console.log(functionTextarea);
console.log(functionTextareaResult);

function runTextFunction(tfun){
	let n = 100;
	let p = document.createElement('p');

	let f = new Function('a, b', tfun);

	return f(n, p);
};

functionTextarea.addEventListener('keyup', function(){
	try {
		let v =  functionTextarea.value;		
		console.log(v);
		
		runTextFunction(functionTextarea.value);
	} catch(e) {		
		console.log(e);
	}
});