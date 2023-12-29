function updateList() {
    const list = document.querySelector("ul");
    list.innerHTML = ""; // Clear the existing list

    // Iterate through local storage and recreate the list items
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const storedItem = JSON.parse(localStorage.getItem(key));

        const string = `${storedItem.amt}-${storedItem.desc}-${storedItem.cat}`;
        
        const newli = document.createElement('li');

        const del_but = document.createElement('button');
        del_but.id = "db";
        del_but.className = "db";
        del_but.style.marginLeft = "5px";
        del_but.style.marginRight = "5px";
        const del_text = document.createTextNode('Delete Expense');

        const edit_but = document.createElement('button');
        edit_but.id = "eb";
        edit_but.className = "eb";
        const edit_text = document.createTextNode("Edit Expense");

        del_but.appendChild(del_text);
        edit_but.appendChild(edit_text);
        const b = document.createElement('br')
        const newlitext = document.createTextNode(string);
        newli.appendChild(newlitext);
        newli.appendChild(del_but);
        //newli.appendChild(b)
        newli.appendChild(edit_but);

        list.appendChild(newli);
        list.appendChild(b)
    }
}

updateList()


/////////////////////////////////////////////////////////////












function handleFormSubmit(event) {
    event.preventDefault();

 
    let myobj = {
        amt : event.target.Amount.value,
        desc : event.target.Description.value,
        cat : event.target.Category.value};

    console.log(myobj);

    let myobj_serial = JSON.stringify(myobj);
    
    //console.log(myobj_serial);
    localStorage.setItem(myobj.desc,myobj_serial)
    
    
    const string = `${myobj.amt}-${myobj.desc}-${myobj.cat}`
    // console.log(string)

    const newli = document.createElement('li');
     
    const del_but = document.createElement('button');
    del_but.id = "db"
    del_but.className = "db"
    del_but.style.marginLeft = "5px"
    del_but.style.marginRight = "5px"
    const del_text = document.createTextNode('Delete Expense');

    // EDIT Button

    const edit_but = document.createElement('button');
    edit_but.id = "eb";
    edit_but.className = "eb";
    const edit_text = document.createTextNode("Edit Expense")




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

//module.exports = handleFormSubmit ;

const listings = document.querySelector('ul')

if (listings){

listings.addEventListener('click',function(event){
    if(event.target.classList.contains('db')){
        const todel = event.target.parentElement;
         
        const text = todel.textContent
        const desc = text.split("-")[1].trim();
        listings.removeChild(todel);
        localStorage.removeItem(desc)
     }

     if(event.target.classList.contains('eb')){
        const toedit = event.target.parentElement;
        const text = toedit.textContent
        const desc = text.split("-")[1].trim();
        const amt = text.split("-")[0].trim();
        const cat = text.split("-")[2].trim();
        // console.log(desc)
        // console.log(amt)
        const only_phone = cat.split("Delete")[0]
        //console.log(only_phone)
        listings.removeChild(toedit);
        localStorage.removeItem(desc)

        const a = document.getElementById('Amount')
        const c = document.getElementById('Category')
        const d = document.getElementById('Description')
        a.value = amt ;
        c.value = only_phone;
        d.value = desc
        // console.log(naam)


     } 
 })
}
// module.exports = handleFormSubmit ;