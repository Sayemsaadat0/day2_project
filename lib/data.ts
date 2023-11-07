// lets declare the type of the data post has 

type Post = {
    id : string 
    title : string
    desc : string
}

// its a post storage with empty array 
let posts: Post[] = []; 



// getting the data
export const getPosts = () => posts;  


// post methods 
export const addPosts  = (post : Post) => {
    posts.push(post);
}



// deleting the post
export const deletePost = (id : string) => {
    posts = posts.filter((post) => post.id !== id)
}



// updating the posts 
export const updatePost = (id : string , title : string , desc : string) => {
   const post = posts.find((post)=> post.id === id )
   if (post) {
    post.title = title  
    post.desc = desc
   } 
   else {
    throw new Error('no post  exist')
   }
}

// getting the pposts by the individual id 
export const getByID = (id: string) => {
    return posts.find((post)=> post.id === id )
}