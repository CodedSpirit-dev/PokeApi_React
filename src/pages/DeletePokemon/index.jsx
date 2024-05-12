// Modify src/pages/DeletePokemon/index.jsx

import React, { useState } from 'react';
import { releasePokemon } from '../../service/api'; // Adjust the import path as necessary

const ReleasePokemon = () => {
    const [pokemonIdOrName, setPokemonIdOrName] = useState('');

    const handleInputChange = (e) => {
        setPokemonIdOrName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await releasePokemon(pokemonIdOrName);
            alert('Pokémon released successfully.');
        } catch (error) {
            console.error('Error releasing Pokémon:', error);
            alert('Failed to release Pokémon.');
        }
    };

    return (
        <div>
            <h1>Release a Pokémon</h1>
            <p>This will release one Pokémon from the database.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Pokémon ID or Name"
                    className='searchInput'
                    value={pokemonIdOrName}
                    onChange={handleInputChange}
                />
                <button type="submit">Release</button>
            </form>
        </div>
    );
};

export default ReleasePokemon;