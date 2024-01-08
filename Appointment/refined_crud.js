var api = "b462cad674824ba1a555b4cc0ddf8f67"

function handleFormSubmit(event) {
    event.preventDefault();

    let myobj = {
        username : event.target.username.value,
        email : event.target.email.value,
        phone : event.target.phone.value};

    

    let myobj_serial = JSON.stringify(myobj);
    
    
    localStorage.setItem(myobj.email,myobj_serial)


    // Using Axios

    axios.post(`https://crudcrud.com/api/${api}/appointments`,myobj)
    .then((res)=>{
        
        show(res.data)
        
    })
    .catch((err)=>{
        console.log(err)
    })
    
  }


const listings = document.querySelector('ul')


function show(ob){ 
    const string = `${ob.username}-${ob.email}-${ob.phone}`
   

    const newli = document.createElement('li');

    newli.id = ob._id
     
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


// getting existing data 

let k = axios.get(`https://crudcrud.com/api/${api}/appointments`)
k.then(res =>{
    if (res.data){
        
        for (var i = 0 ; i < res.data.length ; i++){
            show(res.data[i])
        }
    }
})


// axios.put(`https://crudcrud.com/api/${api}/appointments/659b9a5114086703e8ccfad7`,{
// username : "changed bot",
// email : "mail@mail.com",
// phone : "6285709582"
// })

if (listings){

listings.addEventListener('click',function(event){
    if(event.target.classList.contains('db')){
        const todel = event.target.parentElement;
        // console.log(todel) 
        const todel_id = todel.id
        // console.log("This is to del ID",todel_id)
        const text = todel.textContent
        const email = text.split("-")[1].trim();
        listings.removeChild(todel);
        //localStorage.removeItem(email)

        axios.delete(`https://crudcrud.com/api/${api}/appointments/${todel_id}`)

        

     }

     if(event.target.classList.contains('eb')){
        const toedit = event.target.parentElement;
        const edit_id = toedit.id
        // console.log(edit_id)
        
        listings.removeChild(toedit);
        
        axios.get(`https://crudcrud.com/api/${api}/appointments/${edit_id}`).then(res=>{

            const username = res.data.username;
            const email = res.data.email;
            const phone = res.data.phone;

            const naam = document.getElementById('username')
            const dur = document.getElementById('phone')
            const patta = document.getElementById('email')
            naam.value = username ;
            dur.value = phone;
            patta.value = email

        })
        
        axios.delete(`https://crudcrud.com/api/${api}/appointments/${edit_id}`)


        
     } 
 })
}