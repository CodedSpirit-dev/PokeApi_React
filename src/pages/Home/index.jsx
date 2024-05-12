// Home.jsx
import React, { useEffect, useState } from "react";
import {fetchPokemonData} from "../../service/api.js";
import {Link} from "react-router-dom";

export const Home = () => {

    return (
        <>
            <header>
                <h1>Elige que quieres hacer</h1>
                <Link to={"/fetchpokemondata"}>
                    <button>Busca a un Pokemon</button>
                </Link>
                <Link to={"/statscalculator"}>
                    <button>Calculadora de Stats</button>
                </Link>
            </header>
        </>
    );
}

export default Home;