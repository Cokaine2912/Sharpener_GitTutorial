var api = "ddeeb903a713471f96a3c9baea243947";

async function handleFormSubmit(event) {
  event.preventDefault();

  console.log("clicked");

  let order = {
    rate: event.target.price.value,
    khana: event.target.dish.value,
    place: event.target.table.value,
  };

  const push_order = new Promise((resolve, reject) => {
    axios.post(`https://crudcrud.com/api/${api}/orders`, order);
    resolve("Order Pushed");
  });

  let [push_result, display_result] = await Promise.all([
    push_order,
    display(order),
  ]);
}

var table_map = {
  "Table 1": "one",
  "Table 2": "two",
  "Table 3": "three",
  "Table 4": "four",
  "Table 5": "five",
  "Table 6": "six",
};

const display = (obj) =>
  new Promise((resolve, reject) => {
    const newli = document.createElement("li");
    newli.id = obj._id;

    const string = `${obj.khana} - ${obj.rate}`;

    const newlitext = document.createTextNode(string);

    const del_but = document.createElement("button");
    del_but.id = "db";
    del_but.className = "db";
    del_but.style.margin = "10px";

    const del_text = document.createTextNode("❌");

    newli.appendChild(newlitext);
    del_but.appendChild(del_text);
    newli.appendChild(del_but);

    const parent = document.getElementById(table_map[obj.place]);

    parent.appendChild(newli);
    resolve("Order Displayed");
  });

// getting existing data

let k = axios.get(`https://crudcrud.com/api/${api}/orders`);
k.then((res) => {
  if (res.data) {
    for (var i = 0; i < res.data.length; i++) {
      display(res.data[i]);
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
