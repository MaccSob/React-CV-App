import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home.jsx'
import './styles/index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home></Home>
  </StrictMode>
)
