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

const fetchPokemons = async () => {
    try {
        const response = await axios.get('http://localhost:8000/get_list_of_pokemon_saved_in_db/');
        return response.data.sort((a, b) => parseInt(a.pokemon_id) - parseInt(b.pokemon_id));
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        throw error; // Rethrow the error to handle it in the component
    }
};

// Add to src/service/api.js

const releasePokemon = async (pokemonIdOrName) => {
    try {
        const response = await axios.delete(`http://localhost:8000/delete_pokemon_data_from_db/${pokemonIdOrName}/`);
        return response;
    } catch (error) {
        throw error;
    }
};

export { fetchPokemonData, fetchPokemons, releasePokemon };
