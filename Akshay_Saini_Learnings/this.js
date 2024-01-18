var a = 10;

var b = 20;
// Block Scope
{
  var a = 100;
  console.log(a);
}
console.log;
console.log(a);

// Function Scope

function abc() {
  let a = 500;
  console.log(a);
}
abc();
console.log(`Baher ${a}`);

// Temporal Dead Zone

let x = 69;

// let and const in block scope

{
  let z = 9;
  const y = 6;
  var g = 99;
}
console.log(g);
// console.log(z);

// iterating through objects

myobj = {
  naam: "naam me kya rakha hai !",
  umar: "hum nahi ginte",
};

let f = Object.keys(myobj);

f.forEach((item) => {
  console.log(item);
});

let time = 5;

setTimeout(() => {
  console.log("Timer Over !! " + time);
}, 5000);

// gone wrong Question

var arr = [1, 2, 3, 5];

var newArr = arr.forEach((item, i) => {
  console.log(item + "index" + i);

  return item + i;
});

console.log(newArr);

// Closures

function f1() {
  let var_f1 = 89;

  return function f2() {
    console.log(var_f1);
    return function f3() {
      console.log("From f3", var_f1);
    };
  };
}

let k1 = f1();
let k2 = k1();
k2();

// Array.map

var arr = [1, 2, 3, 5];

var newArr = arr.map((item, i) => {
  console.log(item + "index" + i);

  return item + i;
});

console.log(newArr);

// Block Scope Question

// (THINK SMARTLY BEFORE ANSWERING THIS)

var a = 50;

function fun() {
  var a = 30;

  let b = 20;

  let c = 30;
}

fun();

console.log(a);
