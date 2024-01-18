function show(param) {
  console.log(param);
}

show("Q1");

// function x() {
//   let a = 10;

//   function y() {
//     console.log(a);
//   }

//   y();

// x();

show("Q2");

// function x() {
//   let a = 10;

//   function y() {
//     return a;
//   }

//   console.log(y());
// }

// x();

show("Q3");

// function x() {
//   let a = 10;

//   function y() {
//     console.log(a);
//   }

//   return y;
// }

// console.log(x());

show("Q4");

// function x() {
//   let a = 10;

//   function y() {
//     console.log(a);
//   }

//   return y;
// }

// const z = x(); // z = y will come here

// console.log(z());

show("Q5");

// function x() {
//   let a = 10;

//   function y() {
//     console.log(a);
//   }

//   a = 50;

//   return y;
// }

// const z = x();

// console.log(z());

show("Advance Closures");

show("Q1");
// function y() {
//   setTimeout(() => console.log("a form Timer"), 1000);

//   console.log("Done Coding");
// }

// y();

show("Q2");

// function y2() {
//   setTimeout(() => console.log("a from => Timer"), 0);
//   console.log("Done Coding");
// }
// y2();

show("Q5");

const fun = (arr) => {
  var pointer = 0;
  return function () {
    console.log("Hello", arr[pointer]);
    pointer++;
  };
};

let naam = fun(["Ram", "Shyam"]);

naam(); // Print Hello Ram

naam(); //print Hello Shyam
