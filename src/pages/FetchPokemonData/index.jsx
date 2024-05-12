import React, { useEffect, useState } from "react";
import { fetchPokemonData } from "../../service/api.js";
import { background } from "../../utils/colorsByPokemonType.js";



import styles from './styles.module.css';

export const FetchPokemonData = () => {
    const [pokemonData, setPokemonData] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const colorSelected = background[pokemonData?.types[0]];

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (searchQuery) {
            fetchPokemonData(searchQuery)
                .then(data => setPokemonData(data))
                .catch(error => console.error('Failed to fetch Pokemon:', error));
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
                    placeholder="Busca un Pokemon..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='searchInput'
                />
                <button type="submit">Buscar</button>
            </form>
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
                    <h3 >This pokemon is now in the Database</h3>
                </div>
            )
            }
        </>
    );
}

export default FetchPokemonData;