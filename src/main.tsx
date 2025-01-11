import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import { ThemeProvider } from './components/context/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(

    <ThemeProvider>
      <App />
    </ThemeProvider>
)
