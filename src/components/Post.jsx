import React from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'

const Post = () => {
    return (
        <Card sx={{ margin: 5 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    stuff here
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    ldfksjsd
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default Post