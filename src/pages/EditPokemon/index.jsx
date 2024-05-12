import { useState } from 'react';
import { getPokemonDataFromDB, updatePokemonDataInDB } from '../../service/api.js';
import styles from './styles.module.css';
import axios from "axios";

const EditPokemon = () => {
    const [pokemonData, setPokemonData] = useState({
        pokemon_id: null, // Include pokemon_id in the initial state
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
    const [searchQuery, setSearchQuery] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (searchQuery) {
                getPokemonDataFromDB(searchQuery)
                    .then(data => {
                        setPokemonData({
                            ...pokemonData,
                            pokemon_id: data.pokemon_id, // Set pokemon_id from fetched data
                            name: data.name,
                            types: data.types || ['', ''],
                            abilities: data.abilities || [],
                            hp: data.base_stats.hp,
                            attack: data.base_stats.attack,
                            defense: data.base_stats.defense,
                            special_attack: data.base_stats["special-attack"],
                            special_defense: data.base_stats["special-defense"],
                            speed: data.base_stats.speed,
                            height: data.height,
                            weight: data.weight,
                            sprite_url: data.sprite_url
                        });
                    })
                    .catch(error => console.error('Error fetching Pokemon:', error));
            }
        }
    };

    const handleSearchClick = () => {
        if (searchQuery) {
            getPokemonDataFromDB(searchQuery)
                .then(data => {
                    setPokemonData({
                        ...pokemonData,
                        pokemon_id: data.pokemon_id, // Set pokemon_id from fetched data
                        name: data.name,
                        types: data.types || ['', ''],
                        abilities: data.abilities || [],
                        hp: data.base_stats.hp,
                        attack: data.base_stats.attack,
                        defense: data.base_stats.defense,
                        special_attack: data.base_stats["special-attack"],
                        special_defense: data.base_stats["special-defense"],
                        speed: data.base_stats.speed,
                        height: data.height,
                        weight: data.weight,
                        sprite_url: data.sprite_url
                    });
                })
                .catch(error => console.error('Error fetching Pokemon:', error));
        }
    };

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

            const response = await axios.put(`http://localhost:8000/update_pokemon_data_in_db/${pokemonData.pokemon_id}/`, formattedData);
            setResponseMessage(<h1>'Pokémon updated successfully!!'</h1>);
            console.log(response.data); // For debugging purposes
        } catch (error) {
            console.error('Error updating Pokemon data:', error);
            setResponseMessage('Failed to update Pokémon.');
        }
};

    return (
        pokemonData.pokemon_id ? (
            <div className={styles.formContainer}>
                <h1>Edit Pokémon</h1>
                <input
                    type="text"
                    placeholder="Search a Pokémon to edit"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleSearchClick}>Search</button>
                <form onSubmit={handleSubmit}>
                    <img src={pokemonData.sprite_url} alt={pokemonData.name} />
                    <h2>Name</h2>
                    <input type="text" name="name" placeholder="Enter Pokémon Name" value={pokemonData.name}
                           onChange={handleInputChange}/>
                    <div>
                        <h2>Types</h2>
                        <input type="text" name="type1" placeholder="Enter Type 1 (Obligatory)" value={pokemonData.types[0]}
                               onChange={handleInputChange}/>
                        <input type="text" name="type2" placeholder="Enter Type 2 (Optional)"
                               value={pokemonData.types[1] || ''} onChange={handleInputChange}/>
                    </div>
                    <input type="text" name="abilities" placeholder="Enter Pokémon Abilities (comma-separated, max 4)"
                           value={pokemonData.abilities.join(',')} onChange={handleInputChange}/>
                    <div>
                        <h2>Base Stats</h2>
                        <h3>Enter values between 1 and 200</h3>
                        <label>HP (Health Points)</label>
                        <input type="number" name="hp" placeholder="Enter HP" value={pokemonData.hp} min="1" max="200"
                               onChange={handleInputChange}/>
                        <label>Attack</label>
                        <input type="number" name="attack" placeholder="Enter Attack" value={pokemonData.attack} min="1"
                               max="200" onChange={handleInputChange}/>
                        <label>Defense</label>
                        <input type="number" name="defense" placeholder="Enter Defense" value={pokemonData.defense} min="1"
                               max="200" onChange={handleInputChange}/>
                        <label>Special Attack</label>
                        <input type="number" name="special_attack" placeholder="Enter Special Attack"
                               value={pokemonData.special_attack} min="1" max="200" onChange={handleInputChange}/>
                        <label>Special Defense</label>
                        <input type="number" name="special_defense" placeholder="Enter Special Defense"
                               value={pokemonData.special_defense} min="1" max="200" onChange={handleInputChange}/>
                        <label>Speed</label>
                        <input type="number" name="speed" placeholder="Enter Speed" value={pokemonData.speed} min="1"
                               max="200" onChange={handleInputChange}/>
                    </div>
                    <label>Height</label>
                    <input type="number" name="height" placeholder="Enter Height" value={pokemonData.height}
                           onChange={handleInputChange}/>
                    <label>Weight</label>
                    <input type="number" name="weight" placeholder="Enter Weight" value={pokemonData.weight}
                           onChange={handleInputChange}/>
                    <label>Sprite URL</label>
                    <input type="text" name="sprite_url" placeholder="Enter Sprite URL" value={pokemonData.sprite_url}
                           onChange={handleInputChange}/>
                    <button type="submit">Update Pokémon</button>
                </form>
                {responseMessage && <p>{responseMessage}</p>}
            </div>
        ) : (
            <div className={styles.formContainer}>
                <h1>Search for a Pokémon to edit</h1>
                <input
                    type="text"
                    placeholder="Search a Pokémon to edit"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleSearchClick}>Search</button>
            </div>
        )
    )
}


export default EditPokemon;