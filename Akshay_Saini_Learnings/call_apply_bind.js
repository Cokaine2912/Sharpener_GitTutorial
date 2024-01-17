let naam = {
  firstname: "Jos",
  lastname: "Meredith",
  age: 23,
  printfullname: function () {
    console.log(`${this.firstname} ${this.lastname}`);
  },
};

naam.printfullname();

let naam2 = {
  firstname: "Bob",
  lastname: "Vanced",
  age: 45,
};
// Function Borrowing
function get_age(company, city) {
  console.log(
    `${this.firstname} ${this.lastname} ${this.age} is at ${company} in ${city}`
  );
}

naam.printfullname.call(naam2);

get_age.call(naam);

get_age.call(naam2, "Vanced Refigeration", "LA");

get_age.apply(naam, ["Surrey Cricket", "London"]);

let combo = get_age.bind(naam);

combo("Essex", "Birmingham");
