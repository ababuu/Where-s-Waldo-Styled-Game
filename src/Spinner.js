import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 4,
    outline: 'none',
    display:'inline-block',
    borderRadius:'10px'
};

export default function CircularIndeterminate(props) {
    const [open, setOpen] = React.useState(true);
return (
    
    <div style={{width:'100%',background:'black(0.5)'}}>
        <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <CircularProgress />
            <h2 style={{display:'inline-block',padding:'1em'}}>{props.spinnerText}</h2>
        </Box>
        </Modal>
        
    </div>
);
}
