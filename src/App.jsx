import './App.css'
import {FetchPokemonData, Home} from "./pages/index.js";
import {StatsCalculator} from "./pages/index.js";
import {Route, Routes} from "react-router-dom";
import PokemonDetail from "./pages/PokemonDetail/index.jsx";
import Header from "./public components/Header/index.jsx";
import ReleasePokemon from "./pages/DeletePokemon/index.jsx";
import AddCustomPokemon from "./pages/AddCustomPokemon/index.jsx";
import EditPokemon from "./pages/EditPokemon/index.jsx";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/statscalculator" element={<StatsCalculator />} />
                <Route path="/addpokemon" element={<AddCustomPokemon />} />
                <Route path="/fetchpokemondata" element={<FetchPokemonData/>} />
                <Route path="/pokemon/:pokemonId" element={<PokemonDetail />} />
                <Route path={"/editpokemon"} element={<EditPokemon />} />
                <Route path={"/releasepokemon"} element={<ReleasePokemon />} />
            </Routes>
        </>
    );
}

export default App;
