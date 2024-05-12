import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllPokemonList from "../AllPokemonList/index.jsx";


import styles from './styles.module.css';
import axios from "axios";

export const Home = () => {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await axios.get('http://localhost:8000/get_list_of_pokemon_saved_in_db/');
                const sortedData = response.data.sort((a, b) => parseInt(a.pokemon_id) - parseInt(b.pokemon_id));
                setPokemonData(sortedData);
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
            }
        };
        fetchPokemons();
    }, []);

    return (
        <>
            <header className={styles.headerMain}>
                <h1>What do you want to do?</h1>
                <Link to={"/fetchpokemondata"}>
                    <button>Search a Pokémon</button>
                </Link>
                <Link to={"/addpokemon"}>
                    <button>Add my own Pokémon</button>
                </Link>
                <Link to={"/editpokemon"}>
                    <button>Edit a Pokémon</button>
                </Link>
                <Link to={"/releasepokemon"}>
                    <button>Delete a Pokémon</button>
                </Link>
                <button>View all info of a Pokémon</button>
                <button>Calculate a Pokémon score</button>
            </header>
            {pokemonData && pokemonData.length > 0 ? <AllPokemonList /> : <div className={styles.emptyPokedex}><h2>Search Pokemons to fill your Pokedex</h2></div>}
        </>
    );
};
export default Home;