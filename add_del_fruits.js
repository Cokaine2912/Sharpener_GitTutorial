const form = document.querySelector("form");

const fruits = document.querySelector(".fruits");

form.addEventListener('submit',function(event){
    event.preventDefault();

    const toadd = document.getElementById("fruit-to-add");

    const newli = document.createElement('li');
    const newliText = document.createTextNode(toadd.value);

    newli.appendChild(newliText);
    newli.className = "fruit"

    const delbtn = document.createElement('button');
    const delbtnText = document.createTextNode('x');

    delbtn.appendChild(delbtnText);
    delbtn.className = 'delete-btn'

    const editbtn = document.createElement('button');
    const editbtnText = document.createTextNode('Edit');

    editbtn.appendChild(editbtnText);
    editbtn.className = "edit-btn";

    newli.appendChild(delbtn);
    newli.appendChild(editbtn);

    fruits.appendChild(newli)

})



fruits.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
        const todel = event.target.parentElement;
        fruits.removeChild(todel);
    }
})