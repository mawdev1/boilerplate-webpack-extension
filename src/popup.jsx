import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@mui/material'
import './popup.css'
import App from './App.jsx'
import { theme } from './theme.js'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)