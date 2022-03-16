import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Appbar.css';

export default function ButtonAppBar(props) {
return (
    <Box sx={{ flexGrow: 1}}>
    <AppBar position="static" className='appbar'>
        <Toolbar style={{background:''}}>
        <Typography sx={{ flexGrow: 1 }}>
            <h3 style={{color: 'black', textAlign:'center'}}>Where's Waldo</h3>
        </Typography>
        </Toolbar>
    </AppBar>
    </Box>
);
}
