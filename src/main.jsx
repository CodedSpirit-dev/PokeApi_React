// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home/index.jsx'
import StatsCalculator from './pages/StatsCalculator/index.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/statscalculator',
    element: <StatsCalculator />,
  },
  {
    path: '/contact',
    element: <div>Contact</div>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
