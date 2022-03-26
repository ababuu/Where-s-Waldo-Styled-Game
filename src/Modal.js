import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Spinner from './Spinner';
import Db from './firebase.config';
import {  ref, set ,push} from "firebase/database";
import Modal2 from './Modal2';


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
    const [name, setName] = React.useState('');

function writeUserData() {
    if(name==''){
        return;
    }
    const postListRef = ref(Db, `players/${props.level}`);
    const newPostRef = push(postListRef);
    set(newPostRef,{
        username: name,
        score: props.sec
    });
}

const handleClick=()=>{
    writeUserData();
    setDelay(true);
}

React.useEffect(() => {
    
    if(delay==true){
        setInterval(() => {
            setDelay(false);
        }, 3000);
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
                <h2>You did it in {props.sec} Seconds</h2>
                <br></br>
                <p style={{marginBottom:'1em'}}>Enter your name and be a part of the Global Leader Board</p>
                <TextField  onChange={e => setName(e.target.value)} style={{width:'80%'}} id="filled-basic" label="Name" variant="filled"/>
                <Button style={{marginTop:'2em',width:'80%'}} variant="outlined" onClick={handleClick}>Submit</Button>
        </Box>
    </Modal>}
    
    {delay && <Spinner spinnerText={'Loading Leader Board...'}/>}
    {!delay && props.first && <Modal2 level={props.level}/>}
    {!delay && props.second && <Modal2 level={props.level}/>}
    {!delay && props.third && <Modal2 level={props.level}/>}
    {!delay && props.fourth && <Modal2 level={props.level}/>}
    </div>
);
}
