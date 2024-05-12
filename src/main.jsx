import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import {FetchPokemonData, Home, StatsCalculator} from "./pages/index.js"; // Import App component instead of individual pages

// Create a router using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Use App component as the root element
    children: [
      { path: '*', element: <Home /> }, // Use Home component as the default route
      { path: '/statscalculator', element: <StatsCalculator /> }, // Use StatsCalculator component as the /1 route
      { path: '/editapokemons', element: <div>Cart</div> }, // Use a div element as the /editapokemons route
        { path: '/fetchpokemondata', element: <FetchPokemonData/> } // Use a div element as the /fetchpokemondata route
    ]
  }
]);

// Render the RouterProvider with the created router
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);