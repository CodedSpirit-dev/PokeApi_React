export const fetchPokemonData = async (pokemonNameOrId) => {
    try {
        const response = await fetch(`http://localhost:8000/fetch_pokemon_data/${pokemonNameOrId}/`)
        if (!response.ok) {
            throw new Error('Error fetching Pokemon data');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        throw error;
    }
}

export const addCustomPokemonData = async (pokemonData) => {
    try {
        const response = await fetch('http://localhost:8000/add_custom_pokemon_data/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pokemonData)
        });
        if (!response.ok) {
            throw new Error('Error adding custom Pokemon data');
        }
        return response.json();
    } catch (error) {
        console.error('Error adding custom Pokemon data:', error);
        throw error;
    }
};
