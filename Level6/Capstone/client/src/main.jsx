import React from 'react'
import ReactDom from 'react-dom'
import App from './App.jsx'
import './style.css'
import { ContextProvider} from './ContextProvider/Context.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App/>
  </ContextProvider>
)