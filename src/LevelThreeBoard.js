import * as React from 'react';
import ButtonAppBar from './components/AppBar';
export default function LevelThreeBoard() {

return (
    <div>
        <ButtonAppBar runtimer={false} showHomeButton={true} showLeaderBoard={true}/>
        Board 3
    </div>
);
}
