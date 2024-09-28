import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ModalProvider } from './context/modal-context.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
      
    </ModalProvider>
    
  </StrictMode>,
)
