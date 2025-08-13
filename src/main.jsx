import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import './style.css'
import './assets/all.scss'
import App from './pages/App0813-weather-3'

createRoot(document.getElementById('root')).render(
  // 嚴謹模式StrictMode
  <StrictMode>
    <App />
  </StrictMode>,
)
