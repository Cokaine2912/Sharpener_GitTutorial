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

    let [new_posts,active_time] = await Promise.all([creation,update])
    console.log(new_posts,active_time)

    return posts

}
Posting().then((m)=>{
    console.log(m)
})

