import React, { useState } from 'react';
import axios from 'axios';

const DeleteAllPokemon = () => {
    const [pokemonIdOrName, setPokemonIdOrName] = useState('');

    const handleInputChange = (e) => {
        setPokemonIdOrName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:8000/delete_pokemon_data_from_db/${pokemonIdOrName}/`);
            alert('Pokémon deleted successfully.');
        } catch (error) {
            console.error('Error deleting Pokémon:', error);
            alert('Failed to delete Pokémon.');
        }
    };

    return (
        <div>
            <h1>Delete a Pokémon</h1>
            <p>This will delete one Pokémon from the database.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Pokémon ID or Name"
                    className='searchInput'
                    value={pokemonIdOrName}
                    onChange={handleInputChange}
                />
                <button type="submit">Delete</button>
            </form>
        </div>
    );
};

export default DeleteAllPokemon;