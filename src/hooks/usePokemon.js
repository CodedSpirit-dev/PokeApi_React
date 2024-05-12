import axios from "axios";
import { useEffect, useState } from "react";

export const usePokemon = (url, id) => {
    const [pokemon, setPokemon] = useState(null);

    const axiosGetPokemon = async () => {
        if (url) {
            const { data } = await axios.get(url);
            setPokemon(data);
        } else if (id) {
            const { data } = await axios.get(
                `http://localhost:8000/get_pokemon_data_from_db/${id}/`
            );
            setPokemon(data);
        }
    };

    useEffect(() => {
        axiosGetPokemon();
    }, []);

    return { pokemon };
};