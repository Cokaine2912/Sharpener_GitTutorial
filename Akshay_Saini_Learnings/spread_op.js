const a = [1, 2, 3, 4, 5, 6];

const b = [...a];

b[0] = 100;
console.log(a);
console.log(b);
