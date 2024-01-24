var api = "7b865d3bdbb54053a6f4e7b94bd3b4a1";

// Fetching Existing Data

function fetch_data() {
  axios
    .get(`https://crudcrud.com/api/${api}/orders`)
    .then((res) => {
      for (var i = 0; i < res.data.length; i++) {
        display(res.data[i]);
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

fetch_data();

// Form Submission

async function handleFormSubmit(event) {
  event.preventDefault();

  let order = {
    khana: event.target.dish.value,
    price: event.target.price.value,
    place: event.target.table.value,
  };

  // console.log(order);

  let send_data = new Promise((resolve, reject) => {
    axios.post(`https://crudcrud.com/api/${api}/orders`, order).then((res) => {
      resolve(res.data);
    });
  });

  let posting;
  try {
    posting = await send_data;

    display(posting);

    console.log("New Order Added to Data Base and Displayed on the Webpage");
  } catch (err) {
    posting = err;
    console.error(posting);
  }
}

// Display Function

let table_map = {
  "Table 1": "one",
  "Table 2": "two",
  "Table 3": "three",
  "Table 4": "four",
  "Table 5": "five",
  "Table 6": "six",
};

function display(obj) {
  let newli = document.createElement("li");
  newli.id = obj._id;
  let string = `${obj.khana} - ${obj.price}`;
  let newlitext = document.createTextNode(string);

  let del_but = document.createElement("button");
  let del_text = document.createTextNode("❌");
  del_but.className = "db";
  del_but.style.margin = "20px";
  del_but.appendChild(del_text);

  newli.appendChild(newlitext);

  newli.appendChild(del_but);

  let parent_ul = document.getElementById(table_map[obj.place]);

  parent_ul.appendChild(newli);
}

// Delete Functionality

let all = document.getElementById("all_list");

if (all) {
  all.addEventListener("click", function (event) {
    if (event.target.classList.contains("db")) {
      const todel = event.target.parentElement;
      const todel_id = todel.id;
      let remove_listing = new Promise((resolve, reject) => {
        todel.remove();
        resolve("Removed from Webpage");
      });

      let remove_database = new Promise((resolve, reject) => {
        axios.delete(`https://crudcrud.com/api/${api}/orders/${todel_id}`);
        resolve("Deleted from DataBase");
      });

      Promise.all([remove_listing, remove_database])
        .then((values) => {
          console.log(values[0], "&", values[1]);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  });
}
