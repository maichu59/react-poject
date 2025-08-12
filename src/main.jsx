import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import App from './pages/App0812-weather-2'

createRoot(document.getElementById('root')).render(
  // 嚴謹模式StrictMode
  <StrictMode>
    <App />
  </StrictMode>,
)
