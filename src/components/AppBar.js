import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Appbar.css';
import Button from '@mui/material/Button';
import { Navigate } from "react-router-dom";
import HelpIcon from '@mui/icons-material/Help';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    p: 4,
    outline: 'none',
    borderRadius: '10px'
    };

export default function ButtonAppBar(props) {
    const [showInfo, setShowInfo] = React.useState(false); 
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const [goHome, setGoHome] = React.useState(false);
    const handleHome=()=>{
        setGoHome(true);
    }
    
return (
    <Box sx={{ flexGrow: 1}}>
    <AppBar position="static" className='appbar'>
        <Toolbar style={{background:''}}>
        {props.showHomeButton && <Button variant="outlined" onClick={handleHome}>Home</Button>}
        <Typography sx={{ flexGrow: 1 }}>
            <h3 style={{color: 'black', textAlign:'center'}}>Find the Character</h3>
        </Typography>
        <HelpIcon onClick={handleOpen} style={{color: 'black',cursor:'pointer'}}/>
        </Toolbar>
    </AppBar>
    {goHome && <Navigate to='/'/>}
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Find the Character
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            A game based on <a href="https://en.wikipedia.org/wiki/Where%27s_Wally%3F#:~:text=Where's%20Wally%3F%20(called%20Where's%20Waldo,things%20at%20a%20given%20location." target='_blank'>Where's Waldo</a>. Find all the characters, shown on the right for each level, as fast as you can. A timer runs as soon as a level is opened. Find the characters in the least amount of time and be part of the leader board.
        </Typography>
        </Box>
    </Modal>
    </Box>
);
}
