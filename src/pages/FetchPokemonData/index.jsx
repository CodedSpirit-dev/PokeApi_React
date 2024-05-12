import React, { useEffect, useState } from "react";
import { fetchPokemonData } from "../../service/api.js";

import styles from './styles.module.css';

export const FetchPokemonData = () => {
    const [pokemonData, setPokemonData] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

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
                <h1>Home</h1>
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
            <div className='pokemonCard'>
                <h2 className='pokemonName'>{pokemonData?.name}</h2>
                <span className='pokemon_id'>{pokemonData?.pokemon_id}</span>
                {pokemonData?.types?.map((type, index) => (
                    <h2 key={index} className='pokemonTypeCard'>{type}</h2>
                ))}
                <h3>{pokemonData?.score}</h3>
                <img src={pokemonData?.sprite_url} alt={pokemonData?.name}/>
            </div>
        </>
    );
}

export default FetchPokemonData;