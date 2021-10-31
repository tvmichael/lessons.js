let functionTextareaResult = document.getElementById('functionTextareaResult');
let functionTextarea = document.getElementById('functionTextarea');

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