const square = function(x){
  return x* x;
}
console.log(square(10));

const power= function(base, exponent){
 result = base ** exponent;
 return result;
}
console.log(power(2,10));

const power1 = function (base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
console.log(power1(2, 10));

const halve = function(n) {
return n / 2;
};
let n = 10;
console.log(n);
console.log(halve(100));

function power2(base, exponent){
  result= base ** exponent;
  return result;
}
console.log(power2(2, 10)) 

// ARROW FUNCTION
const square1 = (x) =>{
  return x * x;
}
console.log(square1(10))

const power3 = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
console.log(power3(2,10));

function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

// Closure
function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap = wrapValue(1);

console.log(wrap()); 


function findSolution(target) {
function find(current, history) {
if (current == target) {
return history;
} else if (current > target) {
return null;
} else {
return find(current + 5, `(${history} + 5)`) ||
find(current * 3, `(${history} * 3)`);
}
}
77
return find(1, "1");
}
console.log(findSolution(8)); 



// Declare the myGlobal variable below this line
let myGlobal=10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal =5;

}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}