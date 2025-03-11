const data = async () => {
    try {
        const pokemonName = document.querySelector('#search-input').value.toLowerCase().trim();
        if (!pokemonName) {
            alert("Please enter a Pokémon name or ID!");
            return;
        }

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error('Could not find the Pokémon');
        }

        const pokemonDatajson = await response.json();
        console.log(pokemonDatajson);

        document.querySelector('#pokemon-card').removeAttribute("hidden");
        // Update Pokémon name & image
        document.querySelector('#pokemon-name').innerHTML = pokemonDatajson.name.toUpperCase();
        document.querySelector('#pokemon-img').src = pokemonDatajson.sprites.front_default;

        // Update Pokémon type (reset first)
        const typeElement = document.querySelector('#pokemon-type');
        typeElement.innerHTML = `<strong>Type:</strong> `;
        typeElement.innerHTML += pokemonDatajson.types.map(t => t.type.name).join(", ");

        // Update Pokémon stats
        document.querySelector('#pokemon-stats').innerHTML = `<strong>Stats:</strong> ${pokemonDatajson.stats.map(s => `${s.stat.name}: ${s.base_stat}`).join(", ")}`;

    } catch (error) {
        console.error(error);
        alert(error.message);
    }
};

document.querySelector('#search-btn').addEventListener('click', data);
document.querySelector('#search-input').addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        data();
    }
});
