let posts = [
    {title:"Post One",body:"This is Post One"},
    {title:"Post Two",body:"This is Post Two"}
];

let user = {
    naam : "Cokaine",
    last_active : "not known"
} 
let activity = {time:"not known"}


const Posting = async ()=>{
    const creation = function createPost(post){
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


    const update = function updateLastUserActivityTime() {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
    
                let k = new Date().toISOString()
                user.last_active = k
                //console.log(k)
                resolve(k)
            }, 1000)
        }) 
    }

    
    const hatadiya = function deletePost(){
        return new Promise((resolve,reject)=>{
            let del = posts.pop()
            resolve(posts)
    
        })
    }
    
    let p1 = {title:"Post Three",body:"This is Post Three",createdAt:""}

    // let newP = await creation(p1)

    // let active_time = await update()

    let [newP,last_active] = await Promise.all([creation(p1),update()])

    
    let f = ()=>{
        for (var i = 0;i < newP.length ; i ++){
            console.log(newP[i].title)
        }
    }
    f()
    console.log("User last active at:",last_active)

    let hatade = await hatadiya()

    console.log(posts)

    
}
Posting()
