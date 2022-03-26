import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {ref, query, orderByChild, onValue} from "firebase/database";
import Db from './firebase.config';
import Spinner from './Spinner';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
[`&.${tableCellClasses.head}`]: {
backgroundColor: theme.palette.common.black,
color: theme.palette.common.white,
},
[`&.${tableCellClasses.body}`]: {
fontSize: 14,
},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
'&:nth-of-type(odd)': {
backgroundColor: theme.palette.action.hover,
},
// hide last border
'&:last-child td, &:last-child th': {
border: 0,
},
}));

export default function CustomizedTables(props) {
    const [delay, setDelay] = React.useState(true);
    const [data, setData] = React.useState([]);

    const readuserData=()=>{
        const dbRef = query(ref(Db, `players/${props.level}`),orderByChild('score'));
        onValue(dbRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                setData(oldArray => [...oldArray, childData]);
            });
        }, {
            onlyOnce: true
        });
        console.log(data);
    }
    
    React.useEffect(() => {
        if(data==null){
            setInterval(() => {
                setDelay(false);
            }, 3000);}
        readuserData();
    }, [])
    

return (
<TableContainer component={Paper} sx={{height: 500  }}>
    {delay && <Spinner/>}
    {!delay && <Table sx={{ minWidth: 150,height: "max-content" }} aria-label="customized table">
    <TableHead>
        <TableRow>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell align="right">Score</StyledTableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {data.map((row) => (
        <StyledTableRow key={row.username}>
            <StyledTableCell component="th" scope="row">
            {row.username}
            </StyledTableCell>
            <StyledTableCell align="right">{row.score}</StyledTableCell>
        </StyledTableRow>
        ))}
    </TableBody>
    </Table>}
</TableContainer>
);
}
