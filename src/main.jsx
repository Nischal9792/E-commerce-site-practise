import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import ShopConetxtProvider from '../src/context/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopConetxtProvider>
      <App />
    </ShopConetxtProvider>
    
  </BrowserRouter>,
)
