// PokemonAPI.js
import axios from "axios";

const fetchPokemonData = async (pokemonNameOrId) => {
    try {
        const response = await axios.get(`http://localhost:8000/fetch_pokemon_data/${pokemonNameOrId}/`);
        return response.data; // The Pokemon data
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        throw error;
    }
}

export { fetchPokemonData };