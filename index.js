import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.post("/submit", (req, res) => {
    console.log(req.body);
});

app.get("/", (req, res) => {
    res.send("<h1>Hello!</h1>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});

/*const pokeURL = "https://pokeapi.co/api/v2/pokemon/";
const searchBtn = document.querySelector(".pokemonSearch");
const searchBar = document.querySelector("input");

async function whosThatPokemon(pokemon) {
   
    const response = await fetch(pokeURL + searchBar.innerHTML);
    var data = await response.json();

    console.log(data);

    const pokeArray = {
        ".slot1" : data.results.,
        ".slot2", 
        ".slot3", 
        ".slot4", 
        ".slot5", 
        ".slot6", 
        ".slot7", 
        ".slot8", 
        ".slot9",
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

*/