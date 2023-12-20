function handleFormSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Collect user details
    const userDetails = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
    };
  
    // Store user details in local storage
    localStorage.clear()
    localStorage.setItem("username", userDetails.username);
    localStorage.setItem("email", userDetails.email);
    localStorage.setItem("phone number", userDetails.phone);
  
  }
  
  // Add an event listener for the form submission
  document.getElementById("parchi").addEventListener("submit", handleFormSubmit);
  
  









// const form = document.getElementById('parchi');

// form.addEventListener('submit',function(event){
//     event.preventDefault();

//     const un = form.un.value;
//     const mail = form.mail.value;
//     const pn = form.pn.value;

//     localStorage.setItem('username', un);
//     localStorage.setItem('email', mail); 
//     localStorage.setItem('phone', pn);

// })

// function handleFormSubmit(event) {
//     event.preventDefault();
//     const name = event.target.name.value;
//     const mail = event.target.email.value;
//     const mob =  event.target.phone.value;

//     localStorage.setItem('username', name);
//     localStorage.setItem('email', mail); 
//     localStorage.setItem('phone', mob);
//   }


// module.exports = handleFormSubmit;



// function handleFormSubmit(event) {
//     event.preventDefault();
//     const username = event.target.name.value;
//     const email = event.target.email.value;
//     const mob =  event.target.phone.value;

//     localStorage.setItem('username', username);
//     localStorage.setItem('email', email); 
//     localStorage.setItem('phone number', mob);
//   }


// module.exports = handleFormSubmit;

