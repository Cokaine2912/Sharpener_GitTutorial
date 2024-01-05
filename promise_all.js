let posts = [
    {title:"Post One",body:"This is Post One"},
    {title:"Post Two",body:"This is Post Two"}
];

let activity = [{time:"not known"},{time:"not known"}]

function getPosts(){
    setTimeout(()=>{
        let output = "";
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000)
}

function craetePost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let k = new Date().toISOString();
            activity.push({time:k})
            posts.push(post);

            const error = false;

        if (!error){
            resolve(post.createdAt);
        }
        else {
            reject('Error')
        }
        },2000)
    })
}

let t = {title:"Post Three",body:"This is Post Three"}




function updateLastUserActivityTime() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            let op = activity;
            document.body.innerHTML = op;;
            resolve()
        }, 1000)
    }) 
}

craetePost(t).then(getPosts).then(console.log(activity))

