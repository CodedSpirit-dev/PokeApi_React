import './App.css'
import Navbar from './public components/Navbar/index.jsx';
import Home from "./pages/Home/index.jsx";
import StatsCalculator from './pages/StatsCalculator/index.jsx';

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <StatsCalculator />
        </div>
    )
}

export default App
