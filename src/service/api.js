// PokemonAPI.js
import axios from "axios";

const fetchPokemonData = async (pokemonNameOrId) => {
    const response = await axios.get(`http://localhost:8000/pokemon/fetch/${pokemonNameOrId}/`);
    return response.data; // The Pokemon data
}

const fetchPokemons = async () => {
    const response = await axios.get('http://localhost:8000/list_all/');
    return response.data.sort((a, b) => parseInt(a.pokemon_id) - parseInt(b.pokemon_id));
};

// Add to src/service/api.js

const releasePokemon = async (pokemonIdOrName) => {
    const response = await axios.delete(`http://localhost:8000/delete_pokemon_data_from_db/${pokemonIdOrName}/`);
    return response;
};

const getPokemonDataFromDB = async (pokemonNameOrId) => {
    return axios.get(`http://localhost:8000/pokemon/get/${pokemonNameOrId}/`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching Pokemon data:', error);
            throw error;
        });
}

const updatePokemonDataInDB = async (pokemonNameOrId) => {
    try {
        const response = await axios.put(`http://localhost:8000/pokemon/update/${pokemonNameOrId}/`);
        return response.data;
    } catch (error) {
        console.error('Error updating Pokemon data:', error);
        throw error;
    }

}

export { fetchPokemonData, fetchPokemons, releasePokemon, getPokemonDataFromDB, updatePokemonDataInDB };
