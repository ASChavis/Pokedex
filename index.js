
const searchBtn = document.querySelector(".pokemonSearch");
const searchBar = document.querySelector("input");


async function displayPokemon(pokemonName){

    const pokeURL ="https://pokeapi.co/api/v2/pokemon/";

    const pokeURL2 ="https://pokeapi.co/api/v2/characteristic/";
    
    const response = await fetch(pokeURL + pokemonName);
    const data = await response.json();
    const pokeID= data.id;


    console.log(data);
    console.log(pokeID);

    const pokeDescriptionResponse = await fetch(pokeURL2 + pokeID);
    const pokeDescriptionData = await pokeDescriptionResponse.json();

    console.log(pokeDescriptionData);


    const pokemonCard = {
        ".pokemonName": data.name,
        ".pokemonType": "Type: " + data.types[0].type.name,
        ".height": "Height: " + data.height + " ft",
        ".weight": "Weight: " + data.weight + " lbs",
        ".description": pokeDescriptionData.descriptions.find(desc => desc.language.name === 'en').description,
    };


for (let className in pokemonCard) {
    document.querySelector(className).innerHTML = pokemonCard[className];
}


};


/*
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
*/
searchBtn.addEventListener("click", function (){
    displayPokemon(searchBar.value);
});

searchBar.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        displayPokemon(searchBar.value);
    }
});

