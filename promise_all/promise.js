let posts = [
    {title:"Post One",body:"This is Post One"},
    {title:"Post Two",body:"This is Post Two"}
];

let user = {
    naam : "Cokaine",
    last_active : "not known"
} 
let activity = {time:"not known"}

function getPosts(){
    setTimeout(()=>{
        let output = "";
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000)
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            post.createdAt = new Date().toISOString();
            
            posts.push(post);

            const error = false;

        if (!error){
            resolve(posts);
        }
        else {
            reject('Error')
        }
        },2000)
    })
}

let p1 = {title:"Post Three",body:"This is Post Three",createdAt:""}
let p2 = {title:"Post Four",body:"This is Post Four",createdAt:""}
//craetePost(p1).then(console.log(posts))


function updateLastUserActivityTime() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {

            let k = new Date().toISOString()
            user.last_active = k
            resolve(k)
        }, 1000)
    }) 
}


function deletePost(){
    return new Promise((resolve,reject)=>{
        let del = posts.pop()
        resolve(posts)

    })
}


let prom1 = createPost(p1)

let prom2 = updateLastUserActivityTime()

Promise.all([prom1,prom2]).then((values)=> {
    
    for (var i = 0;i < values[0].length;i++){
        console.log(values[0][i].body)
    }
    console.log(`User Last Active at : ${values[1]}`)
  
}).then(()=>{
    deletePost().then((val)=>{
        for (var j = 0 ; j < val.length ; j++){
            console.log(val[j].body)
        }
    })
})





