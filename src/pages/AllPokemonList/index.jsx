import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { background } from "../../utils/colorsByPokemonType.js";

import styles from './styles.module.css';

const AllPokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await axios.get('http://localhost:8000/list_all/');
                const sortedData = response.data.sort((a, b) => parseInt(a.pokemon_id) - parseInt(b.pokemon_id));
                setPokemons(sortedData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
                setError('Failed to fetch Pokémon data. Please try again later.');
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className={styles.pokemonList}>
            {pokemons.map((pokemon) => {
                const colorSelected = background[pokemon.types[0]]; // Correctly calculate color for each pokemon
                return (
                    <Link to={`/pokemon/${pokemon.pokemon_id}`} key={pokemon.pokemon_id}>
                        <div style={{ background: colorSelected }} className={styles.pokemonCard}>
                            <h2 className={styles.pokemonName}>{pokemon.name}</h2>
                            <img src={pokemon.sprite_url} alt={pokemon.name} />
                            <span className={styles.pokemonId}>ID: {pokemon.pokemon_id}</span>
                            {/* Render other pokemon details as needed */}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default AllPokemonList;