import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import App from './src/App.jsx'
import { ContextProvider } from './ContextProvider/Context';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <ContextProvider>
    <App />
  </ContextProvider>
  </Router>,
)
