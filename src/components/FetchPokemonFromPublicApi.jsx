import React from "react";


const FetchPokemonFromPublicApi = () => {
    const [pokemon, setPokemon] = React.useState(null);


    React.useEffect(() => {
        fetch(`http://localhost:8000/fetch_pokemon_data/${pokemon.name}`)
            .then((response) => response.json())
            .then((data) => setPokemon(data));
    }, [pokemon]);


    return (
        <div>
            <h1>Pokemon</h1>
            {pokemon && (
                <div>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            )}
        </div>
    );
}

export default FetchPokemonFromPublicApi;