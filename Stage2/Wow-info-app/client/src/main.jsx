import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import App from './App.jsx'
import { ContextProvider } from './ContextProvider/Context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <ContextProvider>
    <App />
  </ContextProvider>
  </Router>,
)
