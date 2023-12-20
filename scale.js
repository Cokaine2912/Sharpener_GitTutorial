function handleFormSubmit(event) {
    event.preventDefault();

    // console.log(event.target.username.value);
    // console.log(event.target.email.value)
    // console.log(event.target.phone.value)
    let myobj = {
        username : event.target.username.value,
        email : event.target.email.value,
        phone : event.target.phone.value};

    //console.log(myobj);

    let myobj_serial = JSON.stringify(myobj);
    
    //console.log(myobj_serial);
    localStorage.setItem(myobj.email,myobj_serial)
    console.log(localStorage.getItem("User Details"))
    
    const string = `${myobj.username} - ${myobj.email} - ${myobj.phone}`
    // console.log(string)

    const newli = document.createElement('li');
     

    const newlitext = document.createTextNode(string);
    newli.appendChild(newlitext);
    // console.log(newli)

    const list = document.querySelector("ul")
    list.appendChild(newli)

    //console.log(list)

  }

//module.exports = handleFormSubmit ;