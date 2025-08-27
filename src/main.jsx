import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App0826c-tooltip.jsx'


// import './index.css'
// import App from './App.jsx'
// import './style.css'
// import './assets/all.scss'

import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // 嚴謹模式StrictMode
  <React.StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </React.StrictMode>,
)
