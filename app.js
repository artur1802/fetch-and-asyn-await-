

const getNombre = (idPost) =>{
    fetch(`https://jsonplaceholder.typicode.com/todos/${idPost}`)
   .then(res => res.json())
    .then(post => {console.log(post.id)
  fetch(`https://jsonplaceholder.typicode.com/todos/${post.id}`)
    .then( res =>  res.json() )
    .then(user => console.log(user.title))

    })
}


getNombre(8)

const getNombreasyn = async (idPost) => {


    try { 
        const resPost = await fetch(`https://jsonplaceholder.typicode.com/todos/${idPost}`)
        // await es la solicitud a todo ese fetch que es una promesa

        const post =await  resPost.json()

        const resUser = await fetch(`https://jsonplaceholder.typicode.com/todos/${post.id}`)
        const user = await resUser.json()
        console.log(user.title)

    } catch (error){
    console.log(error);
    }
}

getNombreasyn(8)