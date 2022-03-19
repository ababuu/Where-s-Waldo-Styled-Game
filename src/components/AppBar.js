import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Appbar.css';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Lev3 from './level_3.jpg';
import Lev1 from './level_1.jpg';
import Lev2 from './level 2.jpg';
import { Navigate } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    height:400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

export default function ButtonAppBar(props) {
    const [showPopup, setShowPopup] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [first, setFirst] = React.useState(false);
    const [second, setSecond] = React.useState(false);
    const [third, setThird] = React.useState(false);
    const [fourth, setFourth] = React.useState(false);
    const [goHome, setGoHome] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleClick=(e)=>{
        if(e.currentTarget.id=='first'){
            setFirst(true);
        }
        else if(e.currentTarget.id=='second'){
            setSecond(true);
        }
        else if(e.currentTarget.id=='third'){
            setThird(true);
        }
        else if(e.currentTarget.id=='fourth'){
            setFourth(true);
        }
    }
    const handleHome=()=>{
        setGoHome(true);
    }
return (
    <Box sx={{ flexGrow: 1}}>
    <AppBar position="static" className='appbar'>
        <Toolbar style={{background:''}}>
        {props.showHomeButton && <Button variant="outlined" onClick={handleHome}>Home</Button>}
        <Typography sx={{ flexGrow: 1 }}>
            <h3 style={{color: 'black', textAlign:'center'}}>Where's Waldo</h3>
        </Typography>
        {props.showLeaderBoard ? <Button variant="outlined" onClick={handleOpen}>Leader Board</Button>: null}
        </Toolbar>
    </AppBar>
    <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <h2>
                Show Leader Board, choose level
            </h2>
            <div style={{display:'flex',marginTop:'2em'}}>
                <div style={{width:'75%'}} id='first' onClick={handleClick}>
                    <p style={{margin:'1em'}}>Level 1</p>
                    <img src={Lev1} style={{width:'75%',borderRadius:'1em',height:'10em'}}></img>
                </div>
                <div style={{width:'75%'}} id='second' onClick={handleClick}>
                    <p style={{margin:'1em'}}>Level 2</p>
                    <img src={Lev2} style={{width:'75%',borderRadius:'1em',height:'10em'}}></img></div>
                <div style={{width:'75%'}} id='third' onClick={handleClick}>
                    <p style={{margin:'1em'}}>Level 3</p>
                    <img src={Lev3} style={{width:'75%',borderRadius:'1em',height:'10em'}}></img>
                </div>
                <div style={{width:'75%'}} id='fourth' onClick={handleClick}>
                    <p style={{margin:'1em'}}>Level 4</p>
                    <img src={Lev1} style={{width:'75%',borderRadius:'1em',height:'10em'}}></img>
                </div>
            </div>
            </Box>
        </Modal>
    </div>
    {first && <Navigate to='/levelOneBoard'/>}
    {second && <Navigate to='/levelTwoBoard'/>}
    {third && <Navigate to='/levelThreeBoard'/>}
    {fourth && <Navigate to='/levelFourBoard'/>}
    {goHome && <Navigate to='/'/>}
    </Box>
);
}
