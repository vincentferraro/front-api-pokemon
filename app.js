console.log("Hello!");

let titre=document.getElementById('title')

fetch("https://sheltered-wave-91591.herokuapp.com/")
.then(res => res.json())
.then(data => titre.innerText=data);

fetch("https://sheltered-wave-91591.herokuapp.com/api/login", {
    method : "POST",
    body: JSON.stringify({ username: "pikachu" , password: "pikachu" }),
    headers:{ "Content-type" : "application/json"}
})
.then( res => res.json())
.then(data => {
    findAllPokemon(data.token)
    console.log(data)
})


function findAllPokemon(token){
    fetch("https://sheltered-wave-91591.herokuapp.com/api/pokemons",{
        method: "GET",
        headers: { "Authorization" : `Bearer ${token}`}
    })
    .then( res => res.json())
    .then( data => console.log(data))

}





