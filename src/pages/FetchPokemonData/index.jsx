import React, { useState } from "react";
import { fetchPokemonData } from "../../service/api.js";
import { background } from "../../utils/colorsByPokemonType.js";

import styles from './styles.module.css';

export const FetchPokemonData = () => {
    const [pokemonData, setPokemonData] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(''); // Estado para manejar errores

    const colorSelected = pokemonData ? background[pokemonData.types[0]] : '';

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (searchQuery) {
            fetchPokemonData(searchQuery)
                .then(data => {
                    setPokemonData(data);
                    setError(''); // Reset error message
                })
                .catch(error => {
                    setError('This Pokemon does not exist in the Pokemon API'); // Show error message
                    setPokemonData(null); // Resetear los datos del Pokémon
                });
        }
    };

    return (
        <>
            <div>
                <h1>Search for a Pokemon</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search a Pokemon..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='searchInput'
                />
                <button type="submit">Search!!</button>
            </form>
            {error && (
                <div className='error'>
                    <h3>{error}</h3>
                </div>
            )}
            {pokemonData && (
                <div>
                    <div style={{background: colorSelected}} className='pokemonCard'>
                        <img src={pokemonData.sprite_url} alt={pokemonData.name}/>
                        <h2 className='pokemonName'>Name: {pokemonData.name}</h2>
                        <h2 className='pokemonId'>ID: {pokemonData.pokemon_id}</h2>
                        <div className='pokemonTypesContainer'>
                            <h2>Types:</h2>
                            {pokemonData.types?.map((type, index) => (
                                <div key={index} className='pokemonType'>
                                    <h2>{type}</h2>
                                </div>
                            ))}
                        </div>
                        <h2 className='pokemonScore'>This Pokemon have a score of: {pokemonData.score}</h2>
                    </div>
                    <h3>This pokemon is now in the Database</h3>
                </div>
            )}
        </>
    );
}

export default FetchPokemonData;
