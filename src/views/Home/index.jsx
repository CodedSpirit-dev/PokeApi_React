import React, { useState, useEffect } from 'react';
import { fetchPokemonData } from "/src/service/api.js";

const Home = () => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        // Llamada a un endpoint al montar el componente
        fetchPokemonData('pikachu')
            .then(data => setPokemon(data))
            .catch(error => console.error('Error fetching Pokemon data:', error));
    }, []);

    return (
        <div>
            {pokemon ? (
                <div>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprite_url} alt={pokemon.name} />
                    <p>Type: {pokemon.types.join(', ')}</p>
                    <p>Abilities: {pokemon.abilities.join(', ')}</p>
                    <p>Score: {pokemon.score}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Home;
