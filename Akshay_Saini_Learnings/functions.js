// Function Statements or Function Declaration

function abc() {
  console.log("How you doinn.. ?");
}

// Fucntion Expression

let k = function () {
  console.log("Expression");
};

// Anonymouns Function

function outer(param) {
  console.log(param());
}

let k2 = outer(function () {
  console.log("The Anonymous Guy !");
  return "NO Return";
});
