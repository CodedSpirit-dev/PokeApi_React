import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
    const { pokemonId } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/get_pokemon_data_from_db/${pokemonId}/`);
                setPokemonDetails(response.data);
            } catch (error) {
                console.error('Error fetching Pokemon details:', error);
            }
        };

        fetchPokemonDetails();
    }, [pokemonId]);

    if (!pokemonDetails) return <div>Loading...</div>;

    return (
        <div>
            <h1>{pokemonDetails.name}</h1>
            {/* Display other details */}
        </div>
    );
};

export default PokemonDetail;