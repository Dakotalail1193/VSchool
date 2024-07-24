import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './style.css'
import { ContextProvider } from './ContextProvider/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider>
    <App/>
    </ContextProvider>
    
)