var api = "0c0d890808484d9e9ca1fecdb247873e";

function handleFormSubmit(event) {
  event.preventDefault();

  let order = {
    khana: event.target.dish.value,
    price: event.target.price.value,
    place: event.target.table.value,
  };

  axios
    .post(`https://crudcrud.com/api/${api}/orders`, order)
    .then((res) => {
      // console.log(res.data)
      show(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

var table_map = {
  "Table 1": "one",
  "Table 2": "two",
  "Table 3": "three",
  "Table 4": "four",
  "Table 5": "five",
  "Table 6": "six",
};

function show(obj) {
  const newli = document.createElement("li");
  newli.id = obj._id;

  const string = `${obj.khana} - ${obj.price}`;

  const newlitext = document.createTextNode(string);

  const del_but = document.createElement("button");
  del_but.id = "db";
  del_but.className = "db";
  del_but.style.margin = "10px";
  // del_but.style.backgroundColor = "orangered"
  const del_text = document.createTextNode("❌");

  newli.appendChild(newlitext);
  del_but.appendChild(del_text);
  newli.appendChild(del_but);

  const parent = document.getElementById(table_map[obj.place]);

  parent.appendChild(newli);
}

// getting existing data

let k = axios.get(`https://crudcrud.com/api/${api}/orders`);
k.then((res) => {
  if (res.data) {
    for (var i = 0; i < res.data.length; i++) {
      show(res.data[i]);
    }
  }
}).catch((err) => {
  console.log("No Orders Found");
});

let all = document.getElementById("all_list");

if (all) {
  all.addEventListener("click", function (event) {
    if (event.target.classList.contains("db")) {
      const todel = event.target.parentElement;
      // console.log(todel)
      const todel_id = todel.id;
      // console.log(todel_id)
      todel.remove();

      axios.delete(`https://crudcrud.com/api/${api}/orders/${todel_id}`);
    }
  });
}
