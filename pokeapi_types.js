async function fetchPokemonData(pokemonType) {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${pokemonType}`);
    const pokemonData = await response.json();
    return pokemonData;
}

// Creating an Event Listener to run the program when the input has changed in the search bar
document.addEventListener("DOMContentLoaded", async () => { // "input" event sets to run code upon typing into the search bar, no need to submit
    const normalData = await fetchPokemonData("normal");
    const fireData = await fetchPokemonData("fire");
    const waterData = await fetchPokemonData("water");
    const electricData = await fetchPokemonData("electric");
    const grassData = await fetchPokemonData("grass");
    const iceData = await fetchPokemonData("ice");
    const fightingData = await fetchPokemonData("fighting");
    const poisonData = await fetchPokemonData("poison");
    const groundData = await fetchPokemonData("ground");
    const flyingData = await fetchPokemonData("flying");
    const psychicData = await fetchPokemonData("psychic");
    const bugData = await fetchPokemonData("bug");
    const rockData = await fetchPokemonData("rock");
    const ghostData = await fetchPokemonData("ghost");
    const dragonData = await fetchPokemonData("dragon");
    const darkData = await fetchPokemonData("dark");
    const steelData = await fetchPokemonData("steel");
    const fairyData = await fetchPokemonData("fairy");

    const pokemonInfoElement = document.getElementById('pokemon-info');
    
    // Displays the pokemon data based on the value entered into the search bar
    pokemonInfoElement.innerHTML = `
    <div class="m-2">
        <h3 id=typeNormal style="font-weight: bold; text-shadow: 1px 0px 10px #a8a878">Normal:</h3>
        <ul>
            ${normalData.pokemon.map(pokemon => `<li>${pokemon.pokemon.name}</li>`).join('')}
        </ul>
        <h3 id=typeFire style="font-weight: bold; text-shadow: 1px 0px 10px #f08030">Fire:</h3>
        <ul>
            ${fireData.pokemon.map(pokemon => `<li>${pokemon.pokemon.name} </li>`).join('')}
        </ul>
        <h3 id=typeWater style="font-weight: bold; text-shadow: 1px 0px 10px #6890f0">Water:</h3>
        <ul>
            ${waterData.pokemon.map(pokemon => `<li>${pokemon.pokemon.name}</li>`).join('')}
        </ul>
        <h3 id=typeElectric style="font-weight: bold; text-shadow: 1px 0px 10px #f8d030">Electric:</h3>
        <ul>
            ${electricData.pokemon.map(pokemon => `<li>${pokemon.pokemon.name}</li>`).join('')}
        </ul>
        <h3 id=typeGrass style="font-weight: bold; text-shadow: 1px 0px 10px #78c850">Grass:</h3>
        <ul>
            ${grassData.pokemon.map(pokemon => `<li>${pokemon.pokemon.name}</li>`).join('')}
        </ul>
        <h3 id=typeIce style="font-weight: bold; text-shadow: 1px 0px 10px #98d8d8">Ice:</h3>
        <ul>
            ${iceData.pokemon.map(pokemon => `<li>${pokemon.pokemon.name}</li>`).join('')}
        </ul>
        <h3 id=typeFighting style="font-weight: bold; text-shadow: 1px 0px 10px #c03028">Fighting:</h3>
        <ul>
            ${fightingData.pokemon.map(pokemon => `<li>${pokemon.pokemon.name}</li>`).join('')}
        </ul>
        <h3 id=typePoison style="font-weight: bold; text-shadow: 1px 0px 10px #a040a0">Poison:</h3>
        <ul>
            ${poisonData.pokemon.map(pokemon => `<li>${pokemon.pokemon.name}</li>`).join('')}
        </ul>
        <h3 id=typeGround style="font-weight: bold; text-shadow: 1px 0px 10px #e0c068">Ground:</h3>
        <ul>
            ${groundData.pokemon.map(pokemon => `<li>${pokemon.pokemon.name}</li>`).join('')}
        </ul>
        <h3 id=typeFlying style="font-weight: bold; text-shadow: 1px 0px 10px #a890f0">Flying:</h3>
        <ul>
            ${flyingData.pokemon.map(pokemon => `<li>${pokemon.pokemon.name}</li>`).join('')}
        </ul>
        <h3 id=typePsychic style="font-weight: bold; text-shadow: 1px 0px 10px #f85888">Psychic:</h3>
        <ul>
            ${psychicData.pokemon.map(pokemon => `<li>${pokemon.pokemon.name}</li>`).join('')}
        </ul>
        <h3 id=typeBug style="font-weight: bold; text-shadow: 1px 0px 10px #a8b820">Bug:</h3>
        <ul>
            ${bugData.pokemon.map(pokemon => `<li>${pokemon.pokemon.name}</li>`).join('')}
        </ul>
        <h3 id=typeRock style="font-weight: bold; text-shadow: 1px 0px 10px #b8a038">Rock:</h3>
        <ul>
            ${rockData.pokemon.map(pokemon => `<li>${pokemon.pokemon.name}</li>`).join('')}
        </ul>
        <h3 id=typeGhost style="font-weight: bold; text-shadow: 1px 0px 10px #705898">Ghost:</h3>
        <ul>
            ${ghostData.pokemon.map(pokemon => `<li>${pokemon.pokemon.name}</li>`).join('')}
        </ul>
        <h3 id=typeDragon style="font-weight: bold; text-shadow: 1px 0px 10px #7038f8">Dragon:</h3>
        <ul>
            ${dragonData.pokemon.map(pokemon => `<li>${pokemon.pokemon.name}</li>`).join('')}
        </ul>
        <h3 id=typeDark style="font-weight: bold; text-shadow: 1px 0px 10px #705848">Dark:</h3>
        <ul>
            ${darkData.pokemon.map(pokemon => `<li>${pokemon.pokemon.name}</li>`).join('')}
        </ul>
        <h3 id=typeSteel style="font-weight: bold; text-shadow: 1px 0px 10px #b8b8d0">Steel:</h3>
        <ul>
            ${steelData.pokemon.map(pokemon => `<li>${pokemon.pokemon.name}</li>`).join('')}
        </ul>
        <h3 id=typeFairy style="font-weight: bold; text-shadow: 1px 0px 10px #ee99ac">Fairy:</h3>
        <ul>
            ${fairyData.pokemon.map(pokemon => `<li>${pokemon.pokemon.name}</li>`).join('')}
        </ul>
    </div>`;
});
