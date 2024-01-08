function handleFormSubmit(event) {
    event.preventDefault();

    let myobj = {
        username : event.target.username.value,
        email : event.target.email.value,
        phone : event.target.phone.value};

    //console.log(myobj);

    let myobj_serial = JSON.stringify(myobj);
    
    //console.log(myobj_serial);
    localStorage.setItem(myobj.email,myobj_serial)


    // Using Axios

    axios.post("https://crudcrud.com/api/73e0bfe18f844554974060614b4f53e1/appointments",myobj)
    .then((res)=>{
        //console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
    
    
    const string = `${myobj.username}-${myobj.email}-${myobj.phone}`
    // console.log(string)

    const newli = document.createElement('li');
     
    const del_but = document.createElement('button');
    del_but.id = "db"
    del_but.className = "db"
    del_but.style.margin = "2px"
    del_but.style.backgroundColor = "orangered"
    const del_text = document.createTextNode('Delete');

    // EDIT Button

    const edit_but = document.createElement('button');
    edit_but.id = "eb";
    edit_but.className = "eb";
    const edit_text = document.createTextNode("Edit")




    del_but.appendChild(del_text) ;
    edit_but.appendChild(edit_text);


    const newlitext = document.createTextNode(string);
    newli.appendChild(newlitext);
    newli.appendChild(del_but);
    newli.appendChild(edit_but);
    // console.log(newli)

    const list = document.querySelector("ul")
    list.appendChild(newli)
    
    //console.log(list)

    const temp = document.querySelector('ul') ;
    //console.log(temp)

  }


const listings = document.querySelector('ul')


function show(ob){ 
    const string = `${ob.username}-${ob.email}-${ob.phone}`
    // console.log(string)

    const newli = document.createElement('li');
     
    const del_but = document.createElement('button');
    del_but.id = "db"
    del_but.className = "db"
    del_but.style.margin = "2px"
    del_but.style.backgroundColor = "orangered"
    const del_text = document.createTextNode('Delete');

    // EDIT Button

    const edit_but = document.createElement('button');
    edit_but.id = "eb";
    edit_but.className = "eb";
    const edit_text = document.createTextNode("Edit")




    del_but.appendChild(del_text) ;
    edit_but.appendChild(edit_text);


    const newlitext = document.createTextNode(string);
    newli.appendChild(newlitext);
    newli.appendChild(del_but);
    newli.appendChild(edit_but);
    // console.log(newli)

    const list = document.querySelector("ul")
    list.appendChild(newli)
}


// getting data

let k = axios.get("https://crudcrud.com/api/73e0bfe18f844554974060614b4f53e1/appointments")
k.then(res =>{
    if (res.data){
        //console.log("there is !")
        for (var i = 0 ; i < res.data.length ; i++){
            show(res.data[i])
        }
    }
})


if (listings){

listings.addEventListener('click',function(event){
    if(event.target.classList.contains('db')){
        const todel = event.target.parentElement;
         
        const text = todel.textContent
        const email = text.split("-")[1].trim();
        listings.removeChild(todel);
        //localStorage.removeItem(email)

        const emailToFind = email;

        axios.get("https://crudcrud.com/api/73e0bfe18f844554974060614b4f53e1/appointments")
        .then(res=>{
            for (var i = 0;i < res.data.length;i ++){
                if (res.data[i].email === emailToFind){
                    const ID = res.data[i]._id
                    axios.delete(`https://crudcrud.com/api/73e0bfe18f844554974060614b4f53e1/appointments/${ID}`)
                }
            }
        })
        

        //const filteredAppointments = data.filter(appointment => appointment.email === emailToFind);


     }

     if(event.target.classList.contains('eb')){
        const toedit = event.target.parentElement;
        const text = toedit.textContent
        const email = text.split("-")[1].trim();
        const username = text.split("-")[0].trim();
        const phone = text.split("-")[2].trim();
        // console.log(email)
        // console.log(username)
        const only_phone = phone.split("Delete")[0]
        //console.log(only_phone)
        listings.removeChild(toedit);
        // localStorage.removeItem(email)


        const emailToFind = email;

        axios.get("https://crudcrud.com/api/73e0bfe18f844554974060614b4f53e1/appointments")
        .then(res=>{
            for (var i = 0;i < res.data.length;i ++){
                if (res.data[i].email === emailToFind){
                    const ID = res.data[i]._id
                    const username = res.data[i].username;
                    const email = res.data[i].email
                    const only_phone = res.data[i].phone
                    axios.delete(`https://crudcrud.com/api/73e0bfe18f844554974060614b4f53e1/appointments/${ID}`)
                    const naam = document.getElementById('username')
                    const dur = document.getElementById('phone')
                    const patta = document.getElementById('email')
                    naam.value = username ;
                    dur.value = only_phone;
                    patta.value = email
                }
            }
        })









        // const naam = document.getElementById('username')
        // const dur = document.getElementById('phone')
        // const patta = document.getElementById('email')
        // naam.value = username ;
        // dur.value = only_phone;
        // patta.value = email
        // console.log(naam)


     } 
 })
}