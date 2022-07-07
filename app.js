

let titre=document.getElementById('title')
let token;
fetch("https://sheltered-wave-91591.herokuapp.com/")
.then(res => res.json())
.then(data => console.log(data));

fetch("https://sheltered-wave-91591.herokuapp.com/api/login", {
    method : "POST",
    body: JSON.stringify({ username: "pikachu" , password: "pikachu" }),
    headers:{ "Content-type" : "application/json"}
})
.then( res => res.json())
.then(data => {
    findAllPokemon(data.token)
    token=data.token;
    console.log(data)
})


function findAllPokemon(token){
    fetch("https://sheltered-wave-91591.herokuapp.com/api/pokemons",{
        method: "GET",
        headers: { "Authorization" : `Bearer ${token}`}
    })
    .then( res => res.json())
    .then( data => {
        console.log(data)
        let arr=data.data;
        console.log(arr)
       arr.forEach(e => addDiv(e.name, e.hp, e.cp, e.types, e.picture))
    })

}
function addDiv(name,hp,cp,type,url){
    let displayResult=document.getElementById('display-result');
    displayResult.innerHTML+=`
            <div class="pokemon">

                    <img class="pokemon-picture" src="${url}" alt="">
                <div class="pokemon-info">
                    <ul>
                        <li>Nom: ${name}</li>
                        <li>Hp: ${hp}</li>
                        <li>Cp: ${cp}</li>
                        <li>Type: ${type}</li>
                    </ul>
                </div>
            </div>
        `
}


let inputText=document.getElementById("input-text");
let inputBtn=document.getElementById("btn-valid");

inputBtn.addEventListener('click',()=>{
    fetch(`https://sheltered-wave-91591.herokuapp.com/api/pokemons?name=${inputText.value}`,{
        methods:"GET",
        headers:{ "Authorization": `Bearer ${token}`}
    })
    .then(res => console.log(res.json()))
    .then( data => console.log(data))

});


