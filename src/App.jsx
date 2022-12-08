import React from 'react'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Feed from './components/Feed.jsx'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'

const App = () => {

    const [mode, setMode] = React.useState('light')

    const darkTheme = createTheme({
        palette: {
            mode: mode,
        },
    })

    return (
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={'background.default'} color={'text.primary'}>
                <Navbar />
                <Stack direction='row' spacing={2} justifyContent='space-between'>
                    <Sidebar setMode={setMode} mode={mode} />
                    <Feed />
                </Stack>
            </Box>
        </ThemeProvider>
    )
}

export default App