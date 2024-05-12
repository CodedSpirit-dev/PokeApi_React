import './App.css'
import Navbar from './public components/Navbar/index.jsx';
import {FetchPokemonData, Home} from "./pages/index.js";
import {StatsCalculator} from "./pages/index.js";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/statscalculator" element={<StatsCalculator />} />
                <Route path="/editapokemons" element={<div>Cart</div>} />
                <Route path="/fetchpokemondata" element={<FetchPokemonData/>} />
            </Routes>
        </>
    );
}

export default App;
