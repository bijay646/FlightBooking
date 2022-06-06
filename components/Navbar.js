import React from 'react'
import { Box, Container, Button,ButtonGroup, Typography, Toolbar, Grid, TextField } from '@mui/material';
import { GoKey } from 'react-icons/Go';
import { AiFillLock } from 'react-icons/Ai';
const Navbar = () => {
    return (
        <div>
            <Box sx={{bgcolor:'black', color:'white', padding:'0px 20px'}}>
                <Grid container spacing={2} square>
                    <Grid item xs={8}>
                        <Toolbar variant="dense">
                            <Typography variant="h5" color="inherit" component="div">
                                <strong>Flight Booking</strong>
                            </Typography>
                        </Toolbar>

                    </Grid>
                    <Grid item xs={4} sx={{ position: 'absolute', top: '-1', right: '0' }}>
                        <Toolbar variant="dense">
                            <ButtonGroup variant="outlined">
                                <Button variant="outlined" sx={{color:"white"}}><GoKey/>Log In</Button>
                                <Button variant="contained" color="error"><AiFillLock/>Sign Up</Button>
                            </ButtonGroup>
                        </Toolbar>


                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}

export default Navbar