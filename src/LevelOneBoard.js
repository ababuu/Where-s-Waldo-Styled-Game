import * as React from 'react';
import ButtonAppBar from './components/AppBar';

export default function LevelOneBoard() {

return (
    <div>
        <div>
        <ButtonAppBar runtimer={false} showHomeButton={true} showLeaderBoard={true}/>
        <h1>Level One Leader Board</h1>
    </div>
    </div>
);
}
