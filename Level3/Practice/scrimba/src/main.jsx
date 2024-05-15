import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Name/NameApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App darkMode={true} />
  </React.StrictMode>,
)
