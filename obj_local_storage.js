const form = document.querySelector('form');

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
    localStorage.setItem("myobj",myobj)
    let myobj_serial = JSON.stringify(myobj);
    
    //console.log(myobj_serial);

    localStorage.setItem("myobj",myobj_serial);
    
  }

