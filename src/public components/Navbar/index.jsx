import React from 'react';
import {Link} from 'react-router-dom';

import styles from './styles.module.css';

const Navbar=()=>{
    return (
        <div className={styles.navBar}>
            <div className='home'>
                <Link to="/">Inicio</Link>
            </div>
            <div className='statscalculator'>
                <Link to="/statscalculator">Calculadora de Stats</Link>
            </div>
            <div className='editapokemons'>
                <Link to="/editapokemons">Editapokemon</Link>
            </div>
            <div className='fetchpokemondata'>
                <Link to="/fetchpokemondata">Busca a un Pokemon</Link>
            </div>
        </div>
    )

}

export default Navbar;