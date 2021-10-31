//let func = "function (a, b) { return a + b; }".parseFunction();

let func1 = new Function("return " + "function (a, b) { return a + b; }")();
console.log(func1(3,7));

let func2 = new Function("a", "b", "return a + b;");
console.log(func2(7,7));

let functionTextareaResult = document;