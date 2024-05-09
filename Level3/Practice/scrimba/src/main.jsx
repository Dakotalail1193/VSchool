import React from 'react'
import ReactDOM from 'react-dom'
import App from './DJ/DjApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App darkMode={true} />
  </React.StrictMode>,
)
