// Home.jsx
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import AllPokemonList from "../AllPokemonList/index.jsx";

import styles from './styles.module.css';

export const Home = () => {

    return (
        <>
            <header className={styles.headerMain}>
                <h1>What do you want to do?</h1>
                <Link to={"/fetchpokemondata"}>
                    <button>Search a Pokémon</button>
                </Link>
                <Link to={"/statscalculator"}>
                    <button>Add my own Pokémon</button>
                </Link>
                <button>Edit a Pokémon</button>
                <Link to={"/deleteallpokemon"}>
                    <button>Delete a Pokémon</button>
                </Link>
                <button>View all info of a Pokémon</button>
                <button>Calculate a Pokémon score</button>
            </header>
            <div>
                <AllPokemonList/>
            </div>
        </>
    );
}

export default Home;