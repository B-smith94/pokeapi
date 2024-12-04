// Fetching data fromt the pokemon API
async function fetchPokemonData(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemonData = await response.json();
    return pokemonData;
}

// Creating an Event Listener to run the program when the input has changed in the search bar
document.addEventListener("input", async () => { // "input" event sets to run code upon typing into the search bar, no need to submit
    let pokeName= document.getElementById('search-name').value.toLowerCase();
    const pokemonData = await fetchPokemonData(pokeName);
    const pokemonInfoElement = document.getElementById('pokemon-info');
    
    // Displays the pokemon data based on the value entered into the search bar
    pokemonInfoElement.innerHTML = `
    <div class="m-2">
        <h2>Name: ${pokemonData.name}</h2>
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        <h3>Types:</h3>
        <ul>
            ${pokemonData.types.map(type => `<li>${type.type.name}</li>`).join('')}
        </ul>
        <h3>Abilities:</h3>
        <ul>
            ${pokemonData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
        </ul>
        <h3>Stats:</h3>
        <ul>
            ${pokemonData.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
        </ul>
    </div>`;
});

