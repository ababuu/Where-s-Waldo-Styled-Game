import * as React from 'react';
import ButtonAppBar from './components/AppBar';
export default function LeaderBoard(props) {

return (
    <div>
        <ButtonAppBar runtimer={true} showHomeButton={true} showLeaderButton={false}/>
        <h1>Level {props.level} Leader Board</h1>
    </div>
);
}
