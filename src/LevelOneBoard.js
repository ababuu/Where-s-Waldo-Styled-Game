import * as React from 'react';
import ButtonAppBar from './components/AppBar';
import Table from './Table';
export default function LevelOneBoard() {

return (
    <div>
        <div>
        <ButtonAppBar runtimer={false} showHomeButton={true} showLeaderBoard={true}/>
        <Table/>
    </div>
    </div>
);
}
