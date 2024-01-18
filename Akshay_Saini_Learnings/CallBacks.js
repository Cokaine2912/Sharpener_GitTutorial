// setTimeout(() => console.log("timer expired"), 1000);

// function x(y) {
//   console.log("inside x");

//   y();
// }

// x(function y() {
//   console.log("inside y");
// });

// setTimeout(() => console.log("timer1 expired"), 1000); // 4th

// setTimeout(() => console.log("timer2 expired"), 0); // 3rd

// function x(y) {
//   console.log("inside x"); // 1st

//   y();
// }

// x(function y() {
//   console.log("inside y"); // 2nd
// });

var student = function (name) {
  this.name = name;

  function printName() {
    console.log(this.name);
  }

  printName();
};

var yash = new student("yash");
