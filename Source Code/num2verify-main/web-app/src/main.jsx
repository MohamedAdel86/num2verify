import { CssBaseline } from '@mui/material'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { UserAuthProvider } from './context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserAuthProvider>
      <CssBaseline />
          <App />
    </UserAuthProvider> 
  </StrictMode>
)