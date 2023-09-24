
let pokemonCard = {
    number: 4,
    name: Charizard,
    nickname: The-Lizard-Pokemon,
    type: Fire,
    height: 2,
    weight: 18.7,
    description: from-the-time,
}


const searchBtn = document.querySelector(".pokemonSearch");
const searchBar = document.querySelector("input");

async function whosThatPokemon(pokemon) {
    const pokeURL = "https://pokeapi.co/api/v2/pokemon/";
    const response = await fetch(pokeURL + searchBar.innerHTML);
    var data = await response.json();

    console.log(data);

    const pokeArray = {
        ".slot1" : data.results.name,
        ".slot2" : data.results.name, 
        ".slot3" : data.results.name, 
        ".slot4" : data.results.name, 
        ".slot5" : data.results.name, 
        ".slot6" : data.results.name, 
        ".slot7" : data.results.name, 
        ".slot8" : data.results.name, 
        ".slot9" : data.results.name,
    };

    for(let className in pokeArray) {
        document.querySelector(className).innerHTML = pokeArray[className];
    }
   

};

searchBtn.addEventListener("click", function (){
    whosThatPokemon(searchBar.value);
});

searchBar.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        whosThatPokemon(searchBar.value);
    }
});
