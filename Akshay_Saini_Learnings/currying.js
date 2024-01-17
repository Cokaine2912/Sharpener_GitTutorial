let multiply = function (x, y) {
  console.log(x * y);
};

let x2 = multiply.bind(this, 2);

x2(4);

// Using Closure

let mul = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multi2 = mul(2);

multi2(7);
