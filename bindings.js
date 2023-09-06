let total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}
console.log(factorial(8));

let mood = "light";
console.log(mood);
mood = "dark";
console.log(mood);

let luigiDebt = 140;
luigiDebt = luigiDebt - 35;
console.log(luigiDebt);

let rexBc;
console.log(rexBc);

let one = 1,
  two = 2;
console.log(two - one);

var name = "Rexford";
const greeting = "Hi ";
console.log(greeting + name);

let num = 0;
while (num <= 50) {
  console.log(num);
  num = num + 5;
}

let result = 1;
let counter = 0;

while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
if (false != true) {
  console.log("That makes sense.");
  if (1 < 2) {
    console.log("No surprise there.");
  }
}
//For Loop

let num1;
for (let num1 = 0; num1 <= 50; num1 = num1 + 5) {
  console.log(num1);
}

let result1 = 1;
for (let counter = 0; counter < 10; counter++) {
  result1 = result1 * 2;
}
console.log(result);

for (num = 20; ; num++) {
  if (num % 7 == 0) {
    console.log(num);
    break;
  }
}

//   CPT 2: EXERCISE 1
for (let line = "#"; line.length < 8; line += "#") {
  console.log(line);
}

//  CPT 2: EXERCISE 2

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) {
    output += "Fizz";
  }
  if (n % 5 == 0) {
    output += "Buzz";
  }

  console.log(output || n);
}

//CPT 2: EXERCISE 3

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
