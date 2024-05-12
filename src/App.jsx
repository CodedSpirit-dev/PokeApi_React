import './App.css'
import {FetchPokemonData, Home} from "./pages/index.js";
import {StatsCalculator} from "./pages/index.js";
import {Route, Routes} from "react-router-dom";
import PokemonDetail from "./pages/PokemonDetail/index.jsx";
import Header from "./public components/Header/index.jsx";
import DeleteAllPokemon from "./pages/DeleteAllPokemon/index.jsx";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/statscalculator" element={<StatsCalculator />} />
                <Route path="/editapokemons" element={<div>Cart</div>} />
                <Route path="/fetchpokemondata" element={<FetchPokemonData/>} />
                <Route path="/pokemon/:pokemonId" element={<PokemonDetail />} />
                <Route path={"/deleteallpokemon"} element={<DeleteAllPokemon />} />
            </Routes>
        </>
    );
}

export default App;
