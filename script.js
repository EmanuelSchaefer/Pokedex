let loadedPokemons = [];
let seite = 0;

function loadPokemon() {
    fetchNextPokemonsURL(0, 20);
}

async function fetchNextPokemonsURL(startPokemon, lastPokemon) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${startPokemon}&limit=${lastPokemon}`);
    let responseAsJson = await response.json();

    for (let index = 0; index < responseAsJson.results.length; index++) {
        let pokemonResponse = await fetch(responseAsJson.results[index].url);
        let pokemonAsJson = await pokemonResponse.json();
        loadedPokemons.push(pokemonAsJson);
    }
    url = responseAsJson.next;
    console.log(loadedPokemons);
    renderPokemon();
}

function loadNext() {
  seite++
  fetchNextPokemonsURL(seite * 20,(seite * 0)+20);
}

function renderPokemon(j) {         
    let content = document.getElementById('Content');
    content.innerHTML = "";
    for (let i = 0; i < loadedPokemons.length; i++) {
        let pokemon = loadedPokemons[i];
        let pokeId = pokemon["id"];
        let pokeName = pokemon["name"].charAt(0).toUpperCase() + pokemon["name"].slice(1);
        let pokemonImage = pokemon["sprites"]["other"]["official-artwork"]["front_default"];
        let pokemonType = pokemon["types"][0]["type"]["name"];           
        content.innerHTML += htmelPokemonRender(i, j, pokeId, pokeName, pokemonImage, pokemonType);
    }
}
                
function openInfoContainer(i) {
  let infoContainer = document.getElementById('infoContainer');
  infoContainer.classList.remove('d-none');
  renderPokemonCard(i);
}

function closeInfoContainer() {
  document.getElementById('infoContainer').classList.add('d-none');
}

function renderPokemonCard(i) {             
  let content = document.getElementById('infoContainer');
  content.innerHTML = "";
      let pokemon = loadedPokemons[i];
      let PokeId = pokemon["id"];
      let PokeName = pokemon["name"].charAt(0).toUpperCase() + pokemon["name"].slice(1);
      let PokemonImage = pokemon["sprites"]["other"]["official-artwork"]["front_default"];
      let statHin = pokemon["stats"][0]["stat"]["name"];
      let statFor = pokemon["stats"][0]["base_stat"];
      let statHin1 = pokemon["stats"][1]["stat"]["name"];
      let statFor1 = pokemon["stats"][1]["base_stat"];
      let statHin2 = pokemon["stats"][2]["stat"]["name"];
      let statFor2 = pokemon["stats"][2]["base_stat"];
      let statHin3 = pokemon["stats"][3]["stat"]["name"];
      let statFor3 = pokemon["stats"][3]["base_stat"];
      let statHin4 = pokemon["stats"][4]["stat"]["name"];
      let statFor4 = pokemon["stats"][4]["base_stat"];
      content.innerHTML += htmlPokemonCard(i, PokeId, PokeName, PokemonImage, statHin,
      statFor, statHin1, statHin2, statHin3, statHin4, statFor1, statFor2, statFor3, statFor4);
}

function Nofunction() {
    alert('No function')
}