import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Table from './Table';
import { Navigate } from 'react-router-dom';

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
const [home, setHome] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const handleClick=()=>{
    setHome(true);
}

return (
    <div>
    <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <h3>{props.level} level leader board</h3>
            <Table level={props.level}/>
            <Button style={{marginTop:'2em'}} variant="outlined" onClick={handleClick}>Home</Button>
        </Box>
    </Modal>
    {home && <Navigate to='/'/>}
    </div>
);
}
