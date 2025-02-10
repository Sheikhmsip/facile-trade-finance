import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Routers from './Routers/routers'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Routers></Routers>
  </StrictMode>,
)
