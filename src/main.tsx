import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/assets/CSS/Index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
