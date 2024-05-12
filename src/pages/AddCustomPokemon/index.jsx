import { useState } from 'react';
import axios from 'axios';

import styles from './styles.module.css';

const AddCustomPokemon = () => {
    const [pokemonData, setPokemonData] = useState({
        name: '',
        types: ['', ''],
        abilities: [],
        hp: 1,
        attack: 1,
        defense: 1,
        special_attack: 1,
        special_defense: 1,
        speed: 1,
        height: 0,
        weight: 0,
        sprite_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
    });
    const [responseMessage, setResponseMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'abilities') {
            const abilitiesArray = value.split(',').map(ability => ability.trim()).slice(0, 4);
            setPokemonData({
                ...pokemonData,
                abilities: abilitiesArray,
            });
        } else if (name.startsWith('type')) {
            const index = parseInt(name[name.length - 1], 10) - 1;
            const updatedTypes = [...pokemonData.types];
            updatedTypes[index] = value || (index === 1 ? null : ''); // Keep the second type optional
            setPokemonData({
                ...pokemonData,
                types: updatedTypes,
            });
        } else {
            setPokemonData({
                ...pokemonData,
                [name]: name === 'height' || name === 'weight' ? parseInt(value, 10) :
                    name.includes('hp') || name.includes('attack') || name.includes('defense') ||
                    name.includes('special_attack') || name.includes('special_defense') ||
                    name.includes('speed') ? Math.max(1, Math.min(200, parseInt(value, 10))) : value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formattedData = {
                name: pokemonData.name,
                types: pokemonData.types,
                abilities: pokemonData.abilities,
                base_stats: {
                    hp: pokemonData.hp,
                    attack: pokemonData.attack,
                    defense: pokemonData.defense,
                    "special-attack": pokemonData.special_attack,
                    "special-defense": pokemonData.special_defense,
                    speed: pokemonData.speed
                },
                height: pokemonData.height,
                weight: pokemonData.weight,
                sprite_url: pokemonData.sprite_url
            };

            const response = await axios.post('http://localhost:8000/add_custom_pokemon_data/', formattedData);
            setResponseMessage('Custom Pokémon added successfully!');
            console.log(response.data); // For debugging purposes
        } catch (error) {
            console.error('Error adding custom Pokémon:', error);
            setResponseMessage('Failed to add custom Pokémon.');
        }
    };


    return (
        <div className={styles.formContainer}>
            <h1>Looks like you found unkown Pokémon!!</h1>
            <form onSubmit={handleSubmit}>
                <h2>Name</h2>
                <input type="text" name="name" placeholder="Enter Pokémon Name" value={pokemonData.name} onChange={handleInputChange}/>
                <div>
                    <h2>Types</h2>
                    <input type="text" name="type1" placeholder="Enter Type 1 (Obligatory)" value={pokemonData.types[0]} onChange={handleInputChange}/>
                    <input type="text" name="type2" placeholder="Enter Type 2 (Optional)" value={pokemonData.types[1] || ''} onChange={handleInputChange}/>
                </div>
                <input type="text" name="abilities" placeholder="Enter Pokémon Abilities (comma-separated, max 4)" value={pokemonData.abilities.join(',')} onChange={handleInputChange}/>
                <div>
                    <h2>Base Stats</h2>
                    <h3>Enter values between 1 and 200</h3>
                    <label>HP (Health Points)</label>
                    <input type="number" name="hp" placeholder="Enter HP" value={pokemonData.hp} min="1" max="200" onChange={handleInputChange}/>
                    <label>Attack</label>
                    <input type="number" name="attack" placeholder="Enter Attack" value={pokemonData.attack} min="1" max="200" onChange={handleInputChange}/>
                    <label>Defense</label>
                    <input type="number" name="defense" placeholder="Enter Defense" value={pokemonData.defense} min="1" max="200" onChange={handleInputChange}/>
                    <label>Special Attack</label>
                    <input type="number" name="special_attack" placeholder="Enter Special Attack" value={pokemonData.special_attack} min="1" max="200" onChange={handleInputChange}/>
                    <label>Special Defense</label>
                    <input type="number" name="special_defense" placeholder="Enter Special Defense" value={pokemonData.special_defense} min="1" max="200" onChange={handleInputChange}/>
                    <label>Speed</label>
                    <input type="number" name="speed" placeholder="Enter Speed" value={pokemonData.speed} min="1" max="200" onChange={handleInputChange}/>
                </div>
                <label>Height</label>
                <input type="number" name="height" placeholder="Enter Height" value={pokemonData.height} onChange={handleInputChange}/>
                <label>Weight</label>
                <input type="number" name="weight" placeholder="Enter Weight" value={pokemonData.weight} onChange={handleInputChange}/>
                <label>Sprite URL</label>
                <input type="text" name="sprite_url" placeholder="Enter Sprite URL" value={pokemonData.sprite_url} onChange={handleInputChange}/>
                <button type="submit">Add Pokémon</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default AddCustomPokemon;