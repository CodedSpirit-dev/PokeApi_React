import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { background } from '../../utils/colorsByPokemonType.js';

import styles from './styles.module.css';

const PokemonDetail = () => {
    const { pokemonId } = useParams();
    const [pokemonData, setPokemonData] = useState(null);

    const colorSelected = background[pokemonData?.types[0]];

    const formatString = (str) => {
        return str
            .split(/(?=[A-Z])/) // Split the string at uppercase letters
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
            .join(' '); // Join the words with a space
    };

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/pokemon/get/${pokemonId}/`);
                setPokemonData(response.data);
            } catch (error) {
                console.error('Error fetching Pokemon details:', error);
            }
        };

        fetchPokemonDetails();
    }, [pokemonId]);

    if (!pokemonData) return <div>Loading...</div>;

    return (
        <div style={{background: colorSelected}} className={styles.pokemonCardDetails}>
            <img src={pokemonData.sprite_url} alt={pokemonData.name}/>
            <header>
                <h2 className='pokemonName'>Name: {pokemonData.name}</h2>
                <h2 className='pokemonId'>ID: {pokemonData.pokemon_id}</h2>
            </header>
            <section className='pokemonDetailsSection'>
                <h2>Types:</h2>
                <div className='pokemonTypesContainer'>
                    {pokemonData.types?.map((type, index) => (
                        <div key={index} className='pokemonType'>
                            <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
                        </div>
                    ))}
                </div>
            </section>
            <h2 className='pokemonScore'>Score: {pokemonData.score}</h2>
            <section className='pokemonDetailsSection'>
                <h2>Height: {pokemonData.height} | Weight: {pokemonData.weight}</h2>
            </section>
            <section className='pokemonDetailsSection'>
                <h2>Abilities:</h2>
                <div className='pokemonAbilitiesContainer'>
                    {pokemonData.abilities?.map((ability, index) => (
                        <div key={index} className='pokemonAbility'>
                            <h2>{ability.charAt(0).toUpperCase() + ability.slice(1)}</h2>
                        </div>
                    ))}
                </div>
            </section>
            <section className='pokemonDetailsSection'>
                <h2>Base Stats:</h2>
                <div className='pokemonBaseStatsContainer'>
                    {Object.entries(pokemonData.base_stats || {}).map(([statName, statValue], index) => (
                        <div key={index} className='pokemonBaseStat'>
                            <h2>{`${statName.replace('-', ' ')}: ${statValue}`}</h2>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default PokemonDetail;