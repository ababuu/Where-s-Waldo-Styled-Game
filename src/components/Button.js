import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Navigate } from "react-router-dom";

const images = [
{
    url: 'https://i.pinimg.com/564x/9d/ac/87/9dac87c1171d498f0409ff5f5080ee45.jpg',
    title: 'Find the Difference',
    width: '45%',
    id: 1
},
{
    url: 'https://i.pinimg.com/564x/9d/ac/87/9dac87c1171d498f0409ff5f5080ee45.jpg',
    title: 'Search and Find Characters',
    width: '45%',
    id: 1
},
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
position: 'relative',
height: 400,
[theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 200,
},
'&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
    opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
    opacity: 0,
    },
    '& .MuiTypography-root': {
    border: '4px solid currentColor',
    },
},
}));

const ImageSrc = styled('span')({
position: 'absolute',
left: 220,
right: 0,
top: 100,
bottom: 0,
backgroundSize: 'cover',
backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
position: 'absolute',
left: 220,
right: 0,
top: 100,
bottom: 0,
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
position: 'absolute',
left: 220,
right: 0,
top: 100,
bottom: 0,
backgroundColor: theme.palette.common.black,
opacity: 0.4,
transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
height: 3,
width: 18,
backgroundColor: theme.palette.common.white,
position: 'absolute',
bottom: -2,
left: 'calc(50% - 9px)',
transition: theme.transitions.create('opacity'),
}));
    

export default function ButtonBases() {
    const [first, setfirst] = React.useState(false);
    const [second, setsecond] = React.useState(false);
    
    const handleFirst=(event)=>{
        event.preventDefault();
            setfirst(true);
    }
    const handleSecond=(event)=>{
        event.preventDefault();
            setsecond(true);
    }
return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
    <ImageButton
        focusRipple
        key={images[0].title}
        style={{
            width: images[0].width,
        }}
        >
        <ImageSrc style={{ backgroundImage: `url(${images[0].url})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
            <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            onClick={handleFirst}
            sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
            >
            {images[0].title}
            <ImageMarked className="MuiImageMarked-root" />
            </Typography>
        </Image>
        </ImageButton>

        <ImageButton
        focusRipple
        key={images[1].title}
        style={{
            width: images[1].width,
        }}
        >
        <ImageSrc style={{ backgroundImage: `url(${images[1].url})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
            <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            onClick={handleSecond}
            sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
            >
            {images[1].title}
            <ImageMarked className="MuiImageMarked-root" />
            </Typography>
        </Image>
        </ImageButton>
    {first ? <Navigate to="/firstLevel"/>: null}
    {second ? <Navigate to="/secondLevel"/>: null}
    </Box>
);
}
