import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Spinner from './Spinner';
import Db from './firebase.config';
import {  ref, set ,push} from "firebase/database";
import { Navigate } from "react-router-dom";
import LeaderBoard from './LeaderBoard';

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

export default function BasicModal(props) {
const [open, setOpen] = React.useState(true);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const [delay, setDelay] = React.useState(true);
const [delay2, setDelay2] = React.useState(true);
const [name, setName] = React.useState('');
const [gotoBoard, setGotoBoard] = React.useState(false);

function writeUserData() {
    if(name==''){
        return;
    }
    const postListRef = ref(Db, 'players');
    const newPostRef = push(postListRef);
    set(newPostRef,{
        username: name,
        score: props.sec
    });
}

const handleClick=()=>{
    writeUserData();
    setGotoBoard(true);
    setDelay(true);
}

React.useEffect(() => {
    
    if(delay==true){
        setInterval(() => {
            setDelay(false);
        }, 2500);
    }
}, [])

return (
    <div>
        {delay && <Spinner spinnerText={'You did it in...'}/>}
        {!delay && <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
                <h2>You finished in {props.sec} Seconds</h2>
                <br></br>
                <p style={{marginBottom:'1em'}}>Enter your name and be a part of the Global Leader Board</p>
                <TextField  onChange={e => setName(e.target.value)} style={{width:'80%'}} id="filled-basic" label="Name" variant="filled"/>
                <Button style={{margin:'2em'}} variant="outlined" onClick={handleClick}>Submit</Button>
        </Box>
        
    </Modal>}
    {delay && gotoBoard && <Spinner spinnerText={'Loading Leader Board...'}/>}
    {!delay && gotoBoard && props.first && <Navigate to='/levelOneBoard'/>}
    {!delay && gotoBoard && props.second && <Navigate to='/levelTwoBoard'/>}
    {!delay && gotoBoard && props.third && <Navigate to='/levelThreeBoard'/>}
    </div>
);
}
