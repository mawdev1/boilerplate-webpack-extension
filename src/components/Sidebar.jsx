import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { DarkMode, FlagCircle, Home, SpeakerNotes, WarningAmber } from '@mui/icons-material'


const Sidebar = ({ mode, setMode }) => {
    return (
        <Box flex={1.5} p={2}>
            <Box position='fixed'>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#forecast'>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Forecast" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#incidents'>
                            <ListItemIcon>
                                <WarningAmber />
                            </ListItemIcon>
                            <ListItemText primary="Incidents" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#feedback'>
                            <ListItemIcon>
                                <SpeakerNotes />
                            </ListItemIcon>
                            <ListItemText primary="Feedback" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#goals'>
                            <ListItemIcon>
                                <FlagCircle />
                            </ListItemIcon>
                            <ListItemText primary="Goal tracker" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#goals'>
                            <ListItemIcon>
                                <FlagCircle />
                            </ListItemIcon>
                            <ListItemText primary="Links" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a'>
                            <ListItemIcon>
                                <DarkMode />
                            </ListItemIcon>
                            <Switch onChange={e => setMode(mode === 'light' ? 'dark' : 'light')} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar