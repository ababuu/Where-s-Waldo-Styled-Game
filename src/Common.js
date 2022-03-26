import ButtonAppBar from './components/AppBar';
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Modal from '@mui/material/Modal';
import './style.css'
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import MuiAlert from '@mui/material/Alert';
import BasicModal from './Modal';


export default function Common(props) {
    const [x, setx] = React.useState(0);
    const [y, sety] = React.useState(0);
    const [clicked, setclicked] = React.useState('');
    const [openSuccessSnack, setOpenSuccessSnack] = React.useState(false);
    const [openErrorSnack, setErrorOpenSnack] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [first, setfirst] = React.useState(false);
    const [second, setSecond] = React.useState(false);
    const [third, setThird] = React.useState(false);
    const [charsToFInd, setCharsToFInd] = React.useState(2);
    let timeSec=0;

    const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const style = {
        position: 'absolute',
        top: `${y+60}px`,
        left: `${x+120}px`,
        transform: 'translate(-50%, -50%)',
        width: '13em',
        bgcolor: 'background.paper',
        p: 4,
        borderRadius: '10px',
        outline: 'none',
        };
    const handleOpen = () => {
        setOpen(true)};
    const handleClose = () => setOpen(false);
    const mouseMove=(e)=> {
        setx(e.screenX);
        if(e.screenY>491){
            sety(e.screenY-250);
        }
        else{
            sety(e.screenY);
        }
    };
    const handlePauseAndSelection=(e)=>{
        handlePause();
        handleSelection(e);
    }
    const handleClicked=(e)=>{
        setclicked(e.target.id);
    }
    const clickedFun=(e)=>{
        handleOpen();
        handleClicked(e);
    }
    const handleSelection=(e)=>{
        let selected=e.currentTarget.id;
        if(charsToFInd<0){
            handlePause();
        }
        if(selected!=clicked || clicked==''){
            setErrorOpenSnack(true);
        }
        else if(selected==clicked){
            setOpenSuccessSnack(true);
            setCharsToFInd(charsToFInd-1);
            if(selected=='spongeBob'){
                setfirst(true);
            }
            else if(selected=='bobMarley'){
                setSecond(true);
            }
            else if(selected=='stewie'){
                setThird(true);
            }
            if(selected=='rick'){
                setfirst(true);
            }
            else if(selected=='waldo'){
                setSecond(true);
            }
            else if(selected=='jack'){
                setThird(true);
            }
            if(selected=='saltBae'){
                setfirst(true);
            }
            else if(selected=='babyGroot'){
                setSecond(true);
            }
            else if(selected=='pickleRick'){
                setThird(true);
            }
            if(selected=='bender'){
                setfirst(true);
            }
            else if(selected=='wall-e'){
                setSecond(true);
            }
            else if(selected=='r2d2'){
                setThird(true);
            }
        }
        setclicked('');
        handleClose();
    }

    const handleErrorSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    setErrorOpenSnack(false); };

    const handleSuccessSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    setOpenSuccessSnack(false); };
    const handleStart = () => {
        setIsActive(true)
        setIsPaused(true)
        increment.current = setInterval(() => {
        setTimer((timer) => timer + 1)
        }, 1000)
    }

    const handlePause = () => {
        clearInterval(increment.current)
        setIsPaused(false)
    }

    const action = (
        <React.Fragment>
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleErrorSnackClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
        </React.Fragment>
    );
    const action2 = (
        <React.Fragment>
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleSuccessSnackClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
        </React.Fragment>
    );
    const [timer, setTimer] = React.useState(0);
    const [isActive, setIsActive] = React.useState(true);
    const [isPaused, setIsPaused] = React.useState(false);
    const increment = React.useRef(null);

    
    const formatTime = () => {
        const getSeconds = timer;
        
        if(charsToFInd<0){
            timeSec=getSeconds;
        }
        return getSeconds;
    }
    
    React.useEffect(() => {
            handleStart();
            if(charsToFInd<0){
                timeSec=formatTime();
            }
    },[]);
    

return (
    <div>
        <ButtonAppBar runtimer={true} showHomeButton={true}/>
        <h2 style={{fontWeight:'light',textAlign:'center',marginBottom:'1em'}}>{formatTime()}</h2>
        {openErrorSnack ?  <div>
            <Snackbar
                open={openErrorSnack}
                autoHideDuration={3000}
                onClose={handleErrorSnackClose}
                action={action}
                severity="error"
            ><Alert onClose={handleErrorSnackClose} severity="error" sx={{ width: '100%' }}>
            Wrong Answer, Keep looking!
            </Alert>
        </Snackbar>
    </div>: null}
    {openSuccessSnack ?  <div>
            <Snackbar
                open={openSuccessSnack}
                autoHideDuration={3000}
                onClose={handleSuccessSnackClose}
                action={action2}
                severity="error"
            ><Alert onClose={handleSuccessSnackClose} severity="success" sx={{ width: '100%' }}>
            You found one character!
            </Alert>
        </Snackbar>
    </div>: null}
    <div className='outer-container'>
    <div className='container' style={{paddingLeft:'20px'}}>
        <div className='div1' id={props.id1} onClick={clickedFun} style={props.div1Style}></div>
        <div className='div2' id={props.id2} onClick={clickedFun} style={props.div2Style}></div>
        <div className='div3' id={props.id3} onClick={clickedFun} style={props.div3Style}></div>
        <img className='image1' src={props.imageSrc} style={{width:'100%', borderRadius:'5px'}} onClick={handleOpen} onMouseMove={mouseMove}/>
        {open ?  
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
            style: {
            background: 'transparent',
            boxShadow: 'none',
            },
        }}
        >
        <Box sx={style}>
        <List
        sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper'
        }}
        >
        <div onClick={charsToFInd ? (first ? null : handleSelection) : handlePauseAndSelection} id={props.id1}>
        <ListItem  className={first ? 'listItem-after' : 'listItem-before'} >
            <ListItemAvatar>
            <Avatar>
                <img src={props.char1Src} alt='a' style={{width:'100%'}}/>
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.primary1}/>
        </ListItem>
        </div>
        <Divider variant="inset" component="li" />
        <div onClick={charsToFInd ? (second ? null : handleSelection) : handlePauseAndSelection} id={props.id2}>
        <ListItem className={second ? 'listItem-after' : 'listItem-before'}>
            <ListItemAvatar>
            <Avatar>
            <img src={props.char2Src} alt='a' style={{width:'100%'}}/>
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.primary2}/>
        </ListItem>
        </div>
        <Divider variant="inset" component="li" />
        <div onClick={charsToFInd ? (third ? null : handleSelection) : handlePauseAndSelection} id={props.id3}>
        <ListItem className={third ? 'listItem-after' : 'listItem-before'}>
            <ListItemAvatar>
            <Avatar>
            <img src={props.char3Src} alt='a' style={{width:'100%'}}/>
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.primary3}/>
        </ListItem>
        </div>
    </List>
        </Box>
        </Modal>
        : null}
    </div>
    <div style={{position:'relative',width:'25%'}}>
    <div className='side-div' style={{height:'500px'}}>
        <h2 style={{padding:'5px'}}>Characters to Look For</h2>
        <div className={first ? 'char1-after' : 'char1-before'}>
            <img src={props.char1Src} style={{width:'70%'}}/>
            <h3 style={{marginTop:'2.3em'}}>{props.name1}</h3>
        </div>
        <div className={second ? 'char2-after' : 'char2-before'}>
            <img src={props.char2Src} style={{width:'70%'}}/>
            <h3 style={{marginTop:'2.3em'}}>{props.name2}</h3>
        </div>
        <div className={third ? 'char3-after' : 'char3-before'}>
            <img src={props.char3Src} style={{width:'70%'}}/>
            <h3 style={{marginTop:'2.3em'}}>{props.name3}</h3>
        </div>
    </div>
    </div>
    </div>
    {charsToFInd>=0 ? null: <BasicModal sec={timeSec} first={props.first} second={props.second} third={props.third} fourth={props.fourth} level={props.level}/>}
    </div>
);
}
