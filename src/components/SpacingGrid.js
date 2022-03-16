import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Navigate } from "react-router-dom";
import Lev3 from './level_3.jpg';
import Lev1 from './level_1.jpg';
import Lev2 from './level 2.jpg';

export default function SpacingGrid() {
    const SX_Grid={
        height: 375,
        width: 500,
        backgroundColor: 'lightgray',
        margin:3,
        position: 'relative'
        };
    const SX_text={
        position:'absolute',
        bottom: 3,
        left: 5
    }
    const [first, setfirst] = React.useState(false);
    const [second, setsecond] = React.useState(false);
    const [third, setthird] = React.useState(false);
    const [fourth, setfourth] = React.useState(false);
    
    const handleClick=(event)=>{
        event.preventDefault();
        if(event.target.id==1){
            setfirst(true);
        }
        else if(event.target.id==2){
            setsecond(true);
        }
        else if(event.target.id==3){
            setthird(true);
        }
        else if(event.target.id==4){
            setfourth(true);
        }
    }
return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
    <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2} sx={{ marginTop:0 }}>
            <Grid key={1} id={1} item>
            <Paper 
                id={1}
                
                sx={SX_Grid}
            >
                <img src={Lev1} id={1} style={{width:'100%',borderRadius:'5px'}} onClick={handleClick}/>
            </Paper>
            
            </Grid>
            <Grid key={2} item>
            <Paper
                id={2}
                onClick={handleClick}
                sx={SX_Grid}
            >
                <img src={Lev2} id={2} style={{width:'100%', height:'23.5em',borderRadius:'5px'}} onClick={handleClick}/>
            </Paper>
            </Grid>
            <Grid key={3} item>
            <Paper
                id={3}
                onClick={handleClick}
                sx={SX_Grid}
            >
                <img src={Lev3} id={3} style={{width:'100%', height:'23.5em',borderRadius:'5px'}} onClick={handleClick}/>
            </Paper>
            </Grid>
            <Grid key={4} item>
            <Paper
                id={4}
                onClick={handleClick}
                sx={SX_Grid}
            >
                <h2 style={SX_text}>Level 4</h2>
            </Paper>
            </Grid>
        </Grid>
    </Grid>
    {first ? <Navigate to="/firstLevel"/>: null}
    {second ? <Navigate to="/secondLevel"/>: null}
    {third ? <Navigate to="/thirdLevel"/>: null}
    {fourth ? <Navigate to="/fourthLevel"/>: null}
    </Grid>
);
}
